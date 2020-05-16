<template>
  <v-container fluid class="bg" >

        <v-row no gutters class="hidden-sm-and-down"> 
        <v-col cols="12" sm="1"> <a style="color: gray;" @click="changePage('Home')"><v-icon class="mr-1" style="float: left;">mdi-arrow-left</v-icon> <h4>{{goBack}}</h4></a></v-col>              <v-col ></v-col>
        </v-row> 
        
        <v-col ><Translate /></v-col>

        <v-row >

        <v-col class="hidden-sm-and-down">   </v-col> 

            <v-card
            class="mx-auto"
            outlined 
            width="400"
        
            >
                <v-col justify="center" align="center"> 
                    
                    <v-row> 
                        <v-col> 
                            <a style="color: gray;" @click="changePage('Home')"><v-icon class="hidden-md-and-up" style="float: left;">mdi-arrow-left</v-icon> </a>
                        </v-col>
                        <v-col cols="12" sm="8"> 
                            <h3>{{titleRecover}}</h3>
                        </v-col> 
                        <v-col> 
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        
                        <v-col> 
                        <h5>{{description}}</h5>
                        </v-col> 
                        
                    </v-row> 
                <v-form ref="form">
                    <v-row> 
                        <v-col cols="12" sm="1">  
                        <v-icon class="mt-5" pa-0>mdi-account</v-icon> 
                        </v-col>

                        <v-col> 
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            :label="emailForm"
                            required
                        ></v-text-field>
                        </v-col>
                    </v-row> 

                    <v-row> 
                        <v-col>  
                        </v-col>

                        <v-col> 
                            <v-btn rounded color="#a9ff4d" dark>{{titleRecover}}</v-btn>
                        </v-col>

                        <v-col> 
                        </v-col>
                    </v-row> 
                </v-form>
                    <v-row> 
                        <v-col> 
                        </v-col>
                        <v-col> 
                             <hr color="gray" size=1 width="150">
                        </v-col>
                        <v-col> 
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                        </v-col>
                        <v-col> 
                            <a href="#" style="color:#454545;">Log in</a>
                        </v-col> 
                        <v-col> 
                        </v-col>  
                    </v-row> 

                


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
            <v-btn dark text @click="snackbar=false">{{close}}</v-btn>
        </v-snackbar>
        <v-snackbar v-model="snackbarError" top:timeout="timeout" color="error">
            {{snack2}}
             <v-btn dark text @click="snackbarError=false">{{close}}</v-btn>
        </v-snackbar>
        <v-snackbar v-model="snackbarError2" top:timeout="timeout" color="error">
            {{snack3}}
             <v-btn dark text @click="snackbarError2=false">{{close}}</v-btn>
        </v-snackbar>

    </v-container>
</template>

<script lang="ts">

import Vue from "vue";
import Component from "vue-class-component";
import {Watch} from "vue-property-decorator";
import Translate from "../components/Translate.vue";

@Component({ components: { Translate } })
export default class recoverPassword extends Vue {

    $store: any;
    $router: any;

     user: {email:string} = {
                email: "",
            };
                
    
    //////Variables estaticas/////

                titleRecover= "Recover password"
                description= "Fill in your email and we'll send you an email to reset your password"
                emailForm= "E-mail"
                goBack= "Go back"
                snack1 = "Your password has been sended."
                snack2 = "Please fill in your email"
                snack3 = "This email isn't associated to an account"
                close = "Close"

    //////Fin variables estaticas//////

  
    snackbar = false;
    snackbarError = false;
    snackbarError2 = false;
    timeout =7000;

    searchRoute() {
        if (this.$refs.form.validate()){
            this.$store
            .dispatch("user/recoverPasswordRoute", this.user)
            .then((status:any) => {
                if (status==200) {
                //this.cosasdelaBD = this.$store.state.example.route;
                this.snackbar=true;
                //this.changePage('Home'); 
                } else if (status==204) {
                  this.snackbarError2=true;
                }
             });  
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

    //////Internationalization//////

    
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
          return term.context == "recoverPassword" || term.context == "general";
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "recoverPasswordTitle") {
            this.titleRecover = term.translation;
          } else if (term.name == "recoverPasswordDescription") {
            this.description= term.translation;
          } else if (term.name == "recoverPasswordEmail") {
            this.emailForm = term.translation;
          } else if (term.name == "recoverPasswordSnack1") {
            this.snack1 = term.translation;
          } else if (term.name == "recoverPasswordSnack2") {
            this.snack2 = term.translation;
          } else if (term.name == "srecoverPasswordnack3") {
            this.snack3 = term.translation;
          } else if (term.name == "generalGoBack") {
            this.snack3 = term.translation;
          } else if (term.name == "generalClose") {
            this.close = term.translation;
          } 
          
        }
      );
  } 

}
</script>

<style>
 .bg {
         background-image: url('../assets/bg-login.jpg');
         min-height:100%;
         background-size:cover;
    }
</style>