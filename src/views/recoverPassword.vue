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
                        <v-col cols="12" sm="8"> 
                            <h3>Recover password</h3>
                        </v-col> 
                        <v-col> 
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        
                        <v-col> 
                        <h5>Fill in your email and we'll send you an email to reset your password</h5>
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
                        <v-col>  
                        </v-col>

                        <v-col> 
                            <v-btn rounded color="#a9ff4d" dark>Recover password</v-btn>
                        </v-col>

                        <v-col> 
                        </v-col>
                    </v-row> 

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
    </v-container>
</template>

<script>
export default {

}
</script>

<style>
 .bg {
         background-image: url('../assets/bg-login.jpg');
         min-height:100%;
         background-size:cover;
    }
</style>