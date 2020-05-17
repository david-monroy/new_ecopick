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

            <v-stepper-step color="teal" step="3">{{ Step3 }}</v-stepper-step>

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
                  <form>
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
                    <!--Direction 1-->
                    <v-row>
                      <v-col cols="6">
                        <v-text-field
                          class="pa-0 ma-0"
                          solo
                          dense
                          v-model="OrZipCode"
                          :error-messages="OrZipCodeErrors"
                          :label="ZipCodeLabel"
                          type="number"
                          counter="5"
                          required
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
                    <!--Direction 2-->
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
                  </form>
                </v-container>
              </v-card>

              <v-btn color="primary" @click="e1 = 2">Continue</v-btn>

              <v-btn text @click="changePage('Home')">Cancel</v-btn>
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
                          :error-messages="WeightErrors"
                          :label="WeightLabel"
                          @input="$v.Weight.$touch()"
                          @blur="$v.Weight.$touch()"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!--Costs-->
                    <v-row>
                      <v-col cols="1"></v-col>
                      <v-col cols="6">
                        <v-select
                          v-model="Characteristic"
                          solo
                          dense
                          :items="items"
                          :rules="[(v) => !!v || 'Item is required']"
                          :label="CharacteristicLabel"
                          required
                        ></v-select>
                      </v-col>
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
                    </v-row>
                    <v-col cols="1"></v-col>
                  </form>
                </v-container>
              </v-card>

              <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

              <v-btn text @click="changePage('Home')">Cancel</v-btn>
            </v-stepper-content>

            <!--Costs-->
            <v-stepper-content step="3" class="teal">
              <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

              <v-btn color="primary" @click="e1 = 4">Continue</v-btn>

              <v-btn text @click="changePage('Home')">Cancel</v-btn>
            </v-stepper-content>

            <!--Confirmation-->
            <v-stepper-content step="4" class="teal">
              <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

              <v-btn color="primary" @click="e1 = 1">Continue</v-btn>

              <v-btn text @click="changePage('Home')">Cancel</v-btn>
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
  EmailLabel = "Email (optional)";
  ZipCodeLabel = "Zip Code";
  UserName = localStorage.getItem("Name");
  CityLabel = "City";
  DirectionLabel1 = "Address Line";
  DirectionLabel2 = "Address Line (cont)";
  ReceiverNameLabel = "Name";
  ReceiverLastNameLabel = "Last Name";

  EmailValidation = "Email is incorrect";

  Step2 = "Packages";
  WidthLabel = "Width";
  HeightLabel = "Height";
  LenghtLabel = "Lenght";
  WeightLabel = "Weight";
  CharacteristicLabel = "Characteristic";
  PackageTotal = "20$";
  PackageCharacteristics = "";

  Step3 = "Costs";
  Step4 = "Confirmation";

  rules: {} = {
    required: (value: string) =>
      (!!value && value !== "" && value !== undefined) || "Required",
    emailRules: [
      (v: string) => !!v || this.EmailValidation,
      (v: string) => /.+@.+\..+/.test(v) || this.EmailValidation,
    ],
  };

  changePage(link: string) {
    this.$router.push({ name: link });
  }

  beforemount() {
    this.$store.dispatch("NewShipment/getPackagesCharacteristic").then(() => {
      this.PackageCharacteristics = this.$store.state.NewShipment.characteristics;
    });
  }

  /*mounted() {
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
          return term.context == "general" || term.context == "home";
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "generalSearch") {
            this.search = term.translation;
          } else if (term.name == "homeBanner") {
            this.banner = term.translation;
          } else if (term.name == "homeNoticeTitle") {
            this.noticeTitle = term.translation;
          } else if (term.name == "homeNoticeText") {
            this.noticeText = term.translation;
          }
        }
      );
  }*/
  beforeMo;

  data() {
    return {
      e1: 1,
    };
  }
}
</script>

<style lang="scss"></style>
