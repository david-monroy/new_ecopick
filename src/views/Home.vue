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
                  >{{ banner }}</v-card-text
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
            :label="search"
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
          <v-card-title>{{ noticeTitle }}</v-card-title>
          <v-card-text class="body-1">{{ noticeText }}</v-card-text>
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
import { Watch } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  $store: any;
  $router: any;

  trackingID = "";
  search = "Search your tracking ID";
  banner =
    "Try our new bot, download Telegram and with your tracking ID, you will be able to know your package's delivery history anywhere!";
  noticeTitle = "Here to deliver for you!";
  noticeText =
    "In these uncertain times, it's important for businesses to help you stay safe! At Mr.Postel we are still delivering to support you in this situation";

  searchShipment() {
    this.$router.push({
      name: "DetailShipment",
      params: { id: this.trackingID },
    });
  }

  get translator() {
    return this.$store.state.translate.languageTexts;
  }
  @Watch("translator")
  translate() {
    this.translator
      .filter(
        (term: { context: string; name: string; translation: string }) => {
          return term.context == "general" || term.context == "home";
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "generalSearch") {
            this.search = term.translation;
          } else if (term.name == "homeBanner") {
            this.banner = term.translation;
          } else if (term.name == "homeNoticeTitle") {
            this.noticeTitle = term.translation;
          } else if (term.name == "homeNoticeText") {
            this.noticeText = term.translation;
          }
        }
      );
  }
}
</script>

<style lang="scss"></style>
