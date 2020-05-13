<template>
  <v-container fluid class="bg" >

        <v-row no gutters class="hidden-sm-and-down"> 
            <v-col cols="12" sm="1"> <a style="color: gray;" @click="changePage('Home')"><v-icon class="mr-1" style="float: left;">mdi-arrow-left</v-icon> <h4>{{goBack}}</h4></a></v-col> 
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
                            <a style="color: gray;" @click="changePage('Home')"><v-icon class="hidden-md-and-up" style="float: left;">mdi-arrow-left</v-icon> </a>
                        </v-col>
                        <v-col> 
                             <h3>{{titlePage}}</h3>
                        </v-col> 
                        <v-col> 
                        </v-col>  
                    </v-row> 
                <v-form ref="form">
                    <v-row> 
                        <v-col> 
                            <v-text-field
                                ref="name"
                                v-model="user.firstName"
                                :rules="[rules.required]"
                                :error-messages="errorMessages"
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
                                :error-messages="errorMessages"
                                :label="identification"
                                :placeholder="identification"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col> 
                            <v-text-field
                                ref="name"
                                v-model="user.phoneNumber"
                                :rules="[rules.required]"
                                :error-messages="errorMessages"
                                :label="phoneNumber"
                                :placeholder="phoneNumber"
                                required
                            ></v-text-field>
                            
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                            <v-text-field
                                ref="name"
                                v-model="user.email"
                                :rules="rules.emailRules"
                                :error-messages="errorMessages"
                                :label="email"
                                :placeholder="email"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col> 
                            <v-icon class="mt-5 mr-2" style="float: left;">mdi-calendar</v-icon>
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
                                <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                                </v-menu>
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                            <v-text-field
                                ref="name"
                                v-model="user.password"
                                :rules="[rules.required]"
                                :error-messages="errorMessages"
                                :label="password"
                                :placeholder="password"
                                required
                                :type="show2 ? 'text' : 'password'"
                                name="input-10-2"
                                class="input-group--focused"
                            ></v-text-field>
                        </v-col>
                        <v-col> 
                            <v-select
                            :items="items"
                            :label="languageInput"
                            v-model="id_language"></v-select>
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                            <v-text-field
                                ref="name"
                                v-model="password2"
                                :rules="[rules.required]"
                                :error-messages="errorMessages"
                                :label="passwordc"
                                :placeholder="passwordc"
                                required
                                :type="show2 ? 'text' : 'password'"
                                name="input-10-2"
                                class="input-group--focused"
                            ></v-text-field>
                        
                        </v-col>  
                                <v-col cols="12" sm="6"> 
                                    <v-row>
                                        <v-col> 
                                        </v-col> 
                                        <v-col cols="12" sm="10"><v-checkbox
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
                        <v-col> 
                        </v-col>  
                        <v-col cols="12" sm="6"> 
                           <v-btn rounded color="#a9ff4d" dark @click="searchRoute()">{{buttonSignup}}</v-btn>
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

        <v-snackbar v-model="snackbar" top:timeout="timeout" color="success">
            {{snack1}}
            <v-btn dark text @click="snackbar=false">Close</v-btn>
        </v-snackbar>
        <v-snackbar v-model="snackbarError" top:timeout="timeout" color="error">
            {{snack2}}
             <v-btn dark text @click="snackbarError=false">Close</v-btn>
        </v-snackbar>
        <v-snackbar v-model="snackbarPassword" top:timeout="timeout" color="error">
            {{snack3}}
             <v-btn dark text @click="snackbarPassword=false">Close</v-btn>
        </v-snackbar>
    </v-container>
</template>


<script lang="ts">

import Vue from "vue";
import Component from "vue-class-component";
import {Watch} from "vue-property-decorator";

@Component({})
export default class SignUp extends Vue {

    user: {identification: string, firstName: string, secondName: string,
    lastName:string, secondLastName: string, birthday:string, email:string, password: string
    phoneNumber:string, charge: string, idLanguage: number, idStatus: number} = {
                identification: "",
                firstName: "",
                secondName: "",
                lastName: "",
                secondLastName: "",
                birthday: "",
                email: "",
                password: "",
                phoneNumber: "",
                charge:  "Client",
                idLanguage: 1,
                idStatus: 4,
            };
                
    
    //////Variables estaticas/////

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
                dateInput= ""
                goBack=  "Go back"
                buttonSignup= "Sign up"
                termCondition= "Accept the terms and conditions"
                titlePage= "Sign up"
                dateHint="MM/DD/YYYY format"
                snack1 = "User registered successfully"
                snack2 = "User registration error. Try again."
                snack3 = "Please confirm password correctly"

    //////Fin variables estaticas//////

    password2= "";
    items: Array<string> = ['English', 'Spanish'];
    snackbar = false;
    snackbarError = false;
    snackbarPassword = false;
    timeout =7000;

    searchRoute() {
        if (this.$refs.form.validate()&&this.password2===this.user.password){
             console.log(this.user);
            this.$store
            .dispatch("user/createUserRoute", this.user)
            .then(() => {
                //this.cosasdelaBD = this.$store.state.example.route;
                console.log(this.user);
                this.snackbar=true;
        });}   else if (this.password2!==this.user.password){
                    console.log("Datos no validos");
                    this.snackbarPassword=true;
                 }  else {
                            console.log("Datos no validos");
                            this.snackbarError=true;
                         }
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

 
    ////// Date Picker //////
    /*data*/
    date: string = new Date().toISOString().substr(0, 10);
    menu1 =false;
    menu2 =false;

    /*watch*/
      @Watch("date")
        dateChanged(val: string){
        this.user.birthday= this.formatDate(this.date);
      }; 
    

    /*Methods*/

    public formatDate (date: string): string {
        if (!date) return ''
        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      };
    public parseDate (date: string): string {
        if (!date) return ''

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      };
     
    ///// End Date Picker /////


    //////Internationalization//////

   /* get translator() {
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
          if (term.name == "navbarButtonShipping") {
            this.buttonShipping = term.translation;
          } else if (term.name == "navbarButtonShippingCreate") {
            this.shippingOptions[0].name = term.translation;
          } else if (term.name == "navbarButtonShippingMy") {
            this.shippingOptions[1].name = term.translation;
          } else if (term.name == "generalSearch") {
            this.search = term.translation;
          } else if (term.name == "generalSignUp") {
            this.signUp = term.translation;
          } else if (term.name == "generalLogIn") {
            this.logIn = term.translation;
          }
        }
      );
  } */


    } 

</script>

<style>
.bg {
         background-image: url('../assets/bg-login.jpg');
         min-height:100%;
         background-size:cover;
    }
.clickable {
  cursor: pointer;
}
</style>