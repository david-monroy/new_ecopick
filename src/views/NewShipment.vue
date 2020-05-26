<template>
  <v-container fluid elevation="0">
    <v-row no-gutters>
      <v-col class="hidden-sm-and-down" cols="3"></v-col>
      <v-col cols="12" md="6" align="center">
        <v-stepper v-model="e1">
          <v-stepper-header class="light-green accent-1">
            <v-stepper-step color="teal" :complete="e1 > 1" step="1">{{
              Step1
            }}</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="teal" :complete="e1 > 2" step="2">{{
              Step2
            }}</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="teal" :complete="e1 > 3" step="3">{{
              Step3
            }}</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="teal" step="4">{{ Step4 }}</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <!--Origin/Destination-->
            <v-stepper-content step="1" class="teal">
              <v-card class="d-inline-block mx-auto teal" outlined>
                <!--Begin -->
                <v-container fluid>
                  <!--Títle -->
                  <v-row class="align-center">
                    <v-col cols="3"></v-col>
                    <v-col class="align-center" justify="center">
                      <p class="display-2 white--text">
                        {{ NewShipmentTitle }}
                      </p>
                    </v-col>
                    <v-col cols="3"></v-col>
                  </v-row>
                  <!--Form 1-->
                  <v-form ref="form1">
                    <!--Title 3 -->
                    <v-row>
                      <v-col>
                        <p
                          class="body-1 font-weight-light align-center white--text"
                          justify="center"
                        >
                          {{ ReceiverData }}
                        </p>
                      </v-col>
                    </v-row>
                    <!--Receiver -->
                    <v-row>
                      <v-col cols="4">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.receiver.firstName"
                          :rules="rules.item"
                          :label="ReceiverNameLabel"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.receiver.lastName"
                          :rules="rules.item"
                          :label="ReceiverLastNameLabel"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.receiver.identification"
                          :rules="rules.item"
                          label="ID"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!--Receiver  2 -->
                    <v-row>
                      <v-col cols="4">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.receiver.phoneNumber"
                          :rules="rules.PhoneRules"
                          :label="PhoneLabel"
                          required
                          type="number"
                          counter="10"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="8">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.receiver.email"
                          :rules="rules.emailRules"
                          :label="EmailLabel"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!--Title 3 -->
                    <v-row>
                      <v-col>
                        <p
                          class="body-1 font-weight-light align-center white--text"
                          justify="center"
                        >
                          {{ DestinationTitle }}
                        </p>
                      </v-col>
                    </v-row>
                    <!--Direction 3 -->
                    <v-row>
                      <v-col cols="4">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.direction.zipCode"
                          :rules="rules.ZipCodeRules"
                          :label="ZipCodeLabel"
                          required
                          type="number"
                          counter="5"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.direction.city"
                          :rules="rules.item"
                          :label="CityLabel"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.direction.state"
                          :rules="rules.item"
                          :label="StateLabel"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!--Direction 4 -->
                    <v-row>
                      <v-col cols="6">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.direction.primaryLine"
                          :rules="rules.item"
                          :label="DirectionLabel1"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.direction.secondaryLine"
                          :label="DirectionLabel2"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!--Options-->
                    <v-row>
                      <v-col cols="6">
                        <v-card color="white" class="ma-0 pa-5">
                          <template v-for="(option, i) in options">
                            <v-checkbox
                              :key="i"
                              :label="option.op_name"
                              :value="option.op_id"
                              v-model="selectedOptions"
                              color="teal accent-4"
                              class="teal--text mt-0"
                            ></v-checkbox>
                          </template>
                        </v-card>
                      </v-col>

                      <v-col cols="6">
                        <!--Office-->
                        <v-row>
                          <v-select
                            v-model="Order.shipment.office"
                            solo
                            dense
                            :items="offices"
                            :rules="rules.item"
                            item-text="of_name"
                            item-value="of_id"
                            :label="OfficeLabel"
                            required
                          ></v-select>
                        </v-row>
                        <v-row>
                          <v-text-field
                            class="pb-0 mb-0"
                            solo
                            dense
                            v-model="Order.shipment.purpose"
                            :label="PurposeLabel"
                            require
                          ></v-text-field>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-container>
              </v-card>

              <v-btn text @click="changePage('Home')">{{ Cancelbtn }}</v-btn>
              <v-btn color="normal" @click="validate(2)">
                {{ Continuebtn }}
              </v-btn>
            </v-stepper-content>

            <!--Packages-->
            <v-stepper-content step="2" class="teal">
              <v-card class="d-inline-block mx-auto teal" outlined>
                <!--Begin -->
                <v-container fluid>
                  <!--Títle -->
                  <v-row class="align-center">
                    <v-col cols="3"></v-col>
                    <v-col class="align-center" justify="center">
                      <p class="display-2 white--text">
                        {{ NewShipmentTitle }}
                      </p>
                    </v-col>
                    <v-col cols="3"></v-col>
                  </v-row>
                  <!--Form 1-->
                  <v-form ref="form2">
                    <div>
                      <!--Characteristics-->
                      <v-row>
                        <v-col cols="3">
                          <v-text-field
                            class="pb-0 mb-0"
                            solo
                            dense
                            v-model="PackageDetails.width"
                            suffix="cm"
                            :rules="rules.numericitem"
                            required
                            type="number"
                            :label="WidthLabel"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                          <v-text-field
                            class="pa-0 ma-0"
                            solo
                            dense
                            v-model="PackageDetails.height"
                            suffix="cm"
                            :rules="rules.numericitem"
                            :label="HeightLabel"
                            type="number"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                          <v-text-field
                            class="pa-0 ma-0"
                            solo
                            dense
                            v-model="PackageDetails.length"
                            suffix="cm"
                            required
                            type="number"
                            :rules="rules.numericitem"
                            :label="LengthLabel"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                          <v-text-field
                            class="pa-0 ma-0"
                            solo
                            dense
                            v-model="PackageDetails.weight"
                            suffix="lbs"
                            required
                            type="number"
                            :rules="rules.numericitem"
                            :label="WeightLabel"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <!--Characteristics2-->
                      <v-row>
                        <v-col cols="6">
                          <v-select
                            v-model="PackageDetails.characteristics"
                            solo
                            dense
                            :items="characteristics"
                            item-text="ch_name"
                            item-value="ch_id"
                            :label="CharacteristicLabel"
                            required
                          ></v-select>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            class="pa-0 ma-0"
                            solo
                            dense
                            v-model="PackageDetails.description"
                            :label="PackageDescriptionLabel"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </div>
                    <v-btn color="normal" @click="addPackage">
                      <v-icon class="mr-1 mt-0">mdi-plus</v-icon>
                      <p class="mt-3">{{ AddPackage }}</p>
                    </v-btn>
                    <v-card
                      v-for="(orderPackage, i) in Order.packages"
                      :key="i"
                      color="rgba(255,255,255,.5)"
                      class="mt-3"
                    >
                      <v-row align="center">
                        <v-col cols="4" class="text-start pl-10">
                          <p class="my-0">
                            {{ WidthLabel + ": " + orderPackage.width + " cm" }}
                          </p>
                          <p class="my-0">
                            {{
                              HeightLabel + ": " + orderPackage.height + " cm"
                            }}
                          </p>
                          <p class="my-0">
                            {{
                              LengthLabel + ": " + orderPackage.length + " cm"
                            }}
                          </p>
                          <p class="my-0">
                            {{
                              WeightLabel + ": " + orderPackage.weight + " lbs"
                            }}
                          </p>
                        </v-col>
                        <v-col cols="4" class="text-start pl-5">
                          <p class="my-0">
                            {{ CharacteristicLabel }}:
                            {{
                              orderPackage.characteristic !== null
                                ? orderPackage.characteristic
                                : ""
                            }}
                          </p>
                          <p class="my-0">
                            {{ PackageDescriptionLabel }}:
                            {{
                              orderPackage.description !== null
                                ? orderPackage.description
                                : ""
                            }}
                          </p>
                          <p class="my-0">
                            {{ "Total: " + orderPackage.cost + " $" }}
                          </p>
                        </v-col>
                        <v-col cols="4">
                          <v-btn
                            small
                            color="error"
                            class=".d-none .d-md-flex mr-10"
                            @click="deletePackage(i)"
                          >
                            <v-icon class="mr-1 mt-0">mdi-delete</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-form>
                </v-container>
              </v-card>
              <v-row>
                <v-col cols="2" align="left" justify="left">
                  <v-btn text small @click="e1 = 1">
                    <v-icon class="mr-1 mt-0">mdi-chevron-left</v-icon>
                    <p class="mt-5 hidden-sm-and-down">{{ GoBack }}</p>
                  </v-btn>
                </v-col>
                <v-col cols="8" class="ml-1" align="center" justify="center">
                  <v-btn text @click="changePage('Home')">{{
                    Cancelbtn
                  }}</v-btn>
                  <v-btn color="normal" @click="validate(3)">{{
                    Continuebtn
                  }}</v-btn>
                </v-col>
                <v-col cols="2"></v-col>
              </v-row>
            </v-stepper-content>

            <!--Costs-->
            <v-stepper-content step="3" class="teal">
              <v-card class="d-inline-block mx-auto teal" outlined>
                <!--Begin -->
                <v-container fluid>
                  <!--Títle -->
                  <v-row class="align-center">
                    <v-col class="align-center" justify="center">
                      <p class="display-2 white--text">
                        {{ NewShipmentTitle }}
                      </p>
                    </v-col>
                  </v-row>
                  <!--Form 1-->
                  <form>
                    <!--Packages Cost-->
                    <div v-for="(orderPackage, i) in Order.packages" :key="i">
                      <v-row>
                        <v-col cols=" 1"></v-col>
                        <v-col cols>
                          <v-subheader>{{ PackageCostLabel }}</v-subheader>
                        </v-col>
                        <v-col cols>
                          <v-text-field
                            class="pa-0 ma-0"
                            solo
                            dense
                            readonly
                            suffix="$"
                            :label="orderPackage.cost"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="1"></v-col>
                      </v-row>
                    </div>
                    <v-divider></v-divider>
                    <v-row>
                      <v-col cols="1"></v-col>
                      <v-col>
                        <v-subheader class="mt-0">{{
                          ShipmentCostLabel
                        }}</v-subheader>
                      </v-col>
                      <v-col>
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          readonly
                          suffix="$"
                          :label="ShipmentSurcharges.toString()"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="1"></v-col>
                    </v-row>

                    <!--Service cost -->
                    <v-row>
                      <v-col cols="1"></v-col>
                      <v-col>
                        <v-subheader>{{ ServiceCostLabel }}</v-subheader>
                      </v-col>
                      <v-col>
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          readonly
                          suffix="$"
                          :value="basecost.service"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="1"></v-col>
                    </v-row>

                    <!--Discounts -->
                    <v-row>
                      <v-col cols="1"></v-col>
                      <v-col>
                        <v-select
                          v-model="Order.discount"
                          solo
                          dense
                          :items="discounts"
                          :disabled="discounts.length == 0 || discountused"
                          item-value="di_id"
                          item-text="discount"
                          :label="DiscountLabel"
                          v-on="CalculateTotal(Order.discount)"
                        ></v-select>
                      </v-col>
                      <v-col cols="1"></v-col>
                    </v-row>
                    <!--Total-->
                    <v-row>
                      <v-col cols="1"></v-col>
                      <v-col>
                        <v-subheader class="title font-weight-black"
                          >TOTAL</v-subheader
                        >
                      </v-col>
                      <v-col>
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          readonly
                          suffix="$"
                          :value="Order.shipment.total"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="1"></v-col>
                    </v-row>
                  </form>
                </v-container>
              </v-card>
              <v-row>
                <v-col cols="2" align="left" justify="left">
                  <v-btn text small @click="e1 = 2">
                    <v-icon class="mr-1 mt-0">mdi-chevron-left</v-icon>
                    <p class="mt-5 hidden-sm-and-down">{{ GoBack }}</p>
                  </v-btn>
                </v-col>
                <v-col cols="8" class="ml-1" align="center" justify="center">
                  <v-btn text @click="changePage('Home')">{{
                    Cancelbtn
                  }}</v-btn>
                  <v-btn color="normal" @click="e1 = 4">{{
                    Continuebtn
                  }}</v-btn>
                </v-col>
                <v-col cols="2"></v-col>
              </v-row>
            </v-stepper-content>

            <!--Confirmation-->
            <v-stepper-content step="4" class="teal">
              <v-card class="d-inline-block mx-auto teal" outlined>
                <!--Begin -->
                <v-container fluid>
                  <!--Títle -->
                  <v-row class="align-center">
                    <v-col cols="3"></v-col>
                    <v-col class="align-center" justify="center">
                      <p class="display-2 white--text">
                        {{ NewShipmentTitle }}
                      </p>
                    </v-col>
                    <v-col cols="3"></v-col>
                  </v-row>
                  <!--Form 1-->
                  <form>
                    <!--Title 3 -->
                    <v-row>
                      <v-col>
                        <p
                          class="body-1 font-weight-light align-center white--text"
                          justify="center"
                        >
                          {{ DestinationTitle }}
                        </p>
                      </v-col>
                    </v-row>
                    <!--Receiver -->
                    <v-row>
                      <v-col cols="6">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.receiver.firstName"
                          :label="Order.receiver.firstName"
                          readonly
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.receiver.lastName"
                          :label="Order.receiver.lastName"
                          readonly
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!--Direction 3 -->
                    <v-row>
                      <v-col cols="4">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.direction.zipCode"
                          :value="Order.direction.zipCode"
                          readonly
                          type="number"
                          counter="5"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.direction.city"
                          :label="Order.direction.city"
                          readonly
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.direction.state"
                          :label="Order.direction.state"
                          readonly
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!--Direction 4 -->
                    <v-row>
                      <v-col cols="6">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.direction.primaryLine"
                          :label="Order.direction.primaryLine"
                          readonly
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.direction.secondaryLine"
                          :label="Order.direction.secondaryLine"
                          readonly
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </form>
                </v-container>
              </v-card>
              <v-row>
                <v-col cols="2" align="left" justify="left">
                  <v-btn text small @click="e1 = 3">
                    <v-icon class="mr-1 mt-0">mdi-chevron-left</v-icon>
                    <p class="mt-5 hidden-sm-and-down">{{ GoBack }}</p>
                  </v-btn>
                </v-col>
                <v-col cols="8" class="ml-1" align="center" justify="center">
                  <v-btn text @click="changePage('Home')">{{
                    Cancelbtn
                  }}</v-btn>
                  <v-btn color="normal" @click="searchRoute()">{{
                    Continuebtn
                  }}</v-btn>
                </v-col>
                <v-col cols="2"></v-col>
              </v-row>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
      <v-col class="hidden-sm-and-down" cols="3"></v-col>
    </v-row>
    <v-snackbar v-model="snackbar" color="red">
      {{ snackRegister }}
      <v-btn dark text @click="snackbar = false">{{ close }}</v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbar2" color="success">
      {{ snackRegisterSuccess }}
      <v-btn dark text @click="snackbar2 = false">{{ close }}</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { mapState } from "vuex";
