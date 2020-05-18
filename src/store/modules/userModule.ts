import Vue from "vue";
import userService from "@/services/userService";

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    userLogin: [],
  },
  // -----------------------------------------------------------------
  getters: {
  },
  // -----------------------------------------------------------------
  mutations: {
    setLoginRoute(state: any, newRoute: {}) {  
        Vue.set(state, "userLogin", newRoute);
      },
  },
  // -----------------------------------------------------------------
  actions: {
      validateUserRoute: async function (context: any, user: {}) {
        return new Promise((resolve, reject) => {
         userService.validateUserRoute(user)
          .then((response: any) => {
            context.commit("setLoginRoute", response.data);
            localStorage.setItem("token",response.data.token);
            console.log(response.data);
            localStorage.setItem("Name",  response.data.results[0].us_first_name +" "+ response.data.results[0].us_last_name);
            resolve(response.status);
          }) /*.catch((error: any) => {
             resolve(error.status);
           });*/
     });
    },
   },
    
};