<template>
  <div class="invoice-box">
    <table cellpadding="0" cellspacing="0">
      <tr class="top">
        <td colspan="3">
          <img src="../assets/page-logo.png" class="logo" />
          <p class="cell-title">
            {{ trackingName }} #{{ this.$route.params.id }}
          </p>

          <p class="cell-title">{{ date }}</p>
        </td>
        <td>
          <div class="qrCode">
            <QRCode />
          </div>
        </td>
      </tr>

      <tr class="section-heading">
        <td colspan="3">{{ shipperInformation }}</td>
        <td></td>
      </tr>
      <tr class="item">
        <td>
          <p class="cell-title">{{ name }}</p>
          <p class="cell-description">
            {{ shipper.firstname + " " + shipper.lastname }}
          </p>
        </td>
        <td>
          <p class="cell-title">{{ identification }}</p>
          <p class="cell-description">{{ shipper.identification }}</p>
        </td>
        <td>
          <p class="cell-title">{{ email }}</p>
          <p class="cell-description">{{ shipper.email }}</p>
        </td>
        <td>
          <p class="cell-title">{{ phone }}</p>
          <p class="cell-description">{{ shipper.phonenumber }}</p>
        </td>
      </tr>

      <tr class="section-heading">
        <td colspan="3">{{ receiverInformation }}</td>
        <td></td>
      </tr>
      <tr class="item">
        <td>
          <p class="cell-title">{{ name }}</p>
          <p class="cell-description">{{ receiver.name }}</p>
        </td>
        <td>
          <p class="cell-title">{{ identification }}</p>
          <p class="cell-description">{{ receiver.identification }}</p>
        </td>
        <td>
          <p class="cell-title">{{ email }}</p>
          <p class="cell-description">{{ receiver.email }}</p>
        </td>
        <td>
          <p class="cell-title">{{ phone }}</p>
          <p class="cell-description">{{ receiver.phoneNumber }}</p>
        </td>
      </tr>

      <tr class="section-heading">
        <td colspan="3">{{ shipmentInformation }}</td>
        <td></td>
      </tr>
      <tr class="item">
        <td colspan="4">
          <p class="cell-title">{{ origin }}</p>
          <p class="cell-description">{{ route.origin }}</p>
        </td>
      </tr>
      <tr class="item">
        <td colspan="4">
          <p class="cell-title">{{ destination }}</p>
          <p class="cell-description">{{ route.destination }}</p>
        </td>
      </tr>
      <tr class="item">
        <td colspan="4">
          <p class="cell-title">{{ optionsName }}</p>
          <p class="cell-description">{{ options.join(", ") }}</p>
        </td>
      </tr>
      <tr class="item">
        <td>
          <p class="cell-title">{{ purpose }}</p>
          <p class="cell-description">{{ shipment.purpose }}</p>
        </td>
        <td>
          <p class="cell-title">{{ numberPackages }}</p>
          <p class="cell-description">{{ packages.length }}</p>
        </td>
        <td>
          <p class="cell-title">{{ grossWeight }}</p>
          <p class="cell-description">{{ packagesGrossWeight }} lb</p>
        </td>
        <td>
          <p class="cell-title">{{ dimensionalWeight }}</p>
          <p class="cell-description">{{ packagesDimensionalWeight }} lb</p>
        </td>
      </tr>

      <tr>
        <td></td>
      </tr>

      <tr class="heading">
        <td>{{ packageDescription }}</td>
        <td>{{ packageWeight }}</td>
        <td>{{ packageCharacteristic }}</td>
        <td>{{ packageCost }}</td>
      </tr>
      <tr class="item" v-for="(item, k) in packages" :key="k">
        <td>{{ item.pa_description }}</td>
        <td>{{ item.pa_weight }} lb</td>
        <td>{{ item.characteristic }}</td>
        <td>${{ item.pa_cost }}</td>
      </tr>
      <tr class="total">
        <td colspan="2"></td>
        <td>{{ discountName }}</td>
        <td>{{ discount * 100 }}%</td>
      </tr>
      <tr class="total">
        <td colspan="2"></td>
        <td>Total + {{ serviceCost }}</td>
        <td>${{ shipment.amount }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import moment from "moment";
import { mapState } from "vuex";
import { Watch } from "vue-property-decorator";
import QRCode from "../components/invoice/QRCode.vue";

@Component({
  components: {
    QRCode,
  },
  computed: {
    ...mapState("invoice", [
      "route",
      "receiver",
      "options",
      "packages",
      "discount",
    ]),
    ...mapState("user", { shipper: "userData" }),
    ...mapState("shipment", ["shipment"]),
  },
})
export default class Invoice extends Vue {
  $store: any;
  $route: any;
  route!: {};
  receiver!: {};
  options!: string[];
  packages!: {
    pa_width: number;
    pa_height: number;
    pa_length: number;
    pa_weight: number;
    pa_description: string | null;
    pa_cost: number;
    characteristic: string;
  }[];
  discount!: number;
  shipper!: {};
  shipment!: { delivered: string };
  // Keywords
  shipperInformation = "Shipper information";
  receiverInformation = "Receiver information";
  shipmentInformation = "Shipment information";
  trackingName = "Tracking ID";
  name = "Name";
  identification = "Identification";
  email = "Email";
  phone = "Phone number";
  origin = "Origin";
  destination = "Destination";
  optionsName = "Options";
  purpose = "Purpose";
  numberPackages = "Number of packages";
  grossWeight = "Total gross weight";
  dimensionalWeight = "Dimensional weight";
  packageDescription = "Package";
  packageWeight = "Weight";
  packageCharacteristic = "Characteristic";
  packageCost = "Unitary cost";
  discountName = "Discount";
  serviceCost = "Service Cost";

  get date() {
    return moment(this.shipment.delivered).format("YYYY-MM-DD HH:mm:ss");
  }

  get packagesGrossWeight() {
    return this.packages
      .reduce((acc, item: { pa_weight: number }) => acc + item.pa_weight, 0)
      .toFixed(2);
  }
  get packagesDimensionalWeight() {
    return (
      this.packages.reduce(
        (
          acc,
          item: { pa_width: number; pa_height: number; pa_length: number }
        ) => acc + item.pa_width * item.pa_height * item.pa_length,
        0
      ) / 5000
    ).toFixed(2);
  }

  created() {
    this.translate();
  }

  get translator() {
    return this.$store.state.translate.languageTexts;
  }
  @Watch("translator")
  translate() {
    this.translator
      .filter(
        (term: { context: string; name: string; translation: string }) => {
          return (
            term.context == "invoice" ||
            term.context == "general" ||
            term.context == "package"
          );
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "invoiceShipperInformation") {
            this.shipperInformation = term.translation;
          } else if (term.name == "invoiceReceiverInformation") {
            this.receiverInformation = term.translation;
          } else if (term.name == "invoiceShipmentInformation") {
            this.shipmentInformation = term.translation;
          } else if (term.name == "invoiceNumberPackages") {
            this.numberPackages = term.translation;
          } else if (term.name == "invoiceGrossWeight") {
            this.grossWeight = term.translation;
          } else if (term.name == "invoiceDimensionalWeight") {
            this.dimensionalWeight = term.translation;
          } else if (term.name == "invoiceServiceCost") {
            this.serviceCost = term.translation;
          } else if (term.name == "generalTrackingID") {
            this.trackingName = term.translation;
          } else if (term.name == "generalName") {
            this.name = term.translation;
          } else if (term.name == "generalName") {
            this.name = term.translation;
          } else if (term.name == "generalIdentification") {
            this.identification = term.translation;
          } else if (term.name == "generalEmail") {
            this.email = term.translation;
          } else if (term.name == "generalPhone") {
            this.phone = term.translation;
          } else if (term.name == "generalOrigin") {
            this.origin = term.translation;
          } else if (term.name == "generalDestination") {
            this.destination = term.translation;
          } else if (term.name == "generalOptions") {
            this.optionsName = term.translation;
          } else if (term.name == "generalPurpose") {
            this.purpose = term.translation;
          } else if (term.name == "generalDiscount") {
            this.discountName = term.translation;
          } else if (term.name == "packageName") {
            this.packageDescription = term.translation;
          } else if (term.name == "packageWeight") {
            this.packageWeight = term.translation;
          } else if (term.name == "packageCharacteristic") {
            this.packageCharacteristic = term.translation;
          } else if (term.name == "packageCost") {
            this.packageCost = term.translation;
          }
        }
      );
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  max-width: 175px;
  margin-bottom: 5px;
}

.cell-title {
  font-size: 12px;
  font-weight: bold;
}

.cell-description {
  font-size: 11px;
}

.invoice-box {
  width: 800px;
  margin: auto;
  padding: 30px;
  border: 1px solid #eee;
  font-size: 14px;
  line-height: 24px;
  font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
  color: #555;
}

.invoice-box table {
  table-layout: fixed;
  width: 100%;
  line-height: inherit;
  text-align: left;
}

.invoice-box table td {
  padding: 5px;
  vertical-align: top;
}

.invoice-box table tr.heading td {
  background: #ddd;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
  font-size: 12px;
  padding: 1px 5px;
}

.invoice-box table tr.section-heading td {
  border-bottom: 1px solid #ddd;
  font-weight: bold;
  font-size: 14px;
  padding: 0;
  padding-top: 10px;
}

.invoice-box table tr.item td {
  border-bottom: 1px solid #eee;
}

.invoice-box table tr.total td:nth-child(2) {
  border-top: 2px solid #eee;
  font-weight: bold;
}

p {
  margin-bottom: -8px !important;
}

.qrCode {
  width: 100px;
  height: 100px;
}
</style>
