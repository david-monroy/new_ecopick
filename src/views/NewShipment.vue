<template>
  <v-container fluid elevation="0">
    <v-row no-gutters>
      <v-col class="hidden-sm-and-down" cols="3"></v-col>
      <v-col cols="12" md="6" align="center">
        <v-stepper v-model="e1">
          <v-stepper-header class="light-green accent-1">
            <v-stepper-step color="teal" :complete="e1 > 1" step="1">
              {{ Step1 }}
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="teal" :complete="e1 > 2" step="2">
              {{ Step2 }}
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="teal" :complete="e1 > 3" step="3">
              {{ Step3 }}
            </v-stepper-step>

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
                      <v-text class="display-2 white--text">{{
                        NewShipmentTitle
                      }}</v-text>
                    </v-col>
                    <v-col cols="3"></v-col>
                  </v-row>
                  <!--Form 1-->
                  <v-form ref="form">
                    <!--Title 3 -->
                    <v-row>
                      <v-col>
                        <v-text
                          class="body-1 font-weight-light align-center white--text"
                          justify="center"
                          >{{ DestinationTitle }}</v-text
                        >
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
                          @input="$v.ReceiverLastName.$touch()"
                          @blur="$v.ReceiverLastName.$touch()"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.receiver.identification"
                          :rules="rules.numericitem"
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
                          :rules="rules.item"
                          :label="DirectionLabel2"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!--Options-->
                    <v-row>
                      <v-col cols="6">
                        <v-list dense>
                          <v-list-item-group
                            v-model="Order.options.option"
                            multiple
                          >
                            <template v-for="option in options">
                              <v-list-item
                                :key="option.op_id"
                                :value="option.op_name"
                                active-class="teal--text text--accent-4"
                              >
                                <template v-slot:default="{ active, toggle }">
                                  <v-list-item-content>
                                    <v-list-item-title
                                      v-text="option.op_name"
                                    ></v-list-item-title>
                                  </v-list-item-content>

                                  <v-list-item-action>
                                    <v-checkbox
                                      :input-value="active"
                                      :true-value="option"
                                      color="teal accent-4"
                                      @click="toggle"
                                    ></v-checkbox>
                                  </v-list-item-action>
                                </template>
                              </v-list-item>
                            </template>
                          </v-list-item-group>
                        </v-list>
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
              <v-btn color="normal" @click="e1 = 2">{{ Continuebtn }}</v-btn>

              <v-btn text @click="changePage('Home')">{{ Cancelbtn }}</v-btn>
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
                      <v-text class="display-2 white--text">{{
                        NewShipmentTitle
                      }}</v-text>
                    </v-col>
                    <v-col cols="3"></v-col>
                  </v-row>
                  <!--Form 1-->
                  <v-form ref="form">
                    <div
                      v-for="(experience, index) in PackagesDetails"
                      :key="index"
                    >
                      <!--Characteristics-->
                      <v-row>
                        <v-col cols="3">
                          <v-text-field
                            class="pb-0 mb-0"
                            solo
                            dense
                            v-model="Order.packages.width"
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
                            v-model="Order.packages.height"
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
                            v-model="Order.packages.lenght"
                            suffix="cm"
                            required
                            type="number"
                            :rules="rules.numericitem"
                            :label="LenghtLabel"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                          <v-text-field
                            class="pa-0 ma-0"
                            solo
                            dense
                            v-model="Order.packages.weight"
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
                            v-model="Order.packages.characteristic"
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
                            v-model="Order.packages.description"
                            :label="PackageDescriptionLabel"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <!--Costs-->
                      <v-row>
                        <v-col cols="3"></v-col>
                        <v-col cols="4">
                          <v-text-field
                            class="pa-0 ma-0"
                            solo
                            dense
                            v-model="Order.packages.cost"
                            :label="PackageTotal"
                            disabled
                            @input="$v.PackageCost.$touch()"
                            @blur="$v.PackageCost.$touch()"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="2">
                          <v-btn
                            small
                            color="error"
                            @click="deletePackage(index)"
                            :disabled="index == 0"
                          >
                            <v-icon class="mr-1 mt-0">mdi-delete</v-icon>
                          </v-btn>
                        </v-col>
                        <v-col cols="3"></v-col>
                      </v-row>
                    </div>
                    <v-btn color="normal" @click="addPackage">
                      <v-icon class="mr-1 mt-0">mdi-plus</v-icon>
                      <p class="mt-3">{{ AddPackage }}</p>
                    </v-btn>
                  </v-form>
                </v-container>
              </v-card>

              <v-btn color="normal" @click="validate()">
                {{ Continuebtn }}
              </v-btn>

              <v-btn text @click="changePage('Home')">{{ Cancelbtn }}</v-btn>
            </v-stepper-content>

            <!--Costs-->
            <v-stepper-content step="3" class="teal">
              <v-card class="d-inline-block mx-auto teal" outlined>
                <!--Begin -->
                <v-container fluid>
                  <!--Títle -->
                  <v-row class="align-center">
                    <v-col cols="3"></v-col>
                    <v-col cols="6" class="align-center" justify="center">
                      <v-text class="display-2 white--text">{{
                        NewShipmentTitle
                      }}</v-text>
                    </v-col>
                    <v-col cols="3"></v-col>
                  </v-row>
                  <!--Form 1-->
                  <form>
                    <!--Packages Cost-->
                    <div
                      v-for="(experience, index) in PackagesDetails"
                      :key="index"
                    >
                      <v-row>
                        <v-col cols="3"></v-col>
                        <v-col cols="3">
                          <v-subheader>{{ PackageCostLabel }}</v-subheader>
                        </v-col>
                        <v-col cols="3">
                          <v-text-field
                            class="pa-0 ma-0"
                            solo
                            dense
                            v-model="Order.packages.cost"
                            disabled
                            suffix="$"
                            :label="PackageTotal"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="3"></v-col>
                      </v-row>
                    </div>
                    <v-divider></v-divider>
                    <!--Ship-->
                    <v-row>
                      <v-col cols="3">
                        <v-subheader>{{ ShipmentCostLabel }}</v-subheader>
                      </v-col>
                      <v-col cols="3">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="ShipmentCost"
                          disabled
                          suffix="$"
                          :label="ShipmentCost"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-select
                          v-model="Order.discount"
                          solo
                          dense
                          :items="discounts"
                          item-value="di_id"
                          item-text="di_name"
                          :label="DiscountLabel"
                        ></v-select>
                      </v-col>
                    </v-row>
                    <!--Total-->
                    <v-row>
                      <v-col cols="3"></v-col>
                      <v-col cols="3">
                        <v-subheader class="title font-weight-black"
                          >TOTAL</v-subheader
                        >
                      </v-col>
                      <v-col cols="3">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.shipment.total"
                          disabled
                          suffix="$"
                          :label="TotalShipment"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="3"></v-col>
                    </v-row>
                  </form>
                </v-container>
              </v-card>
              <v-row justify="center">
                <v-btn color="normal" @click="e1 = 4">{{ Continuebtn }}</v-btn>

                <v-btn text @click="changePage('Home')">{{ Cancelbtn }}</v-btn>
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
                      <v-text class="display-2 white--text">{{
                        NewShipmentTitle
                      }}</v-text>
                    </v-col>
                    <v-col cols="3"></v-col>
                  </v-row>
                  <!--Form 1-->
                  <form>
                    <!--Title 3 -->
                    <v-row>
                      <v-col>
                        <v-text
                          class="body-1 font-weight-light align-center white--text"
                          justify="center"
                          >{{ DestinationTitle }}</v-text
                        >
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
                          disabled
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.receiver.lastName"
                          :label="Order.receiver.lastName"
                          disabled
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
                          disabled
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
                          disabled
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.direction.state"
                          :label="Order.direction.state"
                          disabled
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
                          disabled
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="Order.direction.secondaryLine"
                          :label="Order.direction.secondaryLine"
                          disabled
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </form>
                </v-container>
              </v-card>

              <v-btn color="normal" @click="prueba()">
                {{ Continuebtn }}
              </v-btn>

              <v-btn text @click="changePage('Home')">{{ Cancelbtn }}</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
      <v-col class="hidden-sm-and-down" cols="3"></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  components: {},
  computed: {
    ...mapState("NewShipment", [
      "characteristics",
      "options",
      "offices",
      "discounts",
    ]),
  },
})
export default class Shipment extends Vue {
  $store: any;
  $router: any;
  data() {
    return {
      e1: 1,
    };
  }
  e1 = 1;

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
      width: number;
      height: number;
      lenght: number;
      weight: number;
      cost: number;
      characteristic: number;
      description: string;
    }[];
    options: {
      option: number;
    }[];
    discount: number;
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
      country: "",
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
    packages: [
      {
        width: 1,
        height: 1,
        lenght: 1,
        weight: 1,
        cost: 1,
        characteristic: 1,
        description: "",
      },
    ],
    options: [
      {
        option: 0,
      },
    ],
    discount: 0,
  };

  UserName = localStorage.getItem("Name");

  NewShipmentTitle = "Your Order";
  OriginTitle = "ORIGIN";
  DestinationTitle = "DESTINATION";

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
  Offices = "";

  EmailValidation = "Email is incorrect";
  PurposeLabel = "Purpose of Shipment";

  Step2 = "Packages";
  WidthLabel = "Width";
  HeightLabel = "Height";
  LenghtLabel = "Lenght";
  WeightLabel = "Weight";
  CharacteristicLabel = "Characteristic";
  PackageTotal = "20$";
  PackageCharacteristics = [];
  AddPackage = "Add another package";
  PackageDescriptionLabel = "Description";

  Step3 = "Costs";
  ShipmentCostLabel = "Ship Cost";
  ShipmentCost = "0";
  PackageCostLabel = "Package 1";
  TotalShipment = "100";
  DiscountLabel = "Select one of your discounts";

  Step4 = "Confirmation";

  Continuebtn = "Continue";
  Cancelbtn = "Cancel";
  ItemValidation = "This Item is required";
  ZipCodeValidation = "The zip code must be 5 digits";
  PhoneValidation = "The phone must be 10 digits";
  ZeroValidation = "Zero is not valid data";

  PackagesDetails = [
    {
      width: "",
      height: "",
      lenght: "",
      weight: "",
      characteristics: "",
    },
  ];

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
      (v: number) => v > 0 || this.ZeroValidation,
    ],
    ZipCodeRules: [
      (v: number) => !!v || this.ItemValidation,
      (v: number) => (v > 9999 && v < 99999) || this.ZipCodeValidation,
    ],
    PhoneRules: [
      (v: number) => !!v || this.ItemValidation,
      (v: number) => (v > 999999999 && v < 9999999999) || this.PhoneValidation,
    ],
  };

  $refs!: {
    form: any;
  };

  prueba() {
    console.log("order", this.Order);
  }

  beforeMount() {
    this.$store.dispatch("NewShipment/getCharacteristics").then(() => {
      this.characteristics = this.$store.state.NewShipment.characteristics;
      console.log(this.characteristics);
    });
    this.$store.dispatch("NewShipment/getOptions").then(() => {
      this.options = this.$store.state.NewShipment.options;
      console.log(this.options);
    });
    this.$store.dispatch("NewShipment/getOffices").then(() => {
      this.offices = this.$store.state.NewShipment.offices;
      console.log("offices", this.offices);
    });
    this.$store.dispatch("NewShipment/getDiscounts").then(() => {
      this.discounts = this.$store.state.NewShipment.discounts;
      console.log("discounts", this.discounts);
    });
  }

  validate() {
    if (this.$refs.form.validate()) {
      console.log("Correct data");
      if (this.e1 != 4) {
        this.e1++;
      }
    } else {
      console.log("Invalid Data");
    }
  }

  changePage(link: string) {
    this.$router.push({ name: link });
  }

  addPackage() {
    this.PackagesDetails.push({
      width: "",
      height: "",
      lenght: "",
      weight: "",
      characteristics: "",
    });
  }

  deletePackage(index: number) {
    this.PackagesDetails.splice(index, 1);
  }

  /*get total() {
    if (this.Order.discount == 0) {
      return this.Order.packages.reduce(
        (acc, item: { cost: number }) => acc + item.cost,
        0
      );
    } else {
      return (
        this.Order.packages.reduce(
          (acc, item: { pa_cost: number }) => acc + item.pa_cost,
          0
        ) * this.discount
      );
    }
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
  }*/

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
          } else if (term.name == "packageLenght") {
            this.LenghtLabel = term.translation;
          } else if (term.name == "packageAdd") {
            this.AddPackage = term.translation;
          } else if (term.name == "ShipmentStep3") {
            this.Step3 = term.translation;
          } else if (term.name == "ShipmentCost") {
            this.ShipmentCostLabel = term.translation;
          } else if (term.name == "packageCost") {
            this.PackageCostLabel = term.translation;
          } else if (term.name == "ShipmentConfirmation") {
            this.Step4 = term.translation;
          } else if (term.name == "packageDescription") {
            this.PackageDescriptionLabel = term.translation;
          } else if (term.name == "generalEmailRule") {
            this.EmailValidation = term.translation;
          } else if (term.name == "generalItemValidation") {
            this.ItemValidation = term.translation;
          }
        }
      );
  }
}
</script>

<style lang="scss"></style>
