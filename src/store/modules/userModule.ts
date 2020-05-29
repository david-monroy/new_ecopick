import Vue from "vue";
import userService from "@/services/userService";
import { fa, providerGoogle, providerFacebook } from "../../firebase";

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    userData: {},
    status: {},
    IsNotFederated: {},
    Errors: {},
  },
  // -----------------------------------------------------------------
  getters: {
    getLoginUserData: (state: any) => state.user,
    getLoginStatus: (state: any) => state.status,
    getIsNotFederated: (state: any) => state.IsNotFederated,
    getErrors: (state: any) => state.Errors,
  },
  // -----------------------------------------------------------------
  mutations: {
    setUserData(state: {}, userData: {}) {
      Vue.set(state, "userData", userData);
    },
    setStatus(state: {}, status: any) {
      Vue.set(state, "status", status);
    },
    setIsNotFederated(state: {}, IsNotFederated: any) {
      Vue.set(state, "IsNotFederated", IsNotFederated);
    },
    setErrors(state: {}, Errors: any) {
      Vue.set(state, "Errors", Errors);
    },
  },
  // -----------------------------------------------------------------
  actions: {
    createUserRoute: async function (context: any, user: {}) {
      await userService.createUserRoute(user);
    },
    recoverPasswordRoute: async function (context: any, user: {}) {
      return new Promise((resolve, reject) => {
        userService.recoverPasswordRoute(user).then((response: any) => {
          resolve(response.status);
        });
      });
    },
    getUserData: async function (context: any, userId: number) {
      await userService.getUser(userId).then((response: any) => {
        let birthday;
        if (response.data[0].us_birthday == null) {
          birthday = "";
        } else {
          birthday = new Date(response.data[0].us_birthday)
            .toISOString()
            .substr(0, 10);
        }
        context.commit("setUserData", {
          photo: response.data[0].us_photo,
          firstname: response.data[0].us_first_name,
          secondname: response.data[0].us_second_name,
          lastname: response.data[0].us_last_name,
          secondlastname: response.data[0].us_second_last_name,
          phonenumber: response.data[0].us_phone_number,
          identification: response.data[0].us_identification,
          birthday: birthday,
          language: response.data[0].us_fk_language,
          email: response.data[0].us_email,
          password: response.data[0].us_password,
        });
      });
    },
    validateUserRoute: async function (context: any, user: {}) {
      return new Promise((resolve, reject) => {
        userService
          .validateUserRoute(user)
          .then((response: any) => {
            if (response.data !== "") {
              localStorage.setItem("token", response.data.token);
              localStorage.setItem(
                "Name",
                response.data.results[0].us_first_name +
                  " " +
                  response.data.results[0].us_last_name
              );
              localStorage.setItem("Email", response.data.results[0].us_email);
              localStorage.setItem(
                "Language",
                response.data.results[0].us_fk_language
              );
              localStorage.setItem("ID", response.data.results[0].us_id);
              if (response.data.results[0].us_fk_language == 1) {
                localStorage.setItem("Lang", "en-us");
              } else if (response.data.results[0].us_fk_language == 2) {
                localStorage.setItem("Lang", "es-ve");
              }
            }
            resolve(response.status);
          })
          .catch((error: any) => {
            reject(error.response.status);
          });
      });
    },
    updateUser: async function (context: any, user: {}) {
      await userService.updateUser(user);
    },
    disableUser: async function (context: any, user: {}) {
      await userService.disableUser(user);
    },
    federatedSignUp: async (context: any, payload: any) => {
      const userData: any = {
        identification: null,
        firstName: "",
        secondName: "",
        lastName: "",
        secondLastName: "",
        birthday: null,
        email: "",
        password: null,
        phoneNumber: null,
        charge: "Client",
        idLanguage: 1,
        idStatus: 4,
        photo: null,
      };

      const userKey: any = {
        userPassword: "",
      };

      const userEmail: any = {
        email: "",
      };

      let googleProfile: any;
      await fa
        .signInWithPopup(
          payload.provider == "google" ? providerGoogle : providerFacebook
        )
        .then((result) => {
          if (payload.provider == "google") {
            googleProfile = result.additionalUserInfo?.profile;
            userData.firstName = googleProfile.given_name;
            userData.lastName = googleProfile.family_name;
            userData.photo = googleProfile.picture;
            userData.email = googleProfile.email;
            userEmail.email = googleProfile.email;
            fa.signOut();
          } else if (payload.provider == "facebook") {
            googleProfile = result.additionalUserInfo?.profile;
            userData.firstName = googleProfile.first_name;
            userData.lastName = googleProfile.last_name;
            userData.photo = googleProfile.picture.data.url;
            userData.email = googleProfile.email;
            userEmail.email = googleProfile.email;
            fa.signOut();
          }
        });

      if (userData.email !== "") {
        await userService
          .createUserRoute(userData)
          .then((response: any) => {
            if (response.status == 201) {
              context.commit("setStatus", { registered: true });
            }
          })
          .catch(() => {
            context.commit("setStatus", { registered: false });
          });

        await userService.validateEmail(userEmail).then((response: any) => {
          userKey.userPassword = response.data[0].us_password;
        });

        if (userKey.userPassword === null) {
          await userService
            .validateUserRoute({ email: userData.email, password: null })
            .then((response: any) => {
              if (response.status == 200) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem(
                  "Email",
                  response.data.results[0].us_email
                );
                localStorage.setItem(
                  "Language",
                  response.data.results[0].us_fk_language
                );
                localStorage.setItem("ID", response.data.results[0].us_id);
                localStorage.setItem(
                  "Name",
                  response.data.results[0].us_first_name +
                    " " +
                    response.data.results[0].us_last_name
                );
                if (response.data.results[0].us_fk_language == 1) {
                  localStorage.setItem("Lang", "en-us");
                } else if (response.data.results[0].us_fk_language == 2) {
                  localStorage.setItem("Lang", "es-ve");
                }
                context.commit("setIsNotFederated", { NotFederated: false });
                context.commit("setErrors", { UnexpectedError: false });
              }
            });
        } else {
          context.commit("setIsNotFederated", { NotFederated: true });
          context.commit("setErrors", { UnexpectedError: false });
        }
      } else {
        context.commit("setErrors", { UnexpectedError: true });
      }
    },
  },
};
