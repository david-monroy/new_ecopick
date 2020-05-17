<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col>
        <Map />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Map from "../components/Map.vue";
import { Watch } from "vue-property-decorator";

@Component({
  components: { Map },
})
export default class Home extends Vue {}
</script>

<style lang="scss"></style>
