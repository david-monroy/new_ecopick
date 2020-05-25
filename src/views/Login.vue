<template>
  <v-container fluid class="bg">
    <v-row no gutters class="hidden-sm-and-down">
      <v-col cols="12" sm="1"
        ><a style="color: gray;" @click="changePage('Home')">
          <v-icon class="mr-1" style="float: left;">mdi-arrow-left</v-icon>
          <h4>{{ goBack }}</h4></a
        ></v-col
      >
      <v-col></v-col>
      <v-col cols="12" sm="1"><Translate /></v-col>
    </v-row>

    <v-row>
      <v-col class="hidden-sm-and-down"> </v-col>

      <v-card class="mx-auto" outlined width="400">
        <v-col justify="center" align="center">
          <v-row>
            <v-col>
              <a style="color: gray;" @click="changePage('Home')"
                ><v-icon class="hidden-md-and-up" style="float: left;"
                  >mdi-arrow-left</v-icon
                ></a
              >
            </v-col>
            <v-col>
              <v-img
                class="mx-2 clickable"
                src="../assets/page-logo.png"
                max-height="40"
                max-width="150"
              ></v-img>
            </v-col>
            <v-col> </v-col>
          </v-row>

          <v-row>
            <v-col> </v-col>
            <v-col>
              <h3>{{ titlePage }}</h3>
            </v-col>
            <v-col> </v-col>
          </v-row>
          <v-form ref="form">
            <v-row>
              <v-col>
                <v-text-field
                  prepend-icon="mdi-account"
                  v-model="user.email"
                  :rules="rules.emailRules"
                  :label="email"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                  prepend-icon="mdi-lock"
                  v-model="user.password"
                  :rules="rules.passwordRules"
                  name="input-10-2"
                  :label="password"
                  type="password"
                  class="input-group--focused"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col> </v-col>
              <v-col>
                <h4>
                  <a
                    href="#"
                    style="color: #454545;"
                    @click="changePage('RecoverPassword')"
                    >{{ forgotPassword }}</a
                  >
                </h4>
              </v-col>
            </v-row>

            <v-row>
              <v-col> </v-col>
              <v-col>
                <v-btn rounded color="#a9ff4d" dark @click="searchRoute()">{{
                  buttonLogin
                }}</v-btn>
              </v-col>
              <v-col> </v-col>
            </v-row>
          </v-form>
          <v-row>
            <v-col> </v-col>
            <v-col>
              <h5>{{ loginOr }}</h5>
            </v-col>
            <v-col> </v-col>
          </v-row>

          <v-row>
            <v-col> </v-col>
            <v-col>
              <v-btn rounded color="red accent-4" dark @click="FederatedSignUpGoogle()"
                ><v-icon class="mr-1" p-0>mdi-google</v-icon>Google</v-btn
              >
            </v-col>
            <v-col> </v-col>
          </v-row>

          <v-row>
            <v-col> </v-col>
            <v-col>
              <v-btn rounded color="indigo darken-2" dark @click="FederatedSignUpFacebook()"
                ><v-icon class="mr-1" p-0>mdi-facebook</v-icon>Facebook</v-btn
              >
            </v-col>
            <v-col> </v-col>
          </v-row>

          <v-row>
            <v-col> </v-col>
            <v-col cols="12" sm="8">
              <h5 ma-0>
                {{ noAccount
                }}<a
                  href="#"
                  style="color: #454545;"
                  @click="changePage('SignUp')"
                  >{{ loginRegister }}</a
                >
              </h5>
            </v-col>
            <v-col>
              <v-row class="hidden-md-and-up">
                <v-col cols="12" sm="2">
                  <Translate />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-card>
      <v-col class="hidden-sm-and-down"> </v-col>
    </v-row>

    <v-row>
      <v-col> </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" top:timeout="timeout" color="success">
      {{ snack1 }}
      <v-btn dark text @click="snackbar = false">{{ close }}</v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbarError" top:timeout="timeout" color="error">
      {{ snack2 }}
      <v-btn dark text @click="snackbarError = false">{{ close }}</v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbarError2" top:timeout="timeout" color="error">
      {{ snack3 }}
      <v-btn dark text @click="snackbarError2 = false">{{ close }}</v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbarError3" top:timeout="timeout" color="error">
      {{ snack4 }}
      <v-btn dark text @click="snackbarError3 = false">{{ close }}</v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbarGoogle" top:timeout="timeout" color="error">
      {{ snack5 }}
      <v-btn dark text @click="snackbarGoogle = false">{{ close }}</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import Translate from "../components/Translate.vue";

