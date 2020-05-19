<template>
  <v-container>
    <v-row>
      <v-col md="9" class="hidden-xs-only"></v-col>
      <v-col>
        <ButtonInvoice />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ButtonInvoice from "../components/invoice/ButtonInvoice.vue";

@Component({ components: { ButtonInvoice } })
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

  created() {
    this.getInvoice(this.$route.params.id);
    this.getUser(this.userId);
  }
}
</script>

<style lang="scss" scoped></style>
