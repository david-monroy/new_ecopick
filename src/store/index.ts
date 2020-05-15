import Vue from "vue";
import Vuex from "vuex";

import translate from "./modules/translateModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    translate,
  },
});
