import Vue from "vue";
import invoiceService from "../../services/invoiceService";

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    route: {},
    receiver: {},
    packages: [],
    options: [],
    discount: Number,
  },
  // -----------------------------------------------------------------
  mutations: {
    setRoute(state: {}, route: {}) {
      Vue.set(state, "route", route);
    },
    setReceiver(state: {}, receiver: {}) {
      Vue.set(state, "receiver", receiver);
    },
    setPackages(state: {}, packages: []) {
      Vue.set(state, "packages", packages);
    },
    setOptions(state: {}, options: []) {
      Vue.set(state, "options", options);
    },
    setDiscount(state: {}, discount: number) {
      Vue.set(state, "discount", discount);
    },
  },
  // -----------------------------------------------------------------
  actions: {
    getInvoice: async (context: any, trackingId: any) => {
      await invoiceService.getInvoice(trackingId).then((response: any) => {
        const routeOrigin = response.data.route.origin[0];
        const routeDestination = response.data.route.destination[0];
        const options = [];
        for (let i = 0; i < response.data.options.length; i++) {
          options.push(response.data.options[i].op_name);
        }
        for (let i = 0; i < response.data.packages.length; i++) {
          if (response.data.packages[i].characteristic.length !== 0) {
            response.data.packages[i].characteristic =
              response.data.packages[i].characteristic[0].ch_name;
          } else {
            response.data.packages[i].characteristic = "";
          }
        }
        context.commit("setRoute", {
          origin: `${routeOrigin.of_name}. ${routeOrigin.di_primary_line} ${routeOrigin.di_secondary_line}. ${routeOrigin.di_city}, ${routeOrigin.di_state}, ${routeOrigin.di_country}. ${routeOrigin.di_zip_code}`,
          destination: `${routeDestination.di_primary_line} ${routeDestination.di_secondary_line}. ${routeDestination.di_city}, ${routeDestination.di_state}, ${routeDestination.di_country}. ${routeDestination.di_zip_code}`,
        });
        context.commit("setReceiver", {
          name:
            response.data.receiver[0].re_first_name +
            " " +
            response.data.receiver[0].re_last_name,
          identification: response.data.receiver[0].re_identification,
          email: response.data.receiver[0].re_email,
          phoneNumber: response.data.receiver[0].re_phone_number,
        });
        context.commit("setPackages", response.data.packages);
        context.commit("setOptions", options);
        context.commit("setDiscount", response.data.discounts[0].di_percentage);
      });
    },
  },
};
