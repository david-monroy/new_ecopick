<template>
  <v-container fluid class="pa-0">
    <v-row justify-center>
      <v-col md="9" class="hidden-xs-only"></v-col>
      <v-col>
        <ButtonInvoice />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="hidden-sm-and-down"></v-col>
      <v-col cols="6" md="3"></v-col>
      <v-col cols="6" md="3">
        <v-card height="300">
          <Map />
        </v-card>
      </v-col>
      <v-col class="hidden-sm-and-down"></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ButtonInvoice from "../components/invoice/ButtonInvoice.vue";
import Map from "../components/Map.vue";

@Component({
  components: { ButtonInvoice, Map },
})
export default class DetailShipment extends Vue {
  $route: any;
  //Modificar este dato con la respuesta de la petición de detalle de envío
  userId = 2;

  getInvoice(trackingId: number) {
    this.$store.dispatch("invoice/getInvoice", trackingId);
  }

  getUser(userID: number) {
    this.$store.dispatch("user/getUser", userID);
  }

  getRoute(trackingId: string) {
    this.$store.dispatch("route/getRoute", trackingId);
  }

  created() {
    // this.getInvoice(this.$route.params.id);
    this.getRoute(this.$route.params.id);
    // this.getUser(this.userId);
  }
}
</script>

<style lang="scss"></style>
