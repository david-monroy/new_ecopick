<template>
  <v-container fluid class="pa-0">
    <v-row justify-center>
      <v-col md="9" class="hidden-xs-only"></v-col>
      <v-col>
        <ButtonInvoice />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="1" class="hidden-sm-and-down"></v-col>
      <v-col cols="5" class="hidden-sm-and-down"></v-col>
      <v-col cols="12" md="5">
        <v-card height="300" :loading="loadingMap">
          <Map v-if="routeExists" />
          <span v-else>
            <v-card-title>{{ noRoute }}</v-card-title>
            <v-card-text>{{ waitingRoute + " " + shipment.office }}</v-card-text>
          </span>
        </v-card>
      </v-col>
      <v-col cols="1" class="hidden-sm-and-down"></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ButtonInvoice from "../components/invoice/ButtonInvoice.vue";
import Map from "../components/Map.vue";
import { mapState } from "vuex";

@Component({
  components: { ButtonInvoice, Map },
  computed: {
    ...mapState("shipment", ["shipment"]),
  },
})
export default class DetailShipment extends Vue {
  $route: any;
  shipment!: {
    userid: number;
    office: string;
    arrival: string;
    delivered: string;
    direction: string;
    purpose: string;
    receiver: string;
    amount: number;
    trackingID: number;
  };
  loadingMap = true;
  routeExists = true;
  noRoute = "No existe ruta";
  waitingRoute = "Esperando que el/los paquetes sean entregados en";
  //Modificar este dato con la respuesta de la petición de detalle de envío
  userId = 2;

  getRoute(trackingId: string) {
    this.$store
      .dispatch("shipment/getRoute", trackingId)
      .then(() => {
        this.loadingMap = false;
      })
      .catch(() => {
        this.loadingMap = false;
        this.routeExists = false;
      });
  }

  created() {
    this.$store
      .dispatch("shipment/getShipment", this.$route.params.id)
      .then(() => {
        this.$store.dispatch("user/getUser", this.shipment.userid);
      });
    this.$store.dispatch("invoice/getInvoice", this.$route.params.id);
    this.getRoute(this.$route.params.id);
  }
}
</script>

<style lang="scss"></style>
