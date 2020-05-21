<template>
  <v-container fluid class="bg" >

        <v-row no gutters class="hidden-sm-and-down"> 
            <v-col > 
            </v-col> 
            <v-col ></v-col>
             <v-col ></v-col>
             

        </v-row> 
        
        <v-row >

        <v-col class="hidden-sm-and-down"> </v-col> 

            <v-card
            class="mx-auto"
            outlined 
            width="800"
        
            >
                <v-col justify="center" align="center"> 
                    
                    <v-row> 
                        <v-col >
                           <v-icon dark>mdi-pencil</v-icon>
                        </v-col>
                        <v-col> 
                             <h3>{{titlePage}}</h3>
                        </v-col> 
                        <v-col> 
                          <v-row class="hidden-md-and-up"> 
                             <v-col > 
                             </v-col> 
                          </v-row>  
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                        </v-col>  
                        <v-col > 
                             <v-avatar color="teal" size="100">
                             <v-icon dark>mdi-account-circle</v-icon>
                             </v-avatar>
                        </v-col> 
                         <v-col>  
                        </v-col>        
                    </v-row> 

                <v-form ref="form">
                    <v-row> 
                        <v-col> 
                            <v-text-field
                                ref="name"
                                :value="userInfo.firstname"
                                :rules="[rules.required]"
                                :error-messages="errorMessages"
                                :label="firstName"
                                :placeholder="firstName"
                                required
                                disabled
                            ></v-text-field>
                        </v-col>
                        <v-col> 
                            <v-text-field
                                ref="name"
                                :value="userInfo.secondname"
                                :label="secondName"
                                :placeholder="secondNameP"
                                disabled
                            ></v-text-field>
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                            <v-text-field
                                ref="name"
                                :value="userInfo.lastname"
                                :rules="[rules.required]"
                                :label="lastName"
                                :placeholder="lastName"
                                required
                                disabled
                            ></v-text-field>
                        </v-col>
                        <v-col> 
                            <v-text-field
                                ref="name"
                                :value="userInfo.secondlastname"
                                :label="secondLastName"
                                :placeholder="secondLastNameP"
                                required
                                disabled
                            ></v-text-field>
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                            <v-text-field
                                ref="name"
                                :value="userInfo.identification"
                                :rules="[rules.required]"
                                :error-messages="errorMessages"
                                :label="identification"
                                :placeholder="identification"
                                required
                                disabled
                            ></v-text-field>
                        </v-col>
                        <v-col> 
                            <v-text-field
                                ref="name"
                                :value="userInfo.phonenumber"
                                :rules="[rules.required]"
                                :error-messages="errorMessages"
                                :label="phoneNumber"
                                :placeholder="phoneNumber"
                                required
                                disabled
                            ></v-text-field>
                            
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                            <v-text-field
                                ref="name"
                                :value="userInfo.email"
                                :rules="rules.emailRules"
                                :error-messages="errorMessages"
                                :label="email"
                                :placeholder="email"
                                
                                disabled
                            ></v-text-field>
                        </v-col>
                        <v-col> 
                            <v-icon class="mt-5 mr-2" style="float: left;">mdi-calendar</v-icon>
                           
                                    <v-text-field
                                    :value="formatDate(this.userInfo.birthday)"
                                    :label="birthday"
                                    :placeholder="birthday"
                                    disabled 
                                    required
                                    ></v-text-field>
                                
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        
                        <v-col> 
                             <v-text-field
                                    ref="name"
                                    :value="nameLanguage"
                                    :label="languageInput"
                                    :placeholder="languageInput"
                                    disabled
                             ></v-text-field>
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                        
                        </v-col>  
                                <v-col cols="12" sm="6"> 
                                    <v-row>
                                        <v-col> 
                                        </v-col> 
                                        <v-col cols="12" sm="10">
                                          </v-col> 
                                    </v-row>
                                    
                                </v-col>  
                    </v-row> 
                
                     <v-row> 
                        <v-col> 
                        </v-col>  
                        <v-col > 
                        </v-col> 
                         <v-col>  
                        </v-col>        
                    </v-row> 
                </v-form>

                </v-col> 
            </v-card>
        <v-col class="hidden-sm-and-down"> </v-col>    

        </v-row> 

        <v-row> 
            <v-col> 
            </v-col>     
        </v-row> 

    </v-container>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Watch} from "vue-property-decorator";
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
    userInfo!: { firstname: string, secondname: string,
    lastname:string, secondlastname: string,phonenumber:string, identification: string,birthday:string, language: number, email:string, password: string
    };


                identification= "Identitificacion"
                firstName= "First name"
                secondName= "Second name"
                secondNameP= "Second name (Optional)"
                lastName= "Last name"
                secondLastName= "Second last name"
                secondLastNameP= "Second last name (Optional)"
                birthday= "Birthday"
                email= "E-mail"
                password= "Password"
                passwordc= "Confirm password"
                phoneNumber= "Phone number"
                languageInput= "Language"
                goBack=  "Go back"
                buttonSignup= "Sign up"
                termCondition= "Accept the terms and conditions"
                titlePage= "Profile"
                dateHint="MM/DD/YYYY format"
                snack1 = "User registered successfully"
                snack2 = "User registration error. Try again."
                snack3 = "Please confirm password correctly"

    password2= "";
    items: Array<string> = ['English', 'Spanish'];
    nameLanguage = "";
    snackbar = false;
    snackbarError = false;
    snackbarPassword = false;
    timeout =7000;
    nameTest = "Vanessa";
    IDuser = localStorage.getItem("ID");
    languageName = "";
    dateInfo = "";

         getUserData(userId: number) {
         this.$store.dispatch("user/getUserData", userId).then(() => {
            if (this.userInfo.language===1){
              this.nameLanguage="English";
            } else if (this.userInfo.language===2){ 
              this.nameLanguage="Español";
            } 
            })
         }
          created() {
            this.getUserData(parseInt(this.IDuser!));
          }
    
      changePage(link: string) {
         this.$router.push({ name: link });
       }

    rules: {} = {
        required: (value: string) =>
        (!!value && value !== "" && value !== undefined) || "Required",
        passwordRules: [(v: string) =>!!v || "Password is required"],
        emailRules: [ 
            (v:string) => !!v || "E-mail is required",
            (v:string) => /.+@.+\..+/.test(v) || "E-mail is required",
        ],
    };

    $refs!: {
        form:any;
    };

     formatDate(date: string) {
    return moment(date).format("YYYY-MM-DD");
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
          return term.context == "signup" || term.context == "general" || term.context == "profile";
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "signupFirstName") {
            this.firstName = term.translation;
          } else if (term.name == "signupSecondName") {
            this.secondName= term.translation;
          } else if (term.name == "signupSecondNameP") {
            this.secondNameP = term.translation;
          } else if (term.name == "signupLastName") {
            this.lastName = term.translation;
          } else if (term.name == "signupSecondLastName") {
            this.secondLastName = term.translation;
          } else if (term.name == "signupSecondLastNameP") {
            this.secondLastNameP = term.translation;
          } else if (term.name == "signupIdentification") {
            this.identification= term.translation;
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
            this.goBack= term.translation;
          } else if (term.name == "signupButton") {
            this.buttonSignup = term.translation;
          } else if (term.name == "signupTermCondition") {
            this.termCondition = term.translation;
          } else if (term.name == "profileTitlePage") {
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
          }
        }
      );
  } 
    } 
</script>

<style>
.bg {
        /* background-image: url('../assets/bg-login.jpg');*/
         min-height:100%;
         background-color: #f7f7f7;
         background-size:cover;
    }
.clickable {
  cursor: pointer;
}
</style>