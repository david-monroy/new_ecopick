import Vue from "vue";
import userService from "@/services/userService";

//Aqui se importan los servicios

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    // Aqui van los atributos
    route: [],
  },
  // -----------------------------------------------------------------
  getters: {
    // getters and computed props
  },
  // -----------------------------------------------------------------
  mutations: {
    // Aqui se setean los atributos del state
  },
  // -----------------------------------------------------------------
  actions: {
    // métodos que llamen a un servicio para obtener información y a un mutation para setearla en el state
    createUserRoute: async function (context: any, user: {}) {
        await userService
          .createUserRoute(user)
          .then((response: any) => {
            console.log(user);
          });
        // .catch((error: any) => {});
      },
    },
};

//this.$store.dispatch("example/nombre_action").then(() => {}); para llamar a un action