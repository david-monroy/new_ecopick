import Vue from "vue";
import userService from "../../services/userService";

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    user: {},
  },
  // -----------------------------------------------------------------
  mutations: {
    setUser(state: {}, user: {}) {
      Vue.set(state, "user", user);
    },
  },
  // -----------------------------------------------------------------
  actions: {
    getUser: async (context: any, userId: any) => {
      await userService.getUser(userId).then((response: any) => {
        console.log(response.data[0]);
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
  },
};