import moment from "moment";

@Component({
  components: {},
  computed: {
    ...mapState("NewShipment", [
      "characteristics",
      "options",
      "offices",
      "discounts",
      "basecost",
      "trackingID",
    ]),
  },
})
export default class Shipment extends Vue {
  $store: any;
  $router: any;
  e1 = 1;
  selectedOptions = [];

  GrossWeight!: any;
  DimensionalWeight!: any;
  OptionsCharge: number[] = [];
  OptionsTotal: any;
  PackTotal: any;
  OptionTotal: any;
  Subtotal: any;
  trackingID: any;
  userID: any;
  selectedDiscount: any;
  ShipmentSurcharges: any = 0;
  snackbar = false;
  snackbar2 = false;
  close = "Close";
  discountused = false;

  characteristics!: {
    ch_id: number;
    ch_name: string;
    ch_charge: number;
    ch_charge_parameter: string;
  }[];

  options!: {
    op_id: number;
    op_name: string;
    op_charge: number;
    op_charge_parameter: string;
  }[];

  basecost!: {
    service: number;
    shipping: number;
  };

  offices!: {
    of_id: number;
    of_name: string;
    of_fk_direction: number;
    of_fk_status: number;
  }[];

  discounts!: {
    di_id: number;
    di_name: string;
    di_percentage: number;
    discount: string;
  }[];

