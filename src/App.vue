<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

@Component({
  components: {
    Navbar,
    Footer,
  },
})
export default class App extends Vue {}
</script>
