import Vue from "vue";
import Vuex from "vuex";

//Aqui se importan los modulos

import user from "./modules/userModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
});