  Order: {
    receiver: {
      identification: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
    };
    direction: {
      zipCode: number | null;
      city: string;
      state: string;
      country: string;
      primaryLine: string;
      secondaryLine: string;
    };
    shipment: {
      date: string;
      total: number;
      office: number;
      user: number;
      purpose: string;
    };
    packages: {
      width: number | null;
      height: number | null;
      length: number | null;
      weight: number | null;
      characteristic: number | null;
      description: string | null;
      cost: string;
    }[];
    options: {}[];
    discount: number | null;
  } = {
    receiver: {
      identification: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    direction: {
      zipCode: null,
      city: "",
      state: "",
      country: "United States",
      primaryLine: "",
      secondaryLine: "",
    },
    shipment: {
      date: "",
      total: 0,
      office: 0,
      user: 0,
      purpose: "",
    },
    packages: [],
    options: [],
    discount: null,
  };

  PackageDetails: {
    width: number | null;
    height: number | null;
    length: number | null;
    weight: number | null;
    characteristics: number | null;
    description: string | null;
    cost: number | null;
  } = {
    width: null,
    height: null,
    length: null,
    weight: null,
    characteristics: null,
    description: null,
    cost: null,
  };

  rules: {} = {
    required: (value: string) =>
      (!!value && value !== "" && value !== undefined) || "Required",
    emailRules: [
      (v: string) => !!v || this.EmailValidation,
      (v: string) => /.+@.+\..+/.test(v) || this.EmailValidation,
    ],
    item: [(v: string) => !!v || this.ItemValidation],
    numericitem: [
      (v: number) => !!v || this.ItemValidation,
      (v: number) => v > 0.0 || this.ZeroValidation,
    ],
    ZipCodeRules: [
      (v: number) => !!v || this.ItemValidation,
      (v: number) => (v > 9999 && v < 100000) || this.ZipCodeValidation,
    ],
    PhoneRules: [
      (v: number) => !!v || this.ItemValidation,
      (v: number) => (v > 999999999 && v < 9999999999) || this.PhoneValidation,
    ],
  };

  $refs!: {
    form1: any;
    form2: any;
  };

  searchRoute() {
    if (localStorage.getItem("ID") != null) {
      this.userID = localStorage.getItem("ID");
      this.Order.shipment.user = this.userID;
    }
    this.Order.shipment.date = moment().format("YYYY-MM-DD HH:mm:ss");
    this.$store
      .dispatch("NewShipment/sendOrder", this.Order)
      .then((status: any) => {
        if (status == 201) {
          this.trackingID = this.$store.state.NewShipment.trackingID;
          this.snackbar2 = true;
          setTimeout(() => {
            this.$router.push({
              name: "DetailShipment",
              params: { id: this.trackingID.trackingid },
            });
          }, 3000);
        } else {
          this.snackbar = true;
        }
      });
  }

  beforeMount() {
    this.$store.dispatch("NewShipment/getCharacteristics");
    this.$store.dispatch("NewShipment/getOptions");
    this.$store.dispatch("NewShipment/getOffices");
    this.$store.dispatch(
      "NewShipment/getDiscounts",
      localStorage.getItem("ID")
    );
    this.$store.dispatch("NewShipment/getBaseCost");
  }

  validate(page: number) {
    if (page == 2) {
      if (this.$refs.form1.validate()) {
        if (this.selectedOptions != null) {
          for (let i = 0; i < this.selectedOptions.length; i++) {
            this.Order.options.push({ option: this.selectedOptions[i] });
            this.OptionsTotal = this.CalculateOptionsCharge(
              this.selectedOptions[i]
            );
          }
        }
        this.e1 = page;
      }
    } else if (page == 3) {
      if (this.Order.packages.length > 0) {
        this.CalculateTotal(0);
        this.e1 = page;
      } else {
        this.$refs.form2.validate();
      }
    }
  }

  changePage(link: string) {
    this.$router.push({ name: link });
  }

  addPackage() {
    if (this.$refs.form2.validate()) {
      this.Order.packages.push({
        width: this.PackageDetails.width,
        height: this.PackageDetails.height,
        length: this.PackageDetails.length,
        weight: this.PackageDetails.weight,
        characteristic: this.PackageDetails.characteristics,
        description: this.PackageDetails.description,
        cost: this.CalculatePackageTotal(
          this.PackageDetails.weight,
          this.PackageDetails.height,
          this.PackageDetails.width,
          this.PackageDetails.length,
          this.PackageDetails.characteristics
        ),
      });
    }
    this.$refs.form2.reset();
  }
  characteristicCharge: any;
  CalculatePackageTotal(
    PackWeight: any,
    PackHeight: any,
    PackWidth: any,
    PackLenght: any,
    PackCharacteristic: any
  ) {
    if (PackCharacteristic != null) {
      this.characteristicCharge = this.characteristics.filter(
        (c) => c.ch_id == PackCharacteristic
      )[0].ch_charge;
    } else {
      this.characteristicCharge = 0;
    }

    this.GrossWeight = this.basecost.shipping * PackWeight;

    this.DimensionalWeight = (
      (this.basecost.shipping * PackWidth * PackLenght * PackHeight) /
      5000
    ).toFixed(2);

    if (this.GrossWeight > this.DimensionalWeight) {
      return this.GrossWeight + this.characteristicCharge;
    } else {
      return this.DimensionalWeight + this.characteristicCharge;
    }
  }

  CalculateOptionsCharge(i: number) {
    if (this.selectedOptions != null) {
      this.OptionsCharge.push(
        this.options.filter((o) => o.op_id == i)[0].op_charge
      );
    } else {
      this.OptionsCharge = [];
    }
  }

  CalculateOptionsTotal() {
    if (this.OptionsCharge != null) {
      this.ShipmentSurcharges = this.OptionsCharge.reduce(
        (total: any, num: any) => total + num,
        0
      ).toFixed(2);
      return this.ShipmentSurcharges;
    } else {
      return 1;
    }
  }

  CalculatePackagesTotal() {
    return this.Order.packages
      .reduce(
        (acc: any, item: { cost: string }) => acc + parseFloat(item.cost),
        0
      )
      .toFixed(2);
  }

  CalculateTotal(i: number) {
    this.OptionTotal = parseFloat(this.CalculateOptionsTotal());
    this.PackTotal = parseFloat(this.CalculatePackagesTotal());
    if (i != 0 && i != null) {
      this.discountused = true;
    }
    if (this.Order.discount == null) {
      this.Order.shipment.total =
        this.OptionTotal + this.PackTotal + this.basecost.service;
    } else {
      this.selectedDiscount = this.discounts
        .filter((d) => d.di_id == i)[0]
        .di_percentage.toFixed(2);
      this.Subtotal =
        (this.OptionTotal + this.PackTotal + this.basecost.service) *
        (1 - this.selectedDiscount);
      this.Order.shipment.total = this.Subtotal;
    }
  }

  deletePackage(index: number) {
    this.Order.packages.splice(index, 1);
  }

  NewShipmentTitle = "Your Order";
  DestinationTitle = "DESTINATION";
  ReceiverData = "Receiver data";
  GoBack = "Go to back";

  Step1 = "Origin/Destination";
  PhoneLabel = "Phone";
  EmailLabel = "Email";
  ZipCodeLabel = "Zip Code";
  CityLabel = "City";
  StateLabel = "State";
  DirectionLabel1 = "Address Line";
  DirectionLabel2 = "Address Line (cont)";
  ReceiverNameLabel = "Name";
  ReceiverLastNameLabel = "Last Name";
  OfficeLabel = "Select an origin office";
  PurposeLabel = "Purpose of Shipment";

  EmailValidation = "Email is incorrect";
  ItemValidation = "This Item is required";
  ZipCodeValidation = "The zip code must be 5 digits";
  PhoneValidation = "The phone must be 10 digits";
  ZeroValidation = "Zero is not valid data";

  Step2 = "Packages";
  WidthLabel = "Width";
  HeightLabel = "Height";
  LengthLabel = "Length";
  WeightLabel = "Weight";
  CharacteristicLabel = "Characteristic";
  PackageCostLabel = "Package Cost";
  AddPackage = "Add package";
  PackageDescriptionLabel = "Description";

  Step3 = "Costs";
  ShipmentCostLabel = "Shipment surcharges";
  DiscountLabel = "Select one of your discounts";
  ServiceCostLabel = "Service's cost";

  Step4 = "Confirmation";

  Continuebtn = "Continue";
  Cancelbtn = "Cancel";
  snackRegister = "Ups! There are a problem. Try again";
  snackRegisterSuccess = "The Shipment was register successfully";

  mounted() {
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
            term.context == "general" ||
            term.context == "Shipment" ||
            term.context == "package"
          );
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "generalName") {
            this.ReceiverNameLabel = term.translation;
          } else if (term.name == "generalEmail") {
            this.EmailLabel = term.translation;
          } else if (term.name == "generalPhone") {
            this.PhoneLabel = term.translation;
          } else if (term.name == "generalDestination") {
            this.DestinationTitle = term.translation;
          } else if (term.name == "ShipmentTitle") {
            this.NewShipmentTitle = term.translation;
          } else if (term.name == "ShipmentZipCode") {
            this.ZipCodeLabel = term.translation;
          } else if (term.name == "ShipmentCity") {
            this.CityLabel = term.translation;
          } else if (term.name == "ShipmentDirection1") {
            this.DirectionLabel1 = term.translation;
          } else if (term.name == "ShipmentDirection2") {
            this.DirectionLabel2 = term.translation;
          } else if (term.name == "ShipmentOfficeSelect") {
            this.OfficeLabel = term.translation;
          } else if (term.name == "ShipmentStep1") {
            this.Step1 = term.translation;
          } else if (term.name == "ShipmentPurpose") {
            this.PurposeLabel = term.translation;
          } else if (term.name == "generalLastName") {
            this.ReceiverLastNameLabel = term.translation;
          } else if (term.name == "generalCancelbutton") {
            this.Cancelbtn = term.translation;
          } else if (term.name == "generalContinuebutton") {
            this.Continuebtn = term.translation;
          } else if (term.name == "packageStep2") {
            this.Step2 = term.translation;
          } else if (term.name == "packageWeight") {
            this.WeightLabel = term.translation;
          } else if (term.name == "packageCharacteristic") {
            this.CharacteristicLabel = term.translation;
          } else if (term.name == "packageWidth") {
            this.WidthLabel = term.translation;
          } else if (term.name == "packageHeight") {
            this.HeightLabel = term.translation;
          } else if (term.name == "packageLength") {
            this.LengthLabel = term.translation;
          } else if (term.name == "packageAdd") {
            this.AddPackage = term.translation;
          } else if (term.name == "packageCost") {
            this.PackageCostLabel = term.translation;
          } else if (term.name == "ShipmentStep3") {
            this.Step3 = term.translation;
          } else if (term.name == "ShipmentCost") {
            this.ShipmentCostLabel = term.translation;
          } else if (term.name == "ShipmentConfirmation") {
            this.Step4 = term.translation;
          } else if (term.name == "packageDescription") {
            this.PackageDescriptionLabel = term.translation;
          } else if (term.name == "generalState") {
            this.StateLabel = term.translation;
          } else if (term.name == "ShipmentDiscount") {
            this.DiscountLabel = term.translation;
          } else if (term.name == "ShipmentServiceCost") {
            this.ServiceCostLabel = term.translation;
          } else if (term.name == "ShipmentReceiverData") {
            this.ReceiverData = term.translation;
          } else if (term.name == "generalGoBack") {
            this.GoBack = term.translation;
          } else if (term.name == "ShipmentRegisterError") {
            this.snackRegister = term.translation;
          } else if (term.name == "ShipmentRegisterSuccess") {
            this.snackRegisterSuccess = term.translation;
          } else if (term.name == "generalClose") {
            this.close = term.translation;
          }
        }
      );
  }
}
</script>

<style lang="scss"></style>
