import Vue from "vue";
import discountService from "@/services/discountService";

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    discounts: [],
  },
  // -----------------------------------------------------------------
  mutations: {
    setDiscounts(state: {}, discounts: []) {
      Vue.set(state, "discounts", discounts);
    },
  },
  // -----------------------------------------------------------------
  actions: {
    getDiscounts: async (context: any, userID: number) => {
      await discountService.getDiscounts(userID).then((response: any) => {
        context.commit("setDiscounts", response.data);
      });
    },
  },
};
