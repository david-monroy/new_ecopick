import Vue from "vue";
import userService from "@/services/userService";

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    userData: {},
  },
  // -----------------------------------------------------------------
  getters: {},
  // -----------------------------------------------------------------
  mutations: {
    setUserData(state: {}, userData: {}) {
      Vue.set(state, "userData", userData);
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
  },
};
