import Vue from "vue";
import shipmentService from "../../services/shipmentService";

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    shipment: {},
    mapRoute: [],
    route: [],
  },
  // -----------------------------------------------------------------
  mutations: {
    setShipment(state: {}, shipment: {}) {
      Vue.set(state, "shipment", shipment);
    },
    setMapRoute(state: {}, route: {}) {
      Vue.set(state, "mapRoute", route);
    },
    setRoute(state: {}, route: {}) {
      Vue.set(state, "route", route);
    },
  },
  // -----------------------------------------------------------------
  actions: {
    getShipment: async (context: any, trackingId: string) => {
      return new Promise((resolve, reject) => {
        shipmentService.getShipment(trackingId).then((response: any) => {
          context.commit("setShipment", response.data[0]);
          resolve(response.status);
        });
      });
    },
    sleep: async (context: any, ms: number) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    getRoute: async (context: any, trackingId: string) => {
      await shipmentService.getRoute(trackingId).then(async (response: any) => {
        const route = response.data;
        context.commit("setRoute", route.reverse());
        let latLon = { data: { lat: Number, long: Number } };
        for (let i = 0; i < route.length; i++) {
          latLon = await shipmentService.getLatLon(
            route[i].primaryline + ", " + route[i].city
          );
          if (latLon.data.lat !== undefined) {
            route[i].latlon = latLon.data;
          } else {
            route.splice(i, 1);
          }
          await context.dispatch("sleep", 250);
        }
        context.commit("setMapRoute", route);
      });
    },
  },
};
