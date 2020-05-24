<template>
  <v-container fluid class="bg">
    <v-row no gutters class="hidden-sm-and-down">
      <v-col cols="12" sm="1">
        <a style="color: gray;" @click="changePage('Home')"
          ><v-icon class="mr-1" style="float: left;">mdi-arrow-left</v-icon>
          <h4>{{ goBack }}</h4></a
        ></v-col
      >
      <v-col></v-col>
      <v-col cols="12" sm="1"><Translate /></v-col>
    </v-row>

    <v-row>
      <v-col class="hidden-sm-and-down"> </v-col>

      <v-card class="mx-auto" outlined width="800">
        <v-col justify="center" align="center">
          <v-row>
            <v-col>
              <a style="color: gray;" @click="changePage('Home')"
                ><v-icon class="hidden-md-and-up" style="float: left;"
                  >mdi-arrow-left</v-icon
                >
              </a>
            </v-col>
            <v-col>
              <h3>{{ titlePage }}</h3>
            </v-col>
            <v-col>
              <v-row class="hidden-md-and-up">
                <v-col cols="12" sm="1">
                  <Translate />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-form ref="form">
            <v-row>
              <v-col>
                <v-text-field
                  ref="name"
                  v-model="user.firstName"
                  :rules="[rules.required]"
                  :label="firstName"
                  :placeholder="firstName"
                  required
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  ref="name"
                  v-model="user.secondName"
                  :label="secondName"
                  :placeholder="secondNameP"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                  ref="name"
                  v-model="user.lastName"
                  :rules="[rules.required]"
                  :label="lastName"
                  :placeholder="lastName"
                  required
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  ref="name"
                  v-model="user.secondLastName"
                  :label="secondLastName"
                  :placeholder="secondLastNameP"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                  ref="name"
                  v-model="user.identification"
                  :rules="[rules.required]"
                  :label="identification"
                  :placeholder="identification"
                  required
                ></v-text-field>
              </v-col>
              <v-col>
                <v-icon class="mt-5 mr-2" style="float: left;"
                  >mdi-calendar</v-icon
                >
                <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="user.birthday"
                      :label="birthday"
                      :hint="dateHint"
                      persistent-hint
                      @blur="date = parseDate(dateFormatted)"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    @input="menu1 = false"
                    max="2002-06-01"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                  ref="name"
                  v-model="user.email"
                  :rules="rules.emailRules"
                  :label="email"
                  :placeholder="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  ref="name"
                  v-model="user.phoneNumber"
                  :rules="rules.phoneRules"
                  :label="phoneNumber"
                  :placeholder="phoneNumber"
                  type="number"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                  ref="name"
                  v-model="user.password"
                  :rules="[rules.required]"
                  :label="password"
                  :placeholder="password"
                  required
                  type="password"
                  name="input-10-2"
                  class="input-group--focused"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  ref="name"
                  v-model="password2"
                  :rules="[rules.required]"
                  :label="passwordc"
                  :placeholder="passwordc"
                  required
                  type="password"
                  name="input-10-2"
                  class="input-group--focused"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-select
                      :items="items"
                      v-on="on"
                      :label="languageInput"
                      v-model="nameLanguage"
                    ></v-select>
                  </template>
                  <span>{{ languageTooltip }}</span>
                </v-tooltip>
              </v-col>
              <v-col cols="12" sm="6">
                <v-row align="center" justify="center">
                  <v-col cols="12" sm="10" align="center"
                    ><v-checkbox
                      v-model="ex4"
                      :label="termCondition"
                      color="success"
                      value="success"
                      hide-details
                      :rules="[rules.required]"
                      required
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <v-row>
              <v-col> </v-col>
              <v-col cols="12" sm="6">
                <v-btn rounded color="#a9ff4d" dark @click="searchRoute()">{{
                  buttonSignup
                }}</v-btn>
              </v-col>
              <v-col> </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-card>
      <v-col class="hidden-sm-and-down"> </v-col>
    </v-row>

    <v-row>
      <v-col> </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" top:timeout="timeout" color="success">
      {{ snack1 }}
      <v-btn dark text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbarError" top:timeout="timeout" color="error">
      {{ snack2 }}
      <v-btn dark text @click="snackbarError = false">Close</v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbarPassword" top:timeout="timeout" color="error">
      {{ snack3 }}
      <v-btn dark text @click="snackbarPassword = false">Close</v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbarError2" top:timeout="timeout" color="error">
      {{ snackDatabase }}
      <v-btn dark text @click="snackbarError2 = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import Translate from "../components/Translate.vue";

@Component({ components: { Translate } })
export default class SignUp extends Vue {
  $store: any;
  $router: any;

  user: {
    identification: string;
    firstName: string;
    secondName: string;
    lastName: string;
    secondLastName: string;
    birthday: string;
    email: string;
    password: string;
    phoneNumber: string;
    charge: string;
    idLanguage: number;
    idStatus: number;
  } = {
    identification: "",
    firstName: "",
    secondName: "",
    lastName: "",
    secondLastName: "",
    birthday: "",
    email: "",
    password: "",
    phoneNumber: "",
    charge: "Client",
    idLanguage: 1,
    idStatus: 4,
  };

