<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col>
        <v-img
          src="../assets/warehouse.jpg"
          class="align-center pa-0 ma-0"
          gradient="to bottom, rgba(0,0,0,.75), rgba(0,0,0,.75)"
          max-height="300"
        >
          <v-row justify="center" align="center">
            <v-col>
              <v-card dark class="mx-auto" color="transparent" elevation="0">
                <v-card-text
                  class="white--text font-weight-light"
                  :class="{
                    headline: $vuetify.breakpoint.smAndDown,
                    'display-1': $vuetify.breakpoint.mdAndUp,
                  }"
                  >Try our new bot, download
                  <strong class="blue--text">Telegram</strong> and with
                  <br class="hidden-sm-and-down" />
                  your tracking ID, you will be able to know your
                  <br class="hidden-sm-and-down" />
                  package's delivery history anywhere!</v-card-text
                >
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-img
                src="../assets/telegram-logo.png"
                class="align-center justify-center pa-0 ma-0"
                max-height="150"
                contain
              ></v-img>
            </v-col>
          </v-row>
        </v-img>
      </v-col>
    </v-row>
    <v-row class="green darken-1 pa-1">
      <v-col justify="center" align="center">
        <v-responsive
          class="mr-auto mr-md-4 transition-swing"
          max-width="450"
          max-height="38"
          ><v-text-field
            prepend-inner-icon="mdi-magnify"
            background-color="white"
            clearable
            dense
            outlined
            single-line
            label="Search your tracking id"
            v-model="trackingID"
            @keyup.enter="searchShipment()"
          ></v-text-field
        ></v-responsive>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col class="hidden-sm-and-down" md="3"></v-col>
      <v-col md="3"
        ><v-card class="mx-auto" color="transparent" elevation="0">
          <v-card-title>Here to deliver for you!</v-card-title>
          <v-card-text class="body-1"
            >In these uncertain times, it's important for businesses to help you
            stay safe! At Mr.Postel we are still delivering to support you in
            this situation</v-card-text
          >
        </v-card></v-col
      >
      <v-col md="3"
        ><v-img
          src="../assets/packages.png"
          class="align-center justify-center pa-0 ma-0"
          max-height="200"
          contain
        ></v-img
      ></v-col>
      <v-col class="hidden-sm-and-down" md="3"></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Home extends Vue {
  trackingID = "";
  searchShipment() {
    this.$router.push({
      name: "DetailShipment",
      params: { id: this.trackingID },
    });
  }
}
</script>

<style lang="scss"></style>
