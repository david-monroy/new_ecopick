import Vue from "vue";
import userService from "@/services/userService";

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: { 
    user: {},
  },
  // -----------------------------------------------------------------
  getters: {
  },
  // -----------------------------------------------------------------
  mutations: {
    setUser(state: {}, user: {}) {
      Vue.set(state, "user", user);
    },
  },
  // -----------------------------------------------------------------
  actions: {
    createUserRoute: async function (context: any, user: {}) {
        await userService
          .createUserRoute(user)
      },
      getUser: async (context: any, userId: any) => {
        await userService.getUser(userId).then((response: any) => {
          context.commit("setUser", {
            name:
              response.data[0].us_first_name +
              " " +
              response.data[0].us_last_name,
            fullName:
              response.data[0].us_first_name +
              " " +
              response.data[0].us_second_name +
              " " +
              response.data[0].us_last_name +
              " " +
              response.data[0].us_second_last_name,
            phoneNumber: response.data[0].us_phone_number,
            identification: response.data[0].us_identification,
            email: response.data[0].us_email,
          });
        });
      },
      recoverPasswordRoute: async function (context: any, user: {}) {
        return new Promise((resolve, reject) => {
           userService
          .recoverPasswordRoute(user)
          .then((response: any) => {
            resolve(response.status);
            });
          });
      },
   },
};
