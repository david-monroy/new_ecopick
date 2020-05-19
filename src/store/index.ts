import Vue from "vue";
import Vuex from "vuex";

import translate from "./modules/translateModule";
import user from "./modules/userModule";
import invoice from "./modules/invoiceModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    translate,
    invoice,
  },
});
