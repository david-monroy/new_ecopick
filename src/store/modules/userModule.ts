import Vue from "vue";
import userService from "@/services/userService";

//Aqui se importan los servicios

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    // Aqui van los atributos
    userLogin: [],
  },
  // -----------------------------------------------------------------
  getters: {
    // getters and computed props
  },
  // -----------------------------------------------------------------
  mutations: {
    // Aqui se setean los atributos del state
    setLoginRoute(state: any, newRoute: {}) {   //----OJO pasas un json
        Vue.set(state, "userLogin", newRoute);
      },
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
     validateUserRoute2: async function (context: any, user: {}) {
        await userService
          .validateUserRoute(user)
          .then((response: any) => {
            console.log(response.data);
            context.commit("setLoginRoute", response.data);
            localStorage.set("token",response.data.token)
          });
        // .catch((error: any) => {});
      },
      validateUserRoute: async function (context: any, user: {}) {
        return new Promise((resolve, reject) => {
         userService.validateUserRoute(user)
          .then((response: any) => {
            context.commit("setLoginRoute", response.data);
            localStorage.setItem("token",response.data.token);
            resolve(response.status);
          });
        // .catch((error: any) => {});
     });
    },
   },
    
};

//this.$store.dispatch("example/nombre_action").then(() => {}); para llamar a un action