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
                @current-items="getCurrentShipments"
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

@Component({
  components: {},
  computed: {
    ...mapState("AllShipments", ["shipments"]),
  },
})
export default class Home extends Vue {
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
  search = "";
  headers: {}[] = [
    {
      text: "Tracking ID",
      align: "center",
      sortable: false,
      value: "trackingid",
      class: "teal--text subtitle-1",
    },
    {
      text: "User",
      align: "center",
      value: "user",
      class: "teal--text subtitle-1",
    },
    {
      text: "Purpose",
      align: "center",
      value: "purpose",
      sortable: false,
      class: "teal--text subtitle-1",
    },
    {
      text: "Office",
      align: "center",
      value: "office",
      class: "teal--text subtitle-1",
    },
    {
      text: "Status",
      align: "center",
      value: "status",
      class: "teal--text subtitle-1",
    },
    {
      text: "Date",
      align: "center",
      value: "date",
      class: "teal--text subtitle-1",
    },
    {
      text: "Packages",
      align: "center",
      value: "packages",
      class: "teal--text subtitle-1",
    },
    {
      text: "Total",
      align: "center",
      value: "total",
      class: "teal--text subtitle-1",
    },
    {
      text: "Detail",
      align: "center",
      class: "teal--text subtitle-1",
      value: "actions",
      sortable: false,
    },
  ];
  deliveryStatus: {}[] = [
    {
      name: "Out For Delivery",
      icon: "mdi-package-variant-closed",
    },
    {
      name: "In Transit",
      icon: "mdi-car-estate",
    },
    {
      name: "Delivered",
      icon: "mdi-package-variant",
    },
    {
      name: "Total",
      icon: "mdi-package",
    },
  ];

  beforeMount() {
    this.$store
      .dispatch("AllShipments/getAllShipments", localStorage.getItem("ID"))
      .then(() => {
        this.shipments = this.$store.state.AllShipments.shipments;
        console.log(this.shipments);
      });
  }

  formatDate(date: string) {
    return moment(date).format("YYYY-MM-DD");
  }

  changePage(trackingId: string) {
    this.$router.push({ name: "DetailShipment", params: { id: trackingId } });
  }
}
</script>

<style lang="scss">
.clickable {
  cursor: pointer;
}
</style>
