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
    createUserRoute: async function (context: any, user: {}) {
        await userService
          .createUserRoute(user)
      },
    },
};

