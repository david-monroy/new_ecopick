import Vue from "vue";
import Vuex from "vuex";

import translate from "./modules/translateModule";
import NewShipment from "./modules/NewShipmentModule";
import user from "./modules/userModule";
import invoice from "./modules/invoiceModule";
import shipment from "./modules/shipmentModule";
import AllShipments from "./modules/AllShipmentsModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    NewShipment,
    user,
    translate,
    invoice,
    shipment,
    AllShipments,
  },
});
