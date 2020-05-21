<template>
  <v-container fluid class="pa-0">
    <v-row justify-center>
      <v-col md="9" class="hidden-xs-only"></v-col>
      <v-col>
        <ButtonInvoice />
      </v-col>
    </v-row>
    <v-row no-gutters v-if="routeExists">
      <v-col cols="1" class="hidden-sm-and-down"></v-col>
      <v-col cols="5" class="hidden-sm-and-down"></v-col>
      <v-col cols="12" md="5">
        <v-card height="300" :loading="loadingMap">
          <Map />
        </v-card>
      </v-col>
      <v-col cols="1" class="hidden-sm-and-down"></v-col>
    </v-row>
    <v-row no-gutters class="py-2" align="center" v-else>
      <v-col cols="2" class="hidden-sm-and-down"></v-col>
      <v-col>
        <v-alert
          border="top"
          colored-border
          type="info"
          elevation="2"
          color="rgba(103,176,49,1)"
          icon="mdi-clock-outline"
        >
          <p class="subtitle-1 ma-0">
            {{ waitingRoute }}
          </p>
          <p class="title ma-0">
            {{ shipment.office }}
          </p>
        </v-alert>
      </v-col>
      <v-col cols="2" class="hidden-sm-and-down"></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ButtonInvoice from "../components/invoice/ButtonInvoice.vue";
import Map from "../components/Map.vue";
import { mapState } from "vuex";
import { Watch } from "vue-property-decorator";

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
  waitingRoute = "Waiting for packages to be delivered to";

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

  get translator() {
    return this.$store.state.translate.languageTexts;
  }
  @Watch("translator")
  translate() {
    this.translator
      .filter(
        (term: { context: string; name: string; translation: string }) => {
          return term.context == "route";
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "routeWait") {
            this.waitingRoute = term.translation;
          }
        }
      );
  }
}
</script>

<style lang="scss"></style>
