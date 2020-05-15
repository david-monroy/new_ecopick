import Vue from "vue";
import translateService from "../../services/translateService";

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    language: "en-us",
    languageTexts: [],
  },
  // -----------------------------------------------------------------
  mutations: {
    setLanguage(state: {}, language: string) {
      Vue.set(state, "language", language);
    },
    setLanguageTexts(state: {}, languageTexts: []) {
      Vue.set(state, "languageTexts", languageTexts);
    },
  },
  // -----------------------------------------------------------------
  actions: {
    translate: async (context: any, payload: any) => {
      await translateService.translate(payload.lang).then((response: any) => {
        context.commit("setLanguage", payload.lang);
        context.commit("setLanguageTexts", response.data);
      });
    },
  },
};
