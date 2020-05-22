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
             if (response.data!==""){
            context.commit("setLoginRoute", response.data);
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("Name",  response.data.results[0].us_first_name +" "+ response.data.results[0].us_last_name);
            localStorage.setItem("Language",  response.data.results[0].us_fk_language);
            localStorage.setItem("ID",  response.data.results[0].us_id); }
            console.log(response.data)
            resolve(response.status);
          }) .catch((error: any) => {
             reject(error.response.status);
           });
           
     });
    },
   },
    
};