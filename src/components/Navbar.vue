<template>
  <v-app-bar elevation="1" app color="white">
    <v-img
      class="mx-2"
      src="../assets/page-logo.png"
      max-height="40"
      max-width="150"
      contain
    ></v-img>
    <v-spacer></v-spacer>
    <v-menu height="40" v-for="(button, index) in buttons" :key="index">
      <template v-slot:activator="{ on }">
        <v-btn text small class="options font-weight-light" v-on="on">
          <v-icon class="mr-1">{{ button.icon }}</v-icon
          >{{ button.name }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(option, index) in button.options"
          :key="index"
          @click="changePage(option.link)"
        >
          <v-list-item-title>{{ option.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Navbar extends Vue {
  get buttons() {
    return [
      {
        icon: "mdi-package-variant",
        name: "shipping",
        options: [
          { name: "Create a Shipping", link: "NewShipment" },
          { name: "My Shipments", link: "Shipments" },
        ],
      },
      {
        icon: "mdi-account-circle-outline",
        name: "sign up or log in",
        options: [
          { name: "Sign Up", link: "SignUp" },
          { name: "Log In", link: "LogIn" },
        ],
      },
      {
        icon: "mdi-translate",
        name: "English",
        options: [
          { name: "English", link: "English" },
          { name: "Spanish", link: "Spanish" },
        ],
      },
    ];
  }
  changePage(link: string) {
    if (link == "English") {
      //Traslate page to English
    } else if (link == "Spanish") {
      //Traslate page to Spanish
    } else {
      this.$router.push({ name: link });
    }
  }
}
</script>

<style lang="scss" scoped>
.options:hover {
  color: rgb(103, 176, 49);
}
</style>
