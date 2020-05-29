<template>
  <v-container fluid class="bg">
    <v-row>
      <v-col class="hidden-sm-and-down"></v-col>
      <v-card class="mx-auto px-8" outlined width="800">
        <v-col justify="center" align="center">
          <v-row v-if="!edit">
            <v-col> </v-col>
            <v-col>
              <v-avatar class="profile" color="teal lighten-2" size="100">
                <v-img v-if="hasImage" :src="userInfo.photo"></v-img>
                <v-icon v-else dark x-large>mdi-account-circle</v-icon>
              </v-avatar>
            </v-col>
            <v-col>
              <v-col class="d-flex justify-end align-center">
                <v-icon
                  class="clickable text-right edit-btn pa-3"
                  color="teal"
                  @click="edit = true"
                  >mdi-pencil</v-icon
                >
              </v-col>
            </v-col>
          </v-row>
          <v-form ref="form">
            <v-row v-if="!edit">
              <v-col>
                <v-text-field
                  ref="name"
                  :value="userInfo.firstname"
                  :label="firstName"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  ref="name"
                  :value="userInfo.secondname"
                  :label="secondName"
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row v-if="!edit">
              <v-col>
                <v-text-field
                  ref="name"
                  :value="userInfo.lastname"
                  :label="lastName"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  ref="name"
                  :value="userInfo.secondlastname"
                  :label="secondLastName"
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  ref="name"
                  v-model="userInfo.identification"
                  :label="identification"
                  :readonly="!edit"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-icon class="mt-5 mr-2" style="float: left;"
                  >mdi-calendar</v-icon
                >
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :value="formatDate(userInfo.birthday)"
                      :label="birthday"
                      :readonly="!edit"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-if="edit"
                    v-model="userInfo.birthday"
                    no-title
                    @input="menu = false"
                    max="2002-06-01"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  ref="name"
                  v-model="userInfo.email"
                  :rules="rules.emailRules"
                  :label="email"
                  :placeholder="email"
                  :readonly="!edit"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  ref="name"
                  v-model="userInfo.phonenumber"
                  :rules="[rules.required]"
                  :label="phoneNumber"
                  :placeholder="phoneNumber"
                  :readonly="!edit"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="hidden-sm-and-down"> </v-col>
              <v-col>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-select
                      v-on="on"
                      :items="languages"
                      item-text="name"
                      item-value="value"
                      :label="languageInput"
                      v-model="language"
                      :readonly="!edit"
                    ></v-select>
                  </template>
                  <span>{{ languageTooltip }}</span>
                </v-tooltip>
              </v-col>
              <v-col class="hidden-sm-and-down"> </v-col>
            </v-row>
            <v-row>
              <v-col v-if="edit && !updatePassword"
                ><v-btn @click="updatePassword = true" color="teal" outlined
                  ><v-icon class="mr-2">mdi-lock</v-icon
                  >{{ updatePasswordText }}</v-btn
                ></v-col
              >
            </v-row>
            <v-row v-if="updatePassword">
              <v-col cols="5">
                <v-text-field
                  ref="name"
                  v-model="password1"
                  :rules="[rules.required]"
                  :label="password"
                  :placeholder="password"
                  required
                  type="password"
                  name="input-10-2"
                  class="input-group--focused"
                ></v-text-field>
              </v-col>
              <v-col cols="5">
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
              <v-col cols="2"
                ><v-btn color="error" icon @click="updatePassword = false"
                  ><v-icon>mdi-close</v-icon></v-btn
                ></v-col
              >
            </v-row>
            <v-row v-if="edit">
              <v-col></v-col>
              <v-col class="d-flex justify-end">
                <v-btn @click="cancel()" color="grey darken-1" outlined>{{
                  cancelText
                }}</v-btn>
              </v-col>
              <v-col class="d-flex justify-start">
                <v-btn @click="update()" color="teal" dark>{{
                  saveText
                }}</v-btn>
              </v-col>
              <v-col></v-col>
            </v-row>
            <v-row v-if="!edit">
              <v-col class="d-flex justify-end">
                <v-dialog v-model="dialog" persistent max-width="600">
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" color="error" small outlined>{{
                      deleteText
                    }}</v-btn>
                  </template>
                  <v-card>
                    <v-card-title
                      class="headline font-weight-light red lighten-1 white--text"
                      >{{ warningTitle }}</v-card-title
                    >
                    <v-card-text class="subtitle-1 mt-3">{{
                      warningBody
                    }}</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="grey darken-1"
                        text
                        @click="dialog = false"
                        >{{ cancelText }}</v-btn
                      >
                      <v-btn color="red" text @click="disable()">{{
                        deleteText
                      }}</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-card>
      <v-col class="hidden-sm-and-down"> </v-col>
    </v-row>
    <v-snackbar v-model="snackbarSuccess" top:timeout="timeout" color="success">
      {{ snackSuccess }}
      <v-btn dark text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbarError" top:timeout="timeout" color="error">
      {{ snackError }}
      <v-btn dark text @click="snackbarError = false">Close</v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbarPassword" top:timeout="timeout" color="error">
      {{ snackPassword }}
      <v-btn dark text @click="snackbarPassword = false">Close</v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbarDatabase" top:timeout="timeout" color="error">
      {{ snackDatabase }}
      <v-btn dark text @click="snackbarDatabase = false">Close</v-btn>
    </v-snackbar>
    <v-snackbar v-model="federatedPopUp" top:timeout="timeout" color="success">
      {{ snackPopUp }}
      <v-btn dark text @click="federatedPopUp = false">{{ close }}</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";
import { mapState } from "vuex";
import Translate from "../components/Translate.vue";
import moment from "moment";

