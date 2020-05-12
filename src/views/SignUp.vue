<template>
  <v-container fluid class="bg" >

        <v-row no gutters class="hidden-sm-and-down"> 
            <v-col cols="12" sm="1"> <a style="color: gray;" @click="changePage('Home')"><v-icon class="mr-1" style="float: left;">mdi-arrow-left</v-icon> <h4>Go back</h4></a></v-col> 
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
                             <h3>Sign up</h3>
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
                                label="First name"
                                placeholder="First name"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col> 
                            <v-text-field
                                ref="name"
                                v-model="user.secondName"
                                label="Second name"
                                placeholder="Second name (optional)"
                            ></v-text-field>
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                            <v-text-field
                                ref="name"
                                v-model="user.lastName"
                                :rules="[rules.required]"
                                label="Last name"
                                placeholder="Last name"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col> 
                            <v-text-field
                                ref="name"
                                v-model="user.secondLastName"
                                label="Second last name"
                                placeholder="Second last name (optional)"
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
                                label="Identification"
                                placeholder="Identification"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col> 
                            <v-text-field
                                ref="name"
                                v-model="user.phoneNumber"
                                :rules="[rules.required]"
                                :error-messages="errorMessages"
                                label="Phone number"
                                placeholder="Ex: +1 (555) 555 5555"
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
                                label="E-mail"
                                placeholder="E-mail"
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
                                    label="Date"
                                    hint="MM/DD/YYYY format"
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
                                label="Password"
                                placeholder="Password"
                                required
                                :type="show2 ? 'text' : 'password'"
                                name="input-10-2"
                                class="input-group--focused"
                            ></v-text-field>
                        </v-col>
                        <v-col> 
                            <v-select
                            :items="items"
                            label="Language"
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
                                label="Confirm password"
                                placeholder="Confirm password"
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
                                    label="Accept the terms and conditions"
                                    color="success"
                                    value="success"
                                    hide-details
                                    ></v-checkbox>  
                                          </v-col> 
                                    </v-row>
                                    
                                </v-col>  
                    </v-row> 
                
                     <v-row> 
                        <v-col> 
                        </v-col>  
                        <v-col cols="12" sm="6"> 
                           <v-btn rounded color="#a9ff4d" dark @click="searchRoute2()">Sign up</v-btn>
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
            User registered successfully
            <v-btn dark text @click="snackbar=false">Close</v-btn>
        </v-snackbar>
        <v-snackbar v-model="snackbarError" top:timeout="timeout" color="error">
            User registration error. Try again.
             <v-btn dark text @click="snackbarError=false">Close</v-btn>
        </v-snackbar>
    </v-container>
</template>


<script lang="ts">

import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class SignUp extends Vue {

    user: {} = {
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
                idLanguage: "1",
                idStatus: "4",
            }
    
    items: Array<string> = ['English', 'Spanish'];
    snackbar = false;
    snackbarError = false;
    timeout =7000;

     searchRoute (){ 
            console.log(this.user);
            this.$store
            .dispatch("user/createUserRoute", this.user)
            .then(() => {
                //this.cosasdelaBD = this.$store.state.example.route;
                console.log(this.user);
      }); } 

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

    searchRoute2() {
        if (this.$refs.form.validate()) {
             console.log(this.user);
            this.$store
            .dispatch("user/createUserRoute", this.user)
            .then(() => {
                //this.cosasdelaBD = this.$store.state.example.route;
                console.log(this.user);
                this.snackbar=true;
      });}
            else {
            console.log("Datos no validos");
            this.snackbarError=true;
            }
        }
    }
  
    
    ////
    /*data*/
/*
    date: string = new Date().toISOString().substr(0, 10);
    dateFormatted: String = this.date.formatDate(new Date().toISOString().substr(0, 10));
    menu1: boolean =false;
    menu2: boolean =false;
    */

    /*computed*/

     /*get computedDateFormatted (): string {
        return this.formatDate(this.date)
      } */

    /*watch*/

   /*  watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    }*/

    /*Methods*/

   /* public formatDate (date: string): string {
        if (!date) return ''
        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      };
    public parseDate (date: string): string {
        if (!date) return ''

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      };
     
    //
*/
    
     

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