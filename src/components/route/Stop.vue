<template>
  <v-container fluid>
    <v-row v-for="(routeStop, i) in route" :key="i">
      <v-col cols="4">
        <p class="mb-0 body-2">{{ formatDate(routeStop.date).date }}</p>
        <p class="body-2">{{ formatDate(routeStop.date).hour }}</p>
      </v-col>
      <v-divider vertical inset color="teal"></v-divider>
      <v-col>
        <p class="subtitle-1 font-weight-medium mb-0">{{ routeStop.status }}</p>
        <p class="body-2 font-italic">
          {{
            routeStop.primaryline +
            ", " +
            routeStop.state +
            ", " +
            routeStop.city
          }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from "vuex";
import { Watch } from "vue-property-decorator";
import moment from "moment";

@Component({
  computed: {
    ...mapState("shipment", { route: "route" }),
  },
})
export default class Map extends Vue {
  route!: [
    {
      primaryline: string;
      date: string;
      status: string;
    }
  ];
  status = "Status";
  direction = "Direction";
  stop = "Stop";
  date = "Date";

  formatDate(date: string) {
    const lan = localStorage.getItem("Lang");
    if (lan !== null) {
      moment.locale(lan);
    } else {
      moment.locale("en-us");
    }

    return {
      date: moment(date).format("dddd, MMMM DD YYYY"),
      hour: moment(date).format("HH:mm"),
    };
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
          if (term.name == "routeStatus") {
            this.status = term.translation;
          } else if (term.name == "routeDirection") {
            this.direction = term.translation;
          } else if (term.name == "routeDate") {
            this.date = term.translation;
          } else if (term.name == "routeStop") {
            this.stop = term.translation;
          }
        }
      );
  }
}
</script>

<style lang="scss"></style>
