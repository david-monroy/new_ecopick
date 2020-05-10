<template>
  <v-container fluid class="bg" >

        <v-row no gutters class="hidden-sm-and-down"> 
            <v-col cols="12" sm="1"> <v-icon class="mr-1" style="float: left;">mdi-arrow-left</v-icon> <h4>Go back</h4></v-col> 
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
                        <v-col>
                            <v-icon class="hidden-md-and-up" style="float: left;">mdi-arrow-left</v-icon> 
                        </v-col>
                        <v-col> 
                             <h3>Sign up</h3>
                        </v-col> 
                        <v-col> 
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                            <v-text-field
                                ref="name"
                                v-model="user.firstName"
                                :rules="[() => !!name || 'This field is required']"
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
                                :rules="[() => !!name || 'This field is required']"
                                :error-messages="errorMessages"
                                label="Second name"
                                placeholder="Second name"
                                required
                            ></v-text-field>
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                            <v-text-field
                                ref="name"
                                v-model="user.lastName"
                                :rules="[() => !!name || 'This field is required']"
                                :error-messages="errorMessages"
                                label="Last name"
                                placeholder="Last name"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col> 
                            <v-text-field
                                ref="name"
                                v-model="user.secondLastName"
                                :rules="[() => !!name || 'This field is required']"
                                :error-messages="errorMessages"
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
                                :rules="[() => !!name || 'This field is required']"
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
                                :rules="[() => !!name || 'This field is required']"
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
                                :rules="[() => !!name || 'This field is required']"
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
                                :rules="[() => !!name || 'This field is required']"
                                :error-messages="errorMessages"
                                label="Password"
                                placeholder="Password"
                                required
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
                                :rules="[() => !!name || 'This field is required']"
                                :error-messages="errorMessages"
                                label="Confirm password"
                                placeholder="Confirm password"
                                required
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
                           <v-btn rounded color="#a9ff4d" dark @click="searchRoute()">Sign up</v-btn>
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

     searchRoute (){ 
            console.log(this.user);
            this.$store
            .dispatch("user/createUserRoute", this.user)
            .then(() => {
                //this.cosasdelaBD = this.$store.state.example.route;
                console.log(this.user);
      }); }

   /*data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
      items: ['English', 'Spanish'],
      /*user: {
          identification: '',
            first_name: '',
            second_name: '',
            last_name: '',
            second_last_name: '',
            birthday: '',
            email: '',
            password: '',
            phone_number: '',
            charge: 'Client',
            id_language: '',
            id_status: 4
     // }, */
     /*user: {} = {
                user.identification: this.identification,
                user.first_name: this.first_name,
                user.second_name: this.second_name,
                user.last_name: this.last_name,
                user.second_last_name: this.second_last_name,
                user.birthday: this.birthday,
                user.email: this.email,
                user.password: this.password,
                user.phone_number: this.phone_number,
                user.charge: this.charge,
                user.id_language: this.id_language,
                user.id_status: this.id_status,
            }
    }), 

    
      get computedDateFormatted (): String {
        return this.formatDate(this.date)
     

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    
      public formatDate (date: String): String {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      }
      public parseDate (date): String {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }, */
     
      
    
}
</script>

<style>
.bg {
         background-image: url('../assets/bg-login.jpg');
         min-height:100%;
         background-size:cover;
    }
</style>