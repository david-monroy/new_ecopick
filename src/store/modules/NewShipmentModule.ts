import Vue from "vue";
import NewShipmentService from "@/services/NewShipmentService";

//Aqui se importan los servicios

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    // Aqui van los atributos
  characteristics:[],
  },
  // -----------------------------------------------------------------
  getters: {
    // getters and computed props
  },
  // -----------------------------------------------------------------
  mutations: {
    // Aqui se setean los atributos del state
    setPackagesCharacteristic (state:any, newRoute: {}) {
        Vue.set (state, "characteristics", newRoute);
    },
  },
  // -----------------------------------------------------------------
  actions: {
    // métodos que llamen a un servicio para obtener información y a un mutation para setearla en el state
    getPackagesCharacteristic: async function (context: any) {
        await NewShipmentService.getPackagesCharacteristic().then((response:any) => {
            console.log (response);
            context.commit("setPackagesCharacteristic", response.data)
        }
        )
    }
  },
};

//this.$store.dispatch("example/nombre_action").then(() => {}); para llamar a un action
