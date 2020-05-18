<template>
  <v-container fluid elevation="0">
    <v-row no-gutters>
      <v-col class="hidden-sm-and-down" cols="3"></v-col>
      <v-col cols="12" md="6" align="center">
        <v-stepper v-model="e1">
          <v-stepper-header class="light-green accent-1">
            <v-stepper-step color="teal" :complete="e1 > 1" step="1">
              {{
              Step1
              }}
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="teal" :complete="e1 > 2" step="2">
              {{
              Step2
              }}
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="teal" :complete="e1 > 3" step="3">
              {{
              Step3
              }}
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
                      <v-text class="display-2 white--text">{{ NewShipmentTitle }}</v-text>
                    </v-col>
                    <v-col cols="3"></v-col>
                  </v-row>
                  <!--Title 2 -->
                  <v-row>
                    <v-col>
                      <v-text
                        class="body-1 font-weight-light align-center white--text"
                        justify="center"
                      >{{ OriginTitle }}</v-text>
                    </v-col>
                  </v-row>
                  <!--Form 1-->
                  <v-form ref="form">
                    <!--User-->
                    <v-row>
                      <v-col cols="3">
                        <v-text-field
                          class="pb-0 mb-0"
                          solo
                          dense
                          v-model="UserName"
                          :error-messages="UserNameErrors"
                          disabled
                          :label="UserName"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="OrPhone"
                          :error-messages="OrPhoneErrors"
                          color="white"
                          :label="PhoneLabel"
                          type="number"
                          counter="10"
                          required
                          @input="$v.OrPhone.$touch()"
                          @blur="$v.OrPhone.$touch()"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="5">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="OrEmail"
                          :rules="rules.emailRules"
                          :error-messages="OrEmailErrors"
                          color="white"
                          :label="EmailLabel"
                          @input="$v.OrEmail.$touch()"
                          @blur="$v.OrEmail.$touch()"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!--Office-->
                    <v-row>
                      <v-col cols="6">
                        <v-select
                          v-model="Office"
                          solo
                          dense
                          :items="Offices"
                          :rules="[(v) => !!v || 'Item is required']"
                          :label="OfficeLabel"
                          required
                        ></v-select>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          class="pb-0 mb-0"
                          solo
                          dense
                          v-model="Purpose"
                          :error-messages="PurposeErrors"
                          :label="PurposeLabel"
                          required
                          @input="$v.Purpose.$touch()"
                          @blur="$v.Purpose.$touch()"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!--Title 3 -->
                    <v-row>
                      <v-col>
                        <v-text
                          class="body-1 font-weight-light align-center white--text"
                          justify="center"
                        >{{ DestinationTitle }}</v-text>
                      </v-col>
                    </v-row>
                    <!--Receiver -->
                    <v-row>
                      <v-col cols="4">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="ReceiverName"
                          :error-messages="ReceiverNameErrors"
                          :label="ReceiverNameLabel"
                          required
                          @input="$v.ReceiverName.$touch()"
                          @blur="$v.ReceiverName.$touch()"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="ReceiverLastName"
                          :error-messages="ReceiverLastNameErrors"
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
                          v-model="ReceiverID"
                          :error-messages="ReceiverIDErrors"
                          label="ID"
                          required
                          @input="$v.ReceiverID.$touch()"
                          @blur="$v.ReceiverID.$touch()"
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
                          v-model="OrPhone"
                          :error-messages="OrPhoneErrors"
                          :label="PhoneLabel"
                          required
                          type="number"
                          counter="10"
                          @input="$v.OrPhone.$touch()"
                          @blur="$v.OrPhone.$touch()"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="8">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="OrEmail"
                          :rules="rules.emailRules"
                          :error-messages="OrEmailErrors"
                          :label="EmailLabel"
                          @input="$v.OrEmail.$touch()"
                          @blur="$v.OrEmail.$touch()"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!--Direction 3 -->
                    <v-row>
                      <v-col cols="6">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="OrZipCode"
                          :error-messages="OrZipCodeErrors"
                          :label="ZipCodeLabel"
                          required
                          type="number"
                          counter="5"
                          @input="$v.OrZipCode.$touch()"
                          @blur="$v.OrZipCode.$touch()"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="OrCity"
                          :error-messages="OrCityErrors"
                          :label="CityLabel"
                          required
                          @input="$v.OrCity.$touch()"
                          @blur="$v.OrCity.$touch()"
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
                          v-model="OrDirection"
                          :error-messages="OrDirectionErrors"
                          :label="DirectionLabel1"
                          required
                          @input="$v.OrDirection.$touch()"
                          @blur="$v.OrDirection.$touch()"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="OrDirection2"
                          :error-messages="OrDirection2Errors"
                          :label="DirectionLabel2"
                          required
                          @input="$v.OrDirection2.$touch()"
                          @blur="$v.OrDirection2.$touch()"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!--Options-->
                    <v-row>
                      <v-list dense>
                        <v-list-item-group v-model="model" multiple>
                          <template v-for="(Option, i) in Options">
                            <v-list-item
                              :key="`item-${i}`"
                              :value="item"
                              active-class="teal--text text--accent-4"
                            >
                              <template v-slot:default="{ active, toggle }">
                                <v-list-item-content>
                                  <v-list-item-title v-text="Option"></v-list-item-title>
                                </v-list-item-content>

                                <v-list-item-action>
                                  <v-checkbox
                                    :input-value="active"
                                    :true-value="Option"
                                    color="teal accent-4"
                                    @click="toggle"
                                  ></v-checkbox>
                                </v-list-item-action>
                              </template>
                            </v-list-item>
                          </template>
                        </v-list-item-group>
                      </v-list>
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
                      <v-text class="display-2 white--text">{{ NewShipmentTitle }}</v-text>
                    </v-col>
                    <v-col cols="3"></v-col>
                  </v-row>
                  <!--Form 1-->
                  <form>
                    <div v-for="(experience, index) in PackagesDetails" :key="index">
                      <!--Characteristics-->
                      <v-row>
                        <v-col cols="3">
                          <v-text-field
                            class="pb-0 mb-0"
                            solo
                            dense
                            v-model="Width"
                            suffix="cm"
                            :error-messages="WidthErrors"
                            required
                            type="number"
                            :label="WidthLabel"
                            @input="$v.Width.$touch()"
                            @blur="$v.Width.$touch()"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                          <v-text-field
                            class="pa-0 ma-0"
                            solo
                            dense
                            v-model="Height"
                            suffix="cm"
                            :error-messages="HeightErrors"
                            :label="HeightLabel"
                            type="number"
                            required
                            @input="$v.Height.$touch()"
                            @blur="$v.Height.$touch()"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                          <v-text-field
                            class="pa-0 ma-0"
                            solo
                            dense
                            v-model="Lenght"
                            suffix="cm"
                            required
                            :error-messages="LenghtErrors"
                            :label="LenghtLabel"
                            @input="$v.Lenght.$touch()"
                            @blur="$v.Lenght.$touch()"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                          <v-text-field
                            class="pa-0 ma-0"
                            solo
                            dense
                            v-model="Weight"
                            suffix="lbs"
                            requi
                            :error-messages="WeightErrors"
                            :label="WeightLabel"
                            @input="$v.Weight.$touch()"
                            @blur="$v.Weight.$touch()"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <!--Characteristics2-->
                      <v-row>
                        <v-col cols="6">
                          <v-select
                            v-model="Characteristic"
                            solo
                            dense
                            :items="PackageCharacteristics"
                            :rules="[(v) => !!v || 'Item is required']"
                            :label="CharacteristicLabel"
                            required
                          ></v-select>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            class="pa-0 ma-0"
                            solo
                            dense
                            v-model="PackageDescription"
                            :error-messages="PackageDescriptionErrors"
                            :label="PackageDescriptionLabel"
                            required
                            @input="$v.PackageDescription.$touch()"
                            @blur="$v.PackageDescription.$touch()"
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
                            v-model="PackageCost"
                            :error-messages="PackageCostErrors"
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
                  </form>
                </v-container>
              </v-card>

              <v-btn color="normal" @click="e1 = 3">{{ Continuebtn }}</v-btn>

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
                      <v-text class="display-2 white--text">{{ NewShipmentTitle }}</v-text>
                    </v-col>
                    <v-col cols="3"></v-col>
                  </v-row>
                  <!--Form 1-->
                  <form>
                    <!--Ship-->
                    <v-row>
                      <v-col cols="3"></v-col>
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
                          :error-messages="ShipmentCostErrors"
                          :label="ShipmentCost"
                          @input="$v.ShipmentCost.$touch()"
                          @blur="$v.ShipmentCost.$touch()"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="3"></v-col>
                    </v-row>
                    <!--Packages Cost-->
                    <div v-for="(experience, index) in PackagesDetails" :key="index">
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
                            v-model="PackageCost"
                            disabled
                            suffix="$"
                            :error-messages="PackageCostErrors"
                            :label="PackageTotal"
                            @input="$v.PackageCost.$touch()"
                            @blur="$v.PackageCost.$touch()"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="3"></v-col>
                      </v-row>
                    </div>
                    <v-divider></v-divider>
                    <v-row>
                      <v-col cols="3"></v-col>
                      <v-col cols="3">
                        <v-subheader class="title font-weight-black">TOTAL</v-subheader>
                      </v-col>
                      <v-col cols="3">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="TotalShipment"
                          disabled
                          suffix="$"
                          :error-messages="TotalShipmentErrors"
                          :label="TotalShipment"
                          @input="$v.TotalShipment.$touch()"
                          @blur="$v.TotalShipment.$touch()"
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
              <v-btn color="normal" @submit="hola">{{ Continuebtn }}</v-btn>

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

