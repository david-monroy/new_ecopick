import Vue from "vue";
import Vuex from "vuex";

import translate from "./modules/translateModule";
import NewShipment from "./modules/NewShipmentModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    translate,
    NewShipment,
  },
});
