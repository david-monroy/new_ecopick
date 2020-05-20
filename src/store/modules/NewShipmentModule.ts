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
  },
  // -----------------------------------------------------------------
  actions: {
    // métodos que llamen a un servicio para obtener información y a un mutation para setearla en el state
    getCharacteristics: async (context: any) => {
        await NewShipmentService.getCharacteristics().then((response:any) => {
            console.log ("response" +  response.data);
            context.commit("setCharacteristics", response.data)
        }
        )
    },
    getOptions: async (context: any) => {
      await NewShipmentService.getOptions().then((response:any) => {
          console.log ("response" +  response.data);
          context.commit("setOptions", response.data)
      }
      )
  },
    getOffices: async (context: any) => {
      await NewShipmentService.getOffices().then((response:any) => {
          console.log ("response" +  response.data);
          context.commit("setOffices", response.data)
      }
      )
  },
    getDiscounts: async (context: any) => {
      await NewShipmentService.getDiscounts().then((response:any) => {
          console.log ("response" +  response.data);
          context.commit("setDiscounts", response.data)
      }
      )
    }
  },
};

//this.$store.dispatch("example/nombre_action").then(() => {}); para llamar a un action