@Component({ components: { Translate } })
export default class Login extends Vue {
  $store: any;
  $router: any;

  user: { email: string; password: string } = {
    email: "",
    password: "",
  };

  titlePage = "Login";
  email = "E-mail";
  password = "Password";
  goBack = "Go back";
  forgotPassword = "Forgot password?";
  noAccount = "Don't have an account?";
  loginRegister = " Sign up!";
  loginOr = "Or login with";
  buttonLogin = "Login";
  snack1 = "Welcome again!";
  snack2 = "Please ingress your email and password";
  snack3 = "Invalid email or password. Try again.";
  snack4 = "This user doesn't have permission to access or it's disabled.";
  snack5 = "Prueba";
  close = "Close";

  snackbar = false;
  snackbarError = false;
  snackbarError2 = false;
  snackbarError3 = false;
  snackbarGoogle = false;
  timeout = 7000;

  $refs!: {
    form: any;
  };

  searchRoute() {
    if (this.$refs.form.validate()) {
      this.$store
        .dispatch("user/validateUserRoute", this.user)
        .then((status: any) => {
          //this.cosasdelaBD = this.$store.state.example.route;
          if (status == 200) {
            this.snackbar = true;
            setTimeout(() => {
              this.changePage("Home");
            }, 1000);
          } else if (status == 204) {
            this.snackbarError3 = true;
          }
        })
        .catch(() => {
          this.snackbarError2 = true;
        });
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
  };

  //-------------------------------------------------

    errors: string[] = [];
    showErrors(errors: any) {
    this.errors = errors;
    this.snackbarError = true;
    }

   get getStatus() {
    return this.$store.getters["user/getLoginStatus"];
  }

  FederatedSignUpGoogle() {
    this.errors.splice(0);
    if (this.errors.length == 0) {
      this.$store
        .dispatch("user/federatedSignUpGoogle", { provider: "google" })
        .then(() => {
          if (this.getStatus.registered == false) {
            //this.errors.push("This email is already in use");
            //this.showErrors(this.errors);
            this.snackbar = true;
            setTimeout(() => {
              this.changePage("Home");
            }, 1000);
          } else {
            //this.changePage("Profile");
            this.snackbarGoogle = true;
            this.$router.push({ name: 'Profile', props: {
              popUpGoogle: true
            }  });
          }
        });
    }
  }

   FederatedSignUpFacebook() {
    this.errors.splice(0);
    if (this.errors.length == 0) {
      this.$store
        .dispatch("user/federatedSignUpGoogle", { provider: "facebook" })
        .then(() => {
          if (this.getStatus.registered == false) {
            this.errors.push("This email is already in use");
            this.showErrors(this.errors);
          } else {
            this.$router.push("/");
          }
        });
    }
  }

  //-------------------------------------------------

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
          return term.context == "login" || term.context == "general";
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "loginEmail") {
            this.email = term.translation;
          } else if (term.name == "loginPassword") {
            this.password = term.translation;
          } else if (term.name == "loginTitle") {
            this.titlePage = term.translation;
          } else if (term.name == "loginForgotPassword") {
            this.forgotPassword = term.translation;
          } else if (term.name == "loginNoAccount") {
            this.noAccount = term.translation;
          } else if (term.name == "loginRegister") {
            this.loginRegister = term.translation;
          } else if (term.name == "loginOr") {
            this.loginOr = term.translation;
          } else if (term.name == "loginSnack1") {
            this.snack1 = term.translation;
          } else if (term.name == "loginSnack2") {
            this.snack2 = term.translation;
          } else if (term.name == "loginSnack3") {
            this.snack3 = term.translation;
          } else if (term.name == "loginSnack4") {
            this.snack4 = term.translation;
          } else if (term.name == "generalClose") {
            this.close = term.translation;
          } else if (term.name == "generalGoBack") {
            this.goBack = term.translation;
          } else if (term.name == "loginButton") {
            this.buttonLogin = term.translation;
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
</style>
