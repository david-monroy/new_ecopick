<template>
  <div class="qrCode"></div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class QRCode extends Vue {}
</script>

<style lang="scss" scoped>
.qrCode {
  background-color: gray;
  width: 100%;
  height: 100%;
}
</style>
