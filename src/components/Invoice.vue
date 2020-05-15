<template>
  <div class="invoice-box">
    <table cellpadding="0" cellspacing="0">
      <tr class="top">
        <td colspan="3">
          <img src="../assets/page-logo.png" class="logo" />
          <p class="cell-title">{{ trackingName }} {{ trackingNumber }}</p>
        </td>
        <td>
          <div class="qrCode"></div>
        </td>
      </tr>

      <template v-for="(participant, key) in [shipper, receiver]">
        <tr class="section-heading" :key="key">
          <td colspan="3">
            {{
              participant == shipper ? shipperInformation : receiverInformation
            }}
          </td>
          <td></td>
        </tr>

        <tr class="item" :key="key">
          <td>
            <p class="cell-title">{{ name }}</p>
            <p class="cell-description">{{ participant.name }}</p>
          </td>
          <td>
            <p class="cell-title">{{ identification }}</p>
            <p class="cell-description">{{ participant.identification }}</p>
          </td>
          <td>
            <p class="cell-title">{{ email }}</p>
            <p class="cell-description">{{ participant.email }}</p>
          </td>
          <td>
            <p class="cell-title">{{ phone }}</p>
            <p class="cell-description">{{ participant.phoneNumber }}</p>
          </td>
        </tr>
      </template>

      <tr class="section-heading">
        <td colspan="3">
          {{ shipmentInformation }}
        </td>
        <td></td>
      </tr>

      <tr class="item">
        <td colspan="4">
          <p class="cell-title">{{ origin }}</p>
          <p class="cell-description">{{ originAddress }}</p>
        </td>
      </tr>
      <tr class="item">
        <td colspan="4">
          <p class="cell-title">{{ destination }}</p>
          <p class="cell-description">{{ destinationAddress }}</p>
        </td>
      </tr>
      <tr class="item">
        <td colspan="4">
          <p class="cell-title">{{ options }}</p>
          <p class="cell-description">{{ shipment.options.join(", ") }}</p>
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
          <p class="cell-description">{{ packagesGrossWeight }} kg</p>
        </td>
        <td>
          <p class="cell-title">{{ dimensionalWeight }}</p>
          <p class="cell-description">{{ packagesDimensionalWeight }} kg</p>
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
        <td>
          {{ item.description }}
        </td>
        <td>{{ item.weight }} kg</td>
        <td>
          {{ item.characteristic }}
        </td>
        <td>${{ item.cost }}</td>
      </tr>

      <tr class="total">
        <td colspan="2"></td>
        <td>Discount</td>
        <td>{{ shipment.discount * 100 }}%</td>
      </tr>

      <tr class="total">
        <td colspan="2"></td>
        <td>Total</td>
        <td>${{ total }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

@Component({})
export default class Footer extends Vue {
  trackingName = "Tracking ID";
  trackingNumber = "#877456";
  shipperInformation = "Shipper information";
  receiverInformation = "Receiver information";
  shipmentInformation = "Shipment information";
  shipment = {
    purpose: "Online shopping",
    options: ["Sunday-Holiday", "Fast shipping"],
    discount: 0.5,
  };
  shipper = {
    name: "Alba Sánchez",
    identification: "V-27086052",
    phoneNumber: "04122765991",
    email: "alba@gmail.com",
  };
  receiver = {
    identification: "S-514-654-33-112-0",
    name: "Raul Duran",
    phoneNumber: "+1 (954) 402 1211",
    email: "rau888@gmail.com",
  };
  originAddress =
    "Mr.Postel North Lincoln, 5952 North Lincoln Avenue, Illinois, Chicago, United States";
  destinationAddress =
    "North Milwaukee Avenue, Illinois, Chicago, United States";
  packages: {
    width: number;
    height: number;
    length: number;
    weight: number;
    description: string | null;
    cost: number;
    characteristic: string;
  }[] = [
    {
      width: 2.2,
      height: 2.61,
      length: 13.04,
      weight: 5.99,
      description: "Chair",
      cost: 86,
      characteristic: "Fragile",
    },
    {
      width: 4.76,
      height: 9.89,
      length: 6.72,
      weight: 1.06,
      description: null,
      cost: 67,
      characteristic: "Inflamable",
    },
    {
      width: 10.71,
      height: 16.48,
      length: 6.08,
      weight: 0.58,
      description: "Leather jacket",
      cost: 50,
      characteristic: "",
    },
  ];
  // Cell keywords
  name = "Name";
  identification = "Identification";
  email = "Email";
  phone = "Phone number";
  origin = "Origin";
  destination = "Destination";
  options = "Options";
  purpose = "Purpose";
  numberPackages = "Number of packages";
  grossWeight = "Total gross weight";
  dimensionalWeight = "Dimensional weight";
  packageDescription = "Package";
  packageWeight = "Weight";
  packageCharacteristic = "Characteristic";
  packageCost = "Unitary cost";

  get total() {
    return (
      this.packages.reduce(
        (acc, item: { cost: number }) => acc + item.cost,
        0
      ) * this.shipment.discount
    );
  }
  get packagesGrossWeight() {
    return this.packages
      .reduce((acc, item: { weight: number }) => acc + item.weight, 0)
      .toFixed(2);
  }
  get packagesDimensionalWeight() {
    return (
      this.packages.reduce(
        (acc, item: { width: number; height: number; length: number }) =>
          acc + item.width * item.height * item.length,
        0
      ) / 5000
    ).toFixed(2);
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
  width: 595px;
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
  background-color: black;
  width: 100px;
  height: 100px;
}
</style>