@Component({
  components: {
    Translate,
  },
  computed: {
    ...mapState("user", { userInfo: "userData" }),
  },
})
export default class Profile extends Vue {
  $store: any;
  $router: any;
  $refs!: {
    form: any;
  };

  @Prop({ default: false }) federatedPopUp!: boolean;

  userInfo!: {
    photo: string | null;
    identification: string;
    email: string;
    password: string;
    birthday: string;
    phonenumber: string | null;
    language: number;
  };
  menu = false;
  edit = false;
  updatePassword = false;
  dialog = false;
  hasImage = false;
  userPhoto!: Blob;
  image = "";
  languages: { name: string; value: string }[] = [
    { name: "English", value: "EN" },
    { name: "Español", value: "ES" },
  ];
  language = "EN";
  timeout = 7000;
  IDuser = localStorage.getItem("ID");
  password1 = "";
  password2 = "";

  identification = "Identitificacion";
  firstName = "First name";
  secondName = "Second name";
  lastName = "Last name";
  secondLastName = "Second last name";
  birthday = "Birthday";
  email = "E-mail";
  password = "Password";
  passwordc = "Confirm password";
  phoneNumber = "Phone number";
  languageInput = "Language";
  languageTooltip = "This is your notification's and page default language";
  snackSuccess = "User updated successfully";
  snackError = "User update error. Try again";
  snackPassword = "Please confirm password correctly";
  snackDatabase = "This email is already in use. Please verify";
  snackPopUp =
    "Please click on the pencil icon to complete your information. We are going to need it to take your shipping orders";
  cancelText = "Cancel";
  saveText = "Save";
  updatePasswordText = "Update Password";
  deleteText = "Delete";
  warningTitle = "";
  warningBody = "";
  snackbarSuccess = false;
  snackbarError = false;
  snackbarDatabase = false;
  snackbarPassword = false;

  disable() {
    this.$store
      .dispatch("user/disableUser", {
        id: localStorage.getItem("ID"),
        status: "Disabled",
      })
      .then(() => {
        localStorage.clear();
        location.reload();
      })
      .catch(() => {
        this.snackbarError = true;
      });
  }

  update() {
    if (this.updatePassword && this.password2 !== this.password1) {
      this.snackbarPassword = true;
    } else {
      if (this.$refs.form.validate()) {
        const user = {
          id: localStorage.getItem("ID"),
          identification: this.userInfo.identification,
          birthday: this.userInfo.birthday,
          photo: this.userInfo.photo,
          email: this.userInfo.email,
          password: "",
          phone: this.userInfo.phonenumber,
          language: this.language,
        };
        if (this.updatePassword && this.password2 === this.password1) {
          user.password = this.password1;
        } else if (!this.updatePassword) {
          user.password = this.userInfo.password;
        }
        this.$store
          .dispatch("user/updateUser", user)
          .then(() => {
            this.snackbarSuccess = true;
            this.edit = false;
            this.updatePassword = false;
            if (user.language == "EN") {
              localStorage.setItem("Language", "1");
              this.$store.dispatch("translate/translate", { lang: "en-us" });
            } else if (user.language == "ES") {
              localStorage.setItem("Language", "2");
              this.$store.dispatch("translate/translate", { lang: "es-ve" });
            }
            if (this.userInfo.photo !== null) {
              this.hasImage = true;
            }
          })
          .catch(() => (this.snackbarDatabase = true));
      }
    }
  }

  cancel() {
    location.reload();
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

  formatDate(date: string) {
    return moment(date).format("YYYY-MM-DD");
  }

  getUserData(userId: number) {
    this.$store.dispatch("user/getUserData", userId).then(() => {
      if (this.userInfo.language == 1) {
        this.language = "EN";
      } else if (this.userInfo.language == 2) {
        this.language = "ES";
      }
      if (this.userInfo.photo !== null) {
        this.hasImage = true;
      }
    });
  }

  created() {
    this.getUserData(parseInt(this.IDuser!));
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
            term.context == "signup" ||
            term.context == "general" ||
            term.context == "profile"
          );
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "signupFirstName") {
            this.firstName = term.translation;
          } else if (term.name == "signupSecondName") {
            this.secondName = term.translation;
          } else if (term.name == "signupLastName") {
            this.lastName = term.translation;
          } else if (term.name == "signupSecondLastName") {
            this.secondLastName = term.translation;
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
          } else if (term.name == "generalTooltipLanguage") {
            this.languageTooltip = term.translation;
          } else if (term.name == "profileSnack1") {
            this.snackSuccess = term.translation;
          } else if (term.name == "profileSnack2") {
            this.snackError = term.translation;
          } else if (term.name == "signupSnack3") {
            this.snackPassword = term.translation;
          } else if (term.name == "profileSnack3") {
            this.snackDatabase = term.translation;
          } else if (term.name == "generalCancelbutton") {
            this.cancelText = term.translation;
          } else if (term.name == "generalSaveButton") {
            this.saveText = term.translation;
          } else if (term.name == "profileUpdatePassword") {
            this.updatePasswordText = term.translation;
          } else if (term.name == "profileDelete") {
            this.deleteText = term.translation;
          } else if (term.name == "warningTitle") {
            this.warningTitle = term.translation;
          } else if (term.name == "warningBody") {
            this.warningBody = term.translation;
          } else if (term.name == "profileSnackPopUp") {
            this.snackPopUp = term.translation;
          }
        }
      );
  }
}
</script>

<style scoped>
.bg {
  min-height: 100%;
  background-color: #f7f7f7;
  background-size: cover;
}
.clickable {
  cursor: pointer;
}
.edit-btn {
  border-radius: 50%;
}
.edit-btn:hover {
  color: white !important;
  background-color: teal;
}
</style>
