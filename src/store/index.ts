import Vue from "vue";
import Vuex from "vuex";

import translate from "./modules/translateModule";
import user from "./modules/userModule";
import invoice from "./modules/invoiceModule";
import route from "./modules/routeModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    translate,
    user,
    invoice,
    route,
  },
});
