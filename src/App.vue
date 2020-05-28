<template>
  <v-app>
    <Navbar v-if="!$route.meta.hideBasicComponents" />
    <v-content>
      <router-view></router-view>
      <FABTelegram v-if="!$route.meta.hideBasicComponents" />
    </v-content>
    <Footer v-if="!$route.meta.hideBasicComponents" />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import FABTelegram from "./components/FABTelegram.vue";

@Component({
  components: {
    Navbar,
    Footer,
    FABTelegram,
  },
})
export default class App extends Vue {}
</script>
