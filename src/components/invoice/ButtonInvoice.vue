<template>
  <div
    :class="{
      'size-md': $vuetify.breakpoint.smAndDown,
    }"
  >
    <VueHtml2pdf
      :show-layout="false"
      :preview-in-newtab="true"
      :paginate-elements-by-height="1400"
      filename="invoice"
      :pdf-quality="2"
      pdf-format="a4"
      pdf-orientation="portrait"
      pdf-content-width="800px"
      @progress="onProgress($event)"
      @hasGenerated="hasGenerated($event)"
      ref="html2Pdf"
    >
      <Invoice slot="pdf-content" />
    </VueHtml2pdf>
    <v-btn
      class="ml-2"
      color="success"
      small
      :loading="loading"
      @click="downloadInvoice()"
      >{{ invoiceDownload }}</v-btn
    >
    <v-checkbox
      class="ma-0"
      color="teal"
      dense
      v-model="checkbox"
      :label="invoiceCheckbox"
    ></v-checkbox>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { mapState } from "vuex";

//import VueHtml2pdf from "vue-html2pdf";
import Invoice from "../../views/Invoice.vue";

@Component({
  //components: { VueHtml2pdf, Invoice },
  computed: { ...mapState("user", { user: "userData" }) },
})
export default class ButtonInvoice extends Vue {
  invoiceDownload = "Download invoice";
  invoiceCheckbox = "Send copy to email";
  user!: {
    firstname: string;
    lastname: string;
    email: string;
    language: number;
  };
  loading = false;
  checkbox = false;
  downloadInvoice() {
    (this.$refs.html2Pdf as Vue & {
      generatePdf: () => null;
    }).generatePdf();
  }
  hasGenerated(blobPdf: Blob) {
    this.loading = false;
    if (this.checkbox) {
      const filename = "invoice.pdf";
      const formData = new FormData();
      formData.append("file", blobPdf, filename);
      formData.append("name", this.user.firstname);
      formData.append("email", this.user.email);
      formData.append("language", this.user.language.toString());
      this.$store.dispatch("invoice/sendInvoice", formData);
    }
  }
  onProgress(progress: number) {
    if (progress != 0 && progress !== 100) this.loading = true;
  }
  get translator() {
    return this.$store.state.translate.languageTexts;
  }
  @Watch("translator")
  translate() {
    this.translator
      .filter(
        (term: { context: string; name: string; translation: string }) => {
          return term.context == "invoice";
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "invoiceDownload") {
            this.invoiceDownload = term.translation;
          } else if (term.name == "invoiceCheckbox") {
            this.invoiceCheckbox = term.translation;
          }
        }
      );
  }
}
</script>

<style lang="scss" scoped>
.size-md {
  margin: 0 auto;
}
</style>
