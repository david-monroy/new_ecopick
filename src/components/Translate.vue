<template>
  <v-menu height="40">
    <template v-slot:activator="{ on }">
      <v-btn text small class="option font-weight-light mx-2" v-on="on">
        <v-icon class="mr-1">mdi-translate</v-icon>
      </v-btn>
    </template>
    <v-list @change="changeLanguage(lang)">
      <v-list-item
        v-for="(language, index) in languages"
        :key="index"
        @click="changeLanguage(language)"
      >
        <v-list-item-title>{{ language.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Translate extends Vue {
  $store: any;
  // Atributos
  languages: {}[] = [
    { name: "English", value: "en-us" },
    { name: "Español", value: "es-ve" },
  ];
  // // Traducción
  changeLanguage(language: { name: string; value: string }) {
    localStorage.setItem("Language", language.value);
    this.getTranslate(language.value);
  }
  getTranslate(lan: string) {
    this.$store.dispatch("translate/translate", { lang: lan });
  }
  // // Metodos del componente
  created() {
    const lan = localStorage.getItem("Language");
    if (lan === null) {
      this.getTranslate(this.$store.state.translate.language);
    } else {
      this.getTranslate(lan);
    }
  }
}
</script>

<style lang="scss" scoped></style>
