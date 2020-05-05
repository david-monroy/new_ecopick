<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal pa-1 justify-center">
        <strong class="subtitle-1 font-weight-medium mr-4 hidden-sm-and-down"
          >Get connected with us on social networks!</strong
        >
        <v-btn
          v-for="(network, index) in networks"
          :key="index"
          class="mx-2"
          dark
          icon
        >
          <a :href="network.link" target="_blank"
            ><v-icon size="20px">{{ network.icon }}</v-icon></a
          >
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        2020 — <strong>MrPostel</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Navbar extends Vue {
  networks: {}[] = [
    { icon: "mdi-instagram", link: "https://www.instagram.com/" },
    { icon: "mdi-twitter", link: "https://twitter.com/" },
  ];
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: white !important;
}
</style>
