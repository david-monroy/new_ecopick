<template>
    <v-container fluid class="bg" >

        <v-row no gutters class="hidden-sm-and-down"> 
            <v-col cols="12" sm="1"> <v-icon class="mr-1" style="float: left;">mdi-arrow-left</v-icon> <h4>Go back</h4></v-col> 
             <v-col ></v-col>
             

        </v-row> 
        
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
                            <v-icon class="hidden-md-and-up" style="float: left;">mdi-arrow-left</v-icon> 
                        </v-col>
                        <v-col> 
                            <v-img
                                class="mx-2 clickable"
                                src="../assets/page-logo.png"
                                max-height="40"
                                max-width="150"
                                ></v-img>
                        </v-col> 
                        <v-col> 
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                        </v-col>
                        <v-col> 
                        <h3>Login</h3>
                        </v-col> 
                        <v-col> 
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col cols="12" sm="1">  
                        <v-icon class="mt-5" pa-0>mdi-account</v-icon> 
                        </v-col>

                        <v-col> 
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                        ></v-text-field>
                        </v-col>
                    </v-row> 

                    <v-row> 
                        <v-col cols="12" sm="1">  
                        <v-icon class="mt-5">mdi-lock</v-icon>
                        </v-col>

                        <v-col> 
                            <v-text-field 
                            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show3 ? 'text' : 'password'"
                            name="input-10-2"
                            label="Password"
                            class="input-group--focused"
                            @click:append="show3 = !show3"
                        ></v-text-field>
                        </v-col>
                    </v-row> 

                    <v-row> 
                        <v-col> 
                        </v-col>
                        <v-col> 
                            <h4><a href="#" style="color:#454545;">Forgot password?</a></h4>
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                        </v-col>
                        <v-col> 
                        <v-btn rounded color="#a9ff4d" dark>Login</v-btn>
                        </v-col> 
                        <v-col> 
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                        </v-col>
                        <v-col> 
                            <h5>Or login with</h5>
                        </v-col> 
                        <v-col> 
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                        </v-col>
                        <v-col> 
                            <v-btn rounded color="red accent-4" dark><v-icon class="mr-1" p-0>mdi-google</v-icon>Google</v-btn>
                        </v-col> 
                        <v-col> 
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                        </v-col>
                        <v-col> 
                            <v-btn rounded color="indigo darken-2" dark><v-icon class="mr-1" p-0>mdi-facebook</v-icon>Facebook</v-btn>
                        </v-col> 
                        <v-col> 
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                        </v-col>
                        <v-col cols="12" sm="8"> 
                            <h5 ma-0>Don't have an account? <a href="#" style="color:#454545;">Sign up!</a></h5>
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
    </v-container>



</template>



<script>
import Vue from "vue";
import Component from "vue-class-component";
export default {
        data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
       password: 'Password',
        rules: {
          required: value => !!value || 'Password required.',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
        show3: false,
    }),
}
</script>

<style>
    .bg {
         background-image: url('../assets/bg-login.jpg');
         min-height:100%;
         background-size:cover;
    }
</style>