  identification = "Identitificacion";
  firstName = "First name";
  secondName = "Second name";
  secondNameP = "Second name (Optional)";
  lastName = "Last name";
  secondLastName = "Second last name";
  secondLastNameP = "Second last name (Optional)";
  birthday = "Birthday";
  email = "E-mail";
  password = "Password";
  passwordc = "Confirm password";
  phoneNumber = "Phone number";
  languageInput = "Language";
  goBack = "Go back";
  buttonSignup = "Sign up";
  termCondition = "Accept the terms and conditions";
  titlePage = "Sign up";
  dateHint = "MM/DD/YYYY format. You need to be above 18 to register";
  snack1 = "User registered successfully";
  snack2 = "User registration error. Try again.";
  snack3 = "Please confirm password correctly";
  languageTooltip = "This is your notification's and page default language";
  snackDatabase =
    "This email is already in use or date format is invalid. Please verify those fields";

  password2 = "";
  items: Array<string> = ["English", "Español"];
  nameLanguage = "";
  snackbar = false;
  snackbarError = false;
  snackbarError2 = false;
  snackbarPassword = false;
  timeout = 7000;

  searchRoute() {
    if (this.nameLanguage == "English") {
      this.user.idLanguage = 1;
    } else if (this.nameLanguage == "Español") {
      this.user.idLanguage = 2;
    }
    if (this.$refs.form.validate() && this.password2 === this.user.password) {
      this.$store
        .dispatch("user/createUserRoute", this.user)
        .then(() => {
          this.snackbar = true;
          setTimeout(() => {
            this.changePage("Login");
          }, 1000);
        })
        .catch(() => {
          this.snackbarError2 = true;
        });
    } else if (this.password2 !== this.user.password) {
      this.snackbarPassword = true;
    } else {
      this.snackbarError = true;
    }
  }

  changePage(link: string) {
    this.$router.push({ name: link });
  }

  rules: {} = {
    required: (value: string) =>
      (!!value && value !== "" && value !== undefined) || "Required",
    passwordRules: [(v: string) => !!v || "Password is required"],
    emailRules: [
      (v: string) => !!v || "E-mail is required",
      (v: string) => /.+@.+\..+/.test(v) || "E-mail is required",
    ],
    phoneRules: [
      (v: number) =>
        !!v || "Required. Please only use numbers and avoid spaces.",
    ],
  };

  $refs!: {
    form: any;
  };

  date: string = new Date().toISOString().substr(0, 10);
  menu1 = false;

  @Watch("date")
  dateChanged() {
    this.user.birthday = this.formatDate(this.date);
  }

  public formatDate(date: string): string {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    return `${month}/${day}/${year}`;
  }
  public parseDate(date: string): string {
    if (!date) return "";

    const [month, day, year] = date.split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
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
          return term.context == "signup" || term.context == "general";
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "signupFirstName") {
            this.firstName = term.translation;
          } else if (term.name == "signupSecondName") {
            this.secondName = term.translation;
          } else if (term.name == "signupSecondNameP") {
            this.secondNameP = term.translation;
          } else if (term.name == "signupLastName") {
            this.lastName = term.translation;
          } else if (term.name == "signupSecondLastName") {
            this.secondLastName = term.translation;
          } else if (term.name == "signupSecondLastNameP") {
            this.secondLastNameP = term.translation;
          } else if (term.name == "signupIdentification") {
            this.identification = term.translation;
          } else if (term.name == "signupBirthday") {
            this.birthday = term.translation;
          } else if (term.name == "signupEmail") {
            this.email = term.translation;
          } else if (term.name == "signupPassword") {
            this.password = term.translation;
          } else if (term.name == "signupPasswordc") {
            this.passwordc = term.translation;
          } else if (term.name == "signupPhoneNumber") {
            this.phoneNumber = term.translation;
          } else if (term.name == "signupLanguageInput") {
            this.languageInput = term.translation;
          } else if (term.name == "signupGoBack") {
            this.goBack = term.translation;
          } else if (term.name == "signupButton") {
            this.buttonSignup = term.translation;
          } else if (term.name == "signupTermCondition") {
            this.termCondition = term.translation;
          } else if (term.name == "signupTitlePage") {
            this.titlePage = term.translation;
          } else if (term.name == "signupDateHint") {
            this.dateHint = term.translation;
          } else if (term.name == "signupSnack1") {
            this.snack1 = term.translation;
          } else if (term.name == "signupSnack2") {
            this.snack2 = term.translation;
          } else if (term.name == "signupSnack3") {
            this.snack3 = term.translation;
          } else if (term.name == "generalGoBack") {
            this.goBack = term.translation;
          } else if (term.name == "signupSnack4") {
            this.snackDatabase = term.translation;
          } else if (term.name == "generalTooltipLanguage") {
            this.languageTooltip = term.translation;
          }
        }
      );
  }
}
</script>

<style scoped>
.bg {
  background-image: url("../assets/bg-login.jpg");
  min-height: 100%;
  background-size: cover;
}
.clickable {
  cursor: pointer;
}
</style>
