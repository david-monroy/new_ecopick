<template>
  <div
    :class="{
      'size-md': $vuetify.breakpoint.smAndDown,
    }"
  >
    <VueHtml2pdf
      :show-layout="false"
      :paginate-elements-by-height="1400"
      :filename="'invoice_' + this.$route.params.id"
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
    <v-tooltip bottom :disabled="!condition">
      <template v-slot:activator="{ on }">
        <span v-on="on">
          <v-btn
            class="ml-2"
            color="success"
            small
            :loading="loading"
            @click="downloadInvoice()"
            :disabled="condition"
            >{{ invoiceDownload }}</v-btn
          >
        </span>
      </template>
      <span>{{ conditionText }}</span>
    </v-tooltip>
    <v-checkbox
      class="ma-0 caption"
      color="teal"
      dense
      v-model="checkbox"
      :label="invoiceCheckbox"
      :disabled="condition"
    ></v-checkbox>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { mapState } from "vuex";
// @ts-ignore
import VueHtml2pdf from "vue-html2pdf";
import Invoice from "../../views/Invoice.vue";

@Component({
  components: { VueHtml2pdf, Invoice },
  computed: {
    ...mapState("user", { user: "userData" }),
    ...mapState("shipment", ["shipment"]),
  },
})
export default class ButtonInvoice extends Vue {
  $route: any;
  invoiceDownload = "Download invoice";
  invoiceCheckbox = "Send copy to email";
  conditionText = "Log In to have access to this functionality";
  condition = true;
  user!: {
    firstname: string;
    lastname: string;
    email: string;
    language: number;
  };
  shipment!: {
    userid: number;
  };
  loading = false;
  checkbox = false;
  mounted() {
    if (localStorage.getItem("ID") != null) {
      this.condition = false;
      this.$store.dispatch("invoice/getInvoice", this.$route.params.id);
      this.$store.dispatch("user/getUserData", this.shipment.userid);
    }
  }
  downloadInvoice() {
    (this.$refs.html2Pdf as Vue & {
      generatePdf: () => null;
    }).generatePdf();
  }
  hasGenerated(blobPdf: Blob) {
    this.loading = false;
    if (this.checkbox) {
      const filename = "invoice_" + this.$route.params.id + ".pdf";
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
          return term.context == "invoice" || term.context == "general";
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "invoiceDownload") {
            this.invoiceDownload = term.translation;
          } else if (term.name == "invoiceCheckbox") {
            this.invoiceCheckbox = term.translation;
          } else if (term.name == "generalLogInCondition") {
            this.conditionText = term.translation;
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
