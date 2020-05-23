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
  basecost: [],
  order: [],
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

    setBaseCost (state:{}, basecost:[]) {
      Vue.set (state, "basecost", basecost);
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
    getDiscounts: async (context: any) => {
      await NewShipmentService.getDiscounts().then((response:any) => {
          context.commit("setDiscounts", response.data)
      }
      )
    }
  },
    getBaseCost: async (context: any) => {
      await NewShipmentService.getBaseCost().then((response:any) => {
          context.commit("setBaseCost", response.data)
      }
      )
    },
    getOrder: async (context: any, order:) => {
      await NewShipmentService.getOrder().then((response:any) => {
          context.commit("setBaseCost", response.data)
      }
      )
    },
};

//this.$store.dispatch("example/nombre_action").then(() => {}); para llamar a un action
