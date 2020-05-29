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
    getAllShipments: async (context: any, userID: number) => {
      await AllShipments.getAllShipments(userID).then((response: any) => {
        let shipments;
        if (response.status == 200) {
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].status == null) {
              response.data[i].status = "Out For Delivery";
            }
          }
          shipments = response.data;
        } else {
          shipments = [];
        }
        context.commit("setAllShipments", shipments);
      });
    },
  },
};