@Component({})
export default class Shipment extends Vue {
  $store: any;
  $router: any;

  NewShipmentTitle = "Your Order";
  OriginTitle = "ORIGIN";
  DestinationTitle = "DESTINATION";

  Step1 = "Origin/Destination";
  PhoneLabel = "Phone";
  EmailLabel = "Email";
  ZipCodeLabel = "Zip Code";
  UserName = localStorage.getItem("Name");
  CityLabel = "City";
  DirectionLabel1 = "Address Line";
  DirectionLabel2 = "Address Line (cont)";
  ReceiverNameLabel = "Name";
  ReceiverLastNameLabel = "Last Name";
  OfficeLabel = "Select an office";
  Offices = "";
  Options = ["Opcion1", "Opcion2", "Opcion3", "Opcion4"];
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

  PackagesDetails = [
    {
      width: "",
      height: "",
      lenght: "",
      weight: "",
      characteristics: "",
    },
  ];

  Step3 = "Costs";
  ShipmentCostLabel = "Ship Cost";
  ShipmentCost = "0";
  PackageCostLabel = "Package 1";
  TotalShipment = "100";

  Step4 = "Confirmation";

  isValid = true;
  $refs!: {
    form: any;
  };

  Validatebtn = "Validate";
  Continuebtn = "Continue";
  Cancelbtn = "Cancel";

  rules: {} = {
    required: (value: string) =>
      (!!value && value !== "" && value !== undefined) || "Required",
    emailRules: [
      (v: string) => !!v || this.EmailValidation,
      (v: string) => /.+@.+\..+/.test(v) || this.EmailValidation,
    ],
  };

  validate() {
    if (this.$refs.form.validate()) {
      this.isValid = false;
      console.log("Correct data");
    } else {
      console.log("Invalid Data");
    }
  }

  changePage(link: string) {
    this.$router.push({ name: link });
  }

  beforemount() {
    this.$store.dispatch("NewShipment/getPackagesCharacteristic").then(() => {
      this.PackageCharacteristics = this.$store.state.NewShipment.characteristics;
      console.log(this.PackageCharacteristics);
    });
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
          } else if (term.name == "generalOrigin") {
            this.OriginTitle = term.translation;
          } else if (term.name == "generalDestination") {
            this.DestinationTitle = term.translation;
          } else if (term.name == "generalEmailRule") {
            this.EmailValidation = term.translation;
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
          } else if (term.name == "generalValidatebutton") {
            this.Validatebtn = term.translation;
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
          }
        }
      );
  }

  data() {
    return {
      e1: 1,
    };
  }
}
</script>

<style lang="scss"></style>
