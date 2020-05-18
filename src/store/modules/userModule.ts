import Vue from "vue";
import userService from "@/services/userService";

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
  },
  // -----------------------------------------------------------------
  getters: {
  },
  // -----------------------------------------------------------------
  mutations: {
  },
  // -----------------------------------------------------------------
  actions: {
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
