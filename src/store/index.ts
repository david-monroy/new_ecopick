import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/userModule";
import translate from "./modules/translateModule";
import invoice from "./modules/invoiceModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    translate,
    invoice,
  },
});
