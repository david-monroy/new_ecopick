<template>
  <v-app-bar elevation="1" app color="white">
    <v-img
      class="mx-2 clickable"
      src="../assets/page-logo.png"
      max-height="40"
      max-width="150"
      contain
      @click="changePage('Home')"
    ></v-img>
    <v-spacer></v-spacer>
    <v-responsive
      class="mr-auto mr-md-4 transition-swing"
      max-width="450"
      max-height="38"
      ><v-text-field
        class="hidden-sm-and-down"
        prepend-inner-icon="mdi-magnify"
        clearable
        dense
        rounded
        filled
        single-line
        label="Search your tracking id"
        v-model="trackingID"
        @keyup.enter="searchShipment()"
      ></v-text-field
    ></v-responsive>
    <v-spacer></v-spacer>
    <v-menu height="40">
      <template v-slot:activator="{ on }">
        <v-btn text small class="option font-weight-light mx-2" v-on="on">
          <v-icon class="mr-1">mdi-package-variant</v-icon>
          <p class="hidden-sm-and-down ma-0">shipping</p>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(option, index) in shippingOptions"
          :key="index"
          @click="changePage(option.link)"
        >
          <v-list-item-title>{{ option.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu height="40" v-if="activeUser == null">
      <template v-slot:activator="{ on }">
        <v-icon class="mr-1 hidden-md-and-up" color="black" v-on="on"
          >mdi-account-circle-outline</v-icon
        >
        <p class="text-option font-weight-light my-0 mx-2 hidden-sm-and-down">
          <v-icon class="mr-1" color="black">mdi-account-circle-outline</v-icon>
          <span>
            <a class="icon mr-1" @click="changePage('SignUp')">SIGN UP</a> OR
            <a class="icon ml-1" @click="changePage('LogIn')">LOG IN</a>
          </span>
        </p>
      </template>
      <v-list>
        <v-list-item @click="changePage('SignUp')">
          <v-list-item-title>Sign Up</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changePage('LogIn')">
          <v-list-item-title>Log In</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu height="40" v-else>
      <template v-slot:activator="{ on }">
        <v-btn text small class="option font-weight-light mx-2" v-on="on">
          <v-icon class="mr-1">mdi-account-circle-outline</v-icon>
          <p class="hidden-sm-and-down ma-0">{{ activeUser }}</p>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="changePage('Profile')">
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item @click="changePage('Discounts')">
          <v-list-item-title>Discounts</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu height="40">
      <template v-slot:activator="{ on }">
        <v-btn text small class="option font-weight-light mx-2" v-on="on">
          <v-icon class="mr-1">mdi-translate</v-icon>
          <p class="hidden-sm-and-down ma-0">
            {{ selectedLanguage }}
          </p>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(language, index) in languages"
          :key="index"
          @click="changeLanguage(language)"
        >
          <v-list-item-title>{{ language }}</v-list-item-title>
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
  shippingOptions: {}[] = [
    { name: "Create a Shipping", link: "NewShipment" },
    { name: "My Shipments", link: "Shipments" },
  ];
  trackingID = "";
  get activeUser() {
    const userEmail = localStorage.getItem("Email");
    if (userEmail !== null) {
      return userEmail.split("@")[0];
    } else {
      return null;
    }
  }
  get languages() {
    //Or get languages on BD
    return ["English", "Español"];
  }
  get selectedLanguage() {
    if (localStorage.getItem("Language") !== null) {
      return localStorage.getItem("Language");
    } else {
      return "English";
    }
  }
  changePage(link: string) {
    this.$router.push({ name: link });
  }
  changeLanguage(language: string) {
    localStorage.setItem("Language", language);
    location.reload();
  }
  searchShipment() {
    this.$router.push({
      name: "DetailShipment",
      params: { id: this.trackingID },
    });
  }
}
</script>

<style lang="scss" scoped>
.icon,
.option:hover {
  color: rgb(103, 176, 49);
}
.icon:hover {
  text-decoration: underline;
}
.text-option {
  font-size: 0.75rem;
  letter-spacing: 0.0892857143em;
  text-transform: uppercase;
}
.clickable {
  cursor: pointer;
}
</style>
