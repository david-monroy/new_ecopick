import Vue from "vue";
import AllShipments from "../../services/AllShipmentsService";

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    shipments: [],
  },
  // -----------------------------------------------------------------
  mutations: {
    setAllShipments(state: {}, shipments: {}) {
      Vue.set(state, "shipments", shipments);
    },
  },
  // -----------------------------------------------------------------
  actions: {
    getAllShipments: async (context: any) => {
      await AllShipments.getAllShipments().then((response: any) => {
        context.commit("setAllShipments", response.data);
      });
    },
  },
};
