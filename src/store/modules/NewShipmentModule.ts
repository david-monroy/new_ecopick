import Vue from "vue";
import NewShipmentService from "@/services/NewShipmentService";

//Aqui se importan los servicios

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    // Aqui van los atributos
  characteristics: [],
  options: [],
  offices: [],
  discounts: [],
  basecost: {},
  trackingID: [],
  verification: {},
  },
  // -----------------------------------------------------------------
  getters: {
    // getters and computed props
  },
  // -----------------------------------------------------------------
  mutations: {
    // Aqui se setean los atributos del state
    setCharacteristics (state:{}, characteristics:[]) {
        Vue.set (state, "characteristics", characteristics);
    },
    setOptions (state:{}, options:[]) {
      Vue.set (state, "options", options);
  },
  setOffices (state:{}, offices:[]) {
    Vue.set (state, "offices", offices);
},
    setDiscounts (state:{}, discounts:[]) {
      Vue.set (state, "discounts", discounts);
    },

    setBaseCost (state:{}, basecost:{}) {
      Vue.set (state, "basecost", basecost);
    },

    settrackingID (state:{}, trackingID:[]) {
      Vue.set (state, "trackingID", trackingID);
    },

    setVerification (state:{}, verification:{}) {
      Vue.set (state, "verification", verification);
    },


  },
  // -----------------------------------------------------------------
  actions: {
    // métodos que llamen a un servicio para obtener información y a un mutation para setearla en el state
    getCharacteristics: async (context: any) => {
        await NewShipmentService.getCharacteristics().then((response:any) => {
            context.commit("setCharacteristics", response.data)
        }
        )
    },
    getOptions: async (context: any) => {
      await NewShipmentService.getOptions().then((response:any) => {
          context.commit("setOptions", response.data)
      }
      )
  },
    getOffices: async (context: any) => {
      await NewShipmentService.getOffices().then((response:any) => {
          context.commit("setOffices", response.data)
      }
      )
  },
    getDiscounts: async (context: any, userID: number) => {
      await NewShipmentService.getDiscounts(userID).then((response:any) => {
          context.commit("setDiscounts", response.data)
      }
      )
    },
    getBaseCost: async (context: any) => {
      await NewShipmentService.getBaseCost().then((response: any) => {
        const costs = {
        service: response.data[0].co_value,
        shipping: response.data[1].co_value,
        };
        context.commit("setBaseCost", costs);
        });
    },
    sendOrder: async function (context: any, Order: {}) {
      return new Promise((resolve, reject) => {
        NewShipmentService
          .sendOrder(Order)
          .then((response: any) => {
            if (response.data !== "") {
              context.commit("settrackingID", response.data);
            }
            resolve(response.status);
          })
          .catch((error: any) => {
            reject(error.response.status);
          });
      });
    },

    verifyDirection: async function (context: any, Order: {}) {
      return new Promise((resolve, reject) => {
        NewShipmentService
          .verifyDirection(Order)
          .then((response: any) => {
            if (response.data !== "") {
              context.commit("setVerification", response.data);
            }
            resolve(response.status);
          })
          .catch((error: any) => {
            reject(error);
          });
      });
    },
  }
};

//this.$store.dispatch("example/nombre_action").then(() => {}); para llamar a un action
