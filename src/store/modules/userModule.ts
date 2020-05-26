import Vue from "vue";
import userService from "@/services/userService";
import { fa, fb, providerGoogle, providerFacebook } from "../../firebase";

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    userData: {},
    status: {},
    IsNotFederated: {},
  },
  // -----------------------------------------------------------------
  getters: {
    getLoginUserData: (state: any) => state.user,
    getLoginStatus: (state: any) => state.status,
    getIsNotFederated: (state: any) => state.IsNotFederated,
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
        context.commit("setUserData", {
          photo: response.data[0].us_photo,
          firstname: response.data[0].us_first_name,
          secondname: response.data[0].us_second_name,
          lastname: response.data[0].us_last_name,
          secondlastname: response.data[0].us_second_last_name,
          phonenumber: response.data[0].us_phone_number,
          identification: response.data[0].us_identification,
          birthday: response.data[0].us_birthday,
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
              context.commit("setLoginRoute", response.data);
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
    federatedSignUpGoogle: async(context: any, payload: any) =>{
      let email: string | null | undefined;
      
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
                charge:  "Client",
                idLanguage: 1,
                idStatus: 4,
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
         // userData.userPhoto = googleProfile.picture;
          userData.email = googleProfile.email;
          fa.signOut(); }
          else if (payload.provider == "facebook") {
          googleProfile = result.additionalUserInfo?.profile;
          userData.firstName = googleProfile.given_name;
          userData.lastName = googleProfile.family_name;
         // userData.userPhoto = googleProfile.picture;
          userData.email = googleProfile.email; 
          fa.signOut();
          }
        })
        .catch((error) => {
          console.log(error);
        });
      
      await userService.createUserRoute(userData).then((response: any) => {
        if (response.data.status == 201){
          context.commit("setStatus", {registered: true});
          userEmail.email=userData.email;
        } 
      }).catch((error) => {
        console.log(error);
        context.commit("setStatus", {registered: false}); //el correo ya esta usado
        userEmail.email=userData.email;
      });

      await userService.validateEmail(userEmail).then((response: any) => {
        userKey.userPassword=response.data[0].us_password;
      }).catch((error) => {
        console.log(error);
      });

    if(userKey.userPassword === null) {

      await userService.validateUserRoute({email: userData.email, password: null}).then((response: any)=>{
        console.log(response.data);
        if (response.status == 200) {
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("Email", response.data.results[0].us_email);
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
              context.commit("setIsNotFederated", {NotFederated: false});
        }
      })

    } else {
      context.commit("setIsNotFederated", {NotFederated: true});
    }
   },
  },
};
