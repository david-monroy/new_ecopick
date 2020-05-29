<template>
  <qrcode-vue :value="link"></qrcode-vue>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import QrcodeVue from "qrcode.vue";

@Component({
  components: {
    QrcodeVue,
  },
})
export default class QRCode extends Vue {
  $router: any;
  link = "";
  mounted() {
    this.link = process.env.VUE_APP_URL + this.$router.currentRoute.path;
  }
}
</script>

<style lang="scss" scoped></style>
