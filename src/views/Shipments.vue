<template>
  <v-container fluid>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col>
        <v-row>
          <v-col
            ><v-card elevation="5">
              <v-card-title>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                ref="datatable"
                :items-per-page="5"
                multi-sort
                :headers="headers"
                :items="shipments"
                :search="search"
                loading-text="Loading... Please wait"
                no-data-text="We didn't find shipments... Sorry"
              >
                <template v-slot:item.actions="{ item }">
                  <v-icon
                    class="clickable"
                    color="black"
                    @click="changePage(item.trackingid)"
                    >mdi-clipboard-text-outline</v-icon
                  >
                </template>
                <template v-slot:item.date="{ item }">
                  {{ formatDate(item.date) }}
                </template>
                <template v-slot:item.total="{ item }">
                  {{ item.total + " $" }}
                </template>
              </v-data-table>
            </v-card></v-col
          >
        </v-row>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from "vuex";
import moment from "moment";
import { Watch } from "vue-property-decorator";

@Component({
  components: {},
  computed: {
    ...mapState("AllShipments", ["shipments"]),
  },
})
export default class Shipments extends Vue {
  $router: any;
  loading = true;
  shipments!: {
    id: number;
    trackingid: number;
    date: string;
    purpose: string;
    total: number;
    stop: string;
    status: string;
    office: string;
    user: string;
    packages: number;
  }[];
  TrackingIDHeader = "Tracking ID";
  UserHeader = "User";
  PurposeHeader = "Purpose";
  OfficeHeader = "Office";
  StatusHeader = "Status";
  DateHeader = "Date";
  PackageHeader = "Packages";
  DetailHeader = "Detail";

  search = "";
  get headers() {
    return [
      {
        text: this.TrackingIDHeader,
        align: "center",
        sortable: false,
        value: "trackingid",
        class: "teal--text subtitle-1",
      },
      {
        text: this.PurposeHeader,
        align: "center",
        value: "purpose",
        sortable: false,
        class: "teal--text subtitle-1",
      },
      {
        text: this.StatusHeader,
        align: "center",
        value: "status",
        class: "teal--text subtitle-1",
      },
      {
        text: this.DateHeader,
        align: "center",
        value: "date",
        class: "teal--text subtitle-1",
      },
      {
        text: "Total",
        align: "center",
        value: "total",
        class: "teal--text subtitle-1",
      },
      {
        text: this.DetailHeader,
        align: "center",
        class: "teal--text subtitle-1",
        value: "actions",
        sortable: false,
      },
    ];
  }

  beforeMount() {
    this.$store.dispatch(
      "AllShipments/getAllShipments",
      localStorage.getItem("ID")
    );
  }

  formatDate(date: string) {
    return moment(date).format("YYYY-MM-DD");
  }

  changePage(trackingId: string) {
    this.$router.push({ name: "DetailShipment", params: { id: trackingId } });
  }

  mounted() {
    this.translate();
  }

  get translator() {
    return this.$store.state.translate.languageTexts;
  }

  @Watch("translator")
  translate() {
    this.translator
      .filter(
        (term: { context: string; name: string; translation: string }) => {
          return (
            term.context == "Shipment" ||
            term.context == "general" ||
            term.context == "route" ||
            term.context == "packages"
          );
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "ShipmentDetail") {
            this.DetailHeader = term.translation;
          } else if (term.name == "routeDate") {
            this.DateHeader = term.translation;
          } else if (term.name == "generalTrackingID") {
            this.TrackingIDHeader = term.translation;
          } else if (term.name == "routeStatus") {
            this.StatusHeader = term.translation;
          } else if (term.name == "generalPurpose") {
            this.PurposeHeader = term.translation;
          }
        }
      );
  }
}
</script>

<style lang="scss">
.clickable {
  cursor: pointer;
}
</style>
