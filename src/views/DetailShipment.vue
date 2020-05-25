<template>
  <v-container fluid class="pa-0 bg">
    <v-row v-if="noContent == 'content'">
      <v-col>
        <v-row justify="center" align="center">
          <v-col cols="1" class="hidden-sm-and-down"></v-col>
          <v-col cols="6" md="8">
            <p class="title font-weight-regular mb-0">
              {{ trackingName + ": " + this.$route.params.id }}
            </p>
            <p class="subtitle-1">
              {{ date + ": " + formatDate(shipment.delivered) }}
            </p>
          </v-col>
          <v-col>
            <ButtonInvoice />
          </v-col>
          <v-col cols="1" class="hidden-sm-and-down"></v-col>
        </v-row>
        <v-row no-gutters v-if="routeExists">
          <v-col cols="1" order-md="1" class="hidden-sm-and-down"></v-col>
          <v-col cols="12" md="5" order-md="3">
            <v-card
              min-height="250"
              class="cover-space"
              :class="{
                'ml-2': $vuetify.breakpoint.mdAndUp,
              }"
              :loading="loadingMap"
            >
              <Map />
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="5"
            order-md="2"
            :class="{
              'mr-2': $vuetify.breakpoint.mdAndUp,
            }"
          >
            <v-card>
              <Stop />
            </v-card>
          </v-col>
          <v-col cols="1" order-md="4" class="hidden-sm-and-down"></v-col>
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
          <v-col cols="2" class="hidden-sm-and-down"></v-col> </v-row
      ></v-col>
    </v-row>
    <v-row
      v-else-if="noContent == 'noContent'"
      align="center"
      justify="center"
      class="grey lighten-5 screen"
    >
      <v-alert
        border="top"
        colored-border
        type="info"
        elevation="2"
        color="teal"
        icon="mdi-emoticon-sad-outline"
      >
        <p class="subtitle-1 ma-0">
          {{ noContentText }}
        </p>
        <p class="subtitle-1 ma-0">
          {{ "Tracking ID: " + this.$route.params.id }}
        </p>
      </v-alert>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import moment from "moment";
import ButtonInvoice from "../components/invoice/ButtonInvoice.vue";
import Map from "../components/route/Map.vue";
import Stop from "../components/route/Stop.vue";
import { mapState } from "vuex";
import { Watch } from "vue-property-decorator";

@Component({
  components: { ButtonInvoice, Map, Stop },
  computed: {
    ...mapState("shipment", ["shipment"]),
  },
})
export default class DetailShipment extends Vue {
  $route: any;
  noContent = "";
  date = "Date";
  trackingName = "Tracking ID";
  noContentText = "We didn't find the route you were looking for";
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

  formatDate(date: string) {
    return moment(date).format("YYYY-MM-DD HH:mm");
  }

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

  getShipment() {
    this.$store
      .dispatch("shipment/getShipment", this.$route.params.id)
      .then(() => {
        this.getRoute(this.$route.params.id);
        this.noContent = "content";
      })
      .catch(() => {
        this.noContent = "noContent";
      });
  }

  created() {
    this.getShipment();
  }

  get translator() {
    return this.$store.state.translate.languageTexts;
  }
  @Watch("translator")
  translate() {
    this.translator
      .filter(
        (term: { context: string; name: string; translation: string }) => {
          return term.context == "route" || term.context == "general";
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "routeWait") {
            this.waitingRoute = term.translation;
          } else if (term.name == "generalNoContent") {
            this.noContentText = term.translation;
          } else if (term.name == "routeDate") {
            this.date = term.translation;
          } else if (term.name == "generalTrackingID") {
            this.trackingName = term.translation;
          }
        }
      );
  }
}
</script>

<style lang="scss">
.screen {
  height: 80vh;
}
.cover-space {
  width: 100%;
  height: 100%;
}
.bg {
  min-height: 100%;
  background-color: #f7f7f7;
  background-size: cover;
}
</style>
