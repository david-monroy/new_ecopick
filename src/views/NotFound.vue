<template>
  <v-container fluid class="pa-0">
    <v-row align="center" justify="center" class="grey lighten-5 screen">
      <v-alert
        border="top"
        colored-border
        type="info"
        elevation="2"
        color="teal"
        icon="mdi-emoticon-sad-outline"
      >
        <p class="subtitle-1 ma-0">{{ notFound }}</p>
      </v-alert>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

@Component({})
export default class NotFound extends Vue {
  notFound = "Sorry. We didn't found the route you were looking for";
  get translator() {
    return this.$store.state.translate.languageTexts;
  }
  @Watch("translator")
  translate() {
    this.translator
      .filter(
        (term: { context: string; name: string; translation: string }) => {
          return term.context == "general";
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "notFound") {
            this.notFound = term.translation;
          }
        }
      );
  }
}
</script>

<style lang="scss" scoped>
.screen {
  height: 80vh;
}
</style>
