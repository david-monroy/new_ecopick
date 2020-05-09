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
                                v-model="name"
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
                                v-model="name"
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
                                v-model="name"
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
                                v-model="name"
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
                                v-model="name"
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
                                v-model="name"
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
                                v-model="name"
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
                                    v-model="dateFormatted"
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
                                v-model="name"
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
                            ></v-select>
                        </v-col>  
                    </v-row> 

                    <v-row> 
                        <v-col> 
                            <v-text-field
                                ref="name"
                                v-model="name"
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
                           <v-btn rounded color="#a9ff4d" dark >Sign up</v-btn>
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
data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
      items: ['English', 'Spanish'],
    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
}
</script>

<style>
.bg {
         background-image: url('../assets/bg-login.jpg');
         min-height:100%;
         background-size:cover;
    }
</style>