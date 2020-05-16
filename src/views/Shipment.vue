<template>
  <v-container fluid class="teal">
    <v-row no-gutters>
      <v-col class="hidden-sm-and-down" cols="3"></v-col>
      <v-col cols="6" align="center">
        <div class="ma-4">
          <v-stepper class="light-green accent-1">
            <v-stepper-header>
              <v-stepper-step step="1" color="teal">{{ Step1 }}</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="2">{{ Step2 }}</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3">{{ Step3 }}</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="4">{{ Step4 }}</v-stepper-step>
            </v-stepper-header>
          </v-stepper>
        </div>

        <v-card class="d-inline-block mx-auto">
          <!--Inicio -->
            <v-container fluid>
              <!--Título -->
              <v-row class="align-center">
                <v-col cols="3"></v-col>
                <v-col class="align-center" justify="center">
                  <v-text class="display-2">
                    {{ NewShipmentTitle }}
                  </v-text>
                </v-col>
                <v-col cols="3"></v-col>
              </v-row>
              <!--Titulo 2 -->
              <v-row>
                <v-col>
                  <v-text
                    class="body-1 font-weight-black align-center"
                    justify="center"
                    >{{ OriginTitle }}</v-text
                  >
                </v-col>
              </v-row>
              <!--Form 1-->
              <form>
                <!--Usuario-->
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      class="pa-0 ma-0"
                      v-model="UserName"
                      :error-messages="UserNameErrors"
                      label="UserName"
                      required
                      @input="$v.UserName.$touch()"
                      @blur="$v.UserName.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      class="pa-0 ma-0"
                      v-model="OrPhone"
                      :error-messages="OrPhoneErrors"
                      label="Phone"
                      required
                      @input="$v.OrPhone.$touch()"
                      @blur="$v.OrPhone.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      class="pa-0 ma-0"
                      v-model="OrEmail"
                      :error-messages="OrEmailErrors"
                      label="Email (optional)"
                      @input="$v.OrEmail.$touch()"
                      @blur="$v.OrEmail.$touch()"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <!--Direccion 1-->
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      class="pa-0 ma-0"
                      v-model="OrCountry"
                      :error-messages="OrCountryErrors"
                      label="Country"
                      required
                      @input="$v.OrCountry.$touch()"
                      @blur="$v.OrCountry.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      class="pa-0 ma-0"
                      v-model="OrZipCode"
                      :error-messages="OrZipCodeErrors"
                      label="Zip Code"
                      required
                      @input="$v.OrZipCode.$touch()"
                      @blur="$v.OrZipCode.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      class="pa-0 ma-0"
                      v-model="OrCity"
                      :error-messages="OrCityErrors"
                      label="City"
                      required
                      @input="$v.OrCity.$touch()"
                      @blur="$v.OrCity.$touch()"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <!--Direccion 2-->
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      class="pa-0 ma-0"
                      v-model="OrDirection"
                      :error-messages="OrDirectionErrors"
                      label="Direction"
                      required
                      @input="$v.OrDirection.$touch()"
                      @blur="$v.OrDirection.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      class="pa-0 ma-0"
                      v-model="OrDirection2"
                      :error-messages="OrDirection2Errors"
                      label="Direction (cont)"
                      required
                      @input="$v.OrDirection2.$touch()"
                      @blur="$v.OrDirection2.$touch()"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <!--Titulo 3 -->
                <v-row>
                  <v-col>
                    <v-text
                      class="body-1 font-weight-black align-center"
                      justify="center"
                      >{{ DestinationTitle }}</v-text
                    >
                  </v-col>
                </v-row>
                <!--Receptor -->
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      class="pa-0 ma-0"
                      v-model="ReceiverName"
                      :error-messages="ReceiverNameErrors"
                      label="ReceiverName"
                      required
                      @input="$v.ReceiverName.$touch()"
                      @blur="$v.ReceiverName.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      class="pa-0 ma-0"
                      v-model="OrPhone"
                      :error-messages="OrPhoneErrors"
                      label="Phone"
                      required
                      @input="$v.OrPhone.$touch()"
                      @blur="$v.OrPhone.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      class="pa-0 ma-0"
                      v-model="OrEmail"
                      :error-messages="OrEmailErrors"
                      label="Email (optional)"
                      @input="$v.OrEmail.$touch()"
                      @blur="$v.OrEmail.$touch()"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <!--Direccion 3 -->
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      class="pa-0 ma-0"
                      v-model="OrCountry"
                      :error-messages="OrCountryErrors"
                      label="Country"
                      required
                      @input="$v.OrCountry.$touch()"
                      @blur="$v.OrCountry.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      class="pa-0 ma-0"
                      v-model="OrZipCode"
                      :error-messages="OrZipCodeErrors"
                      label="Zip Code"
                      required
                      @input="$v.OrZipCode.$touch()"
                      @blur="$v.OrZipCode.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      class="pa-0 ma-0"
                      v-model="OrCity"
                      :error-messages="OrCityErrors"
                      label="City"
                      required
                      @input="$v.OrCity.$touch()"
                      @blur="$v.OrCity.$touch()"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <!--Direccion 4 -->
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      class="pa-0 ma-0"
                      v-model="OrDirection"
                      :error-messages="OrDirectionErrors"
                      label="Direction"
                      required
                      @input="$v.OrDirection.$touch()"
                      @blur="$v.OrDirection.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      class="pa-0 ma-0"
                      v-model="OrDirection2"
                      :error-messages="OrDirection2Errors"
                      label="Direction (cont)"
                      required
                      @input="$v.OrDirection2.$touch()"
                      @blur="$v.OrDirection2.$touch()"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </form>
            </v-container>
        </v-card>
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
  OriginTitle = "Origin";
  DestinationTitle = "Destination";
  Step1 = "Origin/Destination";
  Step2 = "Packages";
  Step3 = "Costs";
  Step4 = "Confirmation";

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
}
</script>

<style lang="scss"></style>
