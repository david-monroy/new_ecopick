import Vue from "vue";
import userService from "@/services/userService";
import { fa, fb, providerGoogle, providerFacebook } from "../../firebase";

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    userData: {},
    status: {},
  },
  // -----------------------------------------------------------------
  getters: {
    getLoginUserData: (state: any) => state.user,
    getLoginStatus: (state: any) => state.status,
  },
  // -----------------------------------------------------------------
  mutations: {
    setUserData(state: {}, userData: {}) {
      Vue.set(state, "userData", userData);
    },
    setStatus(state: {}, status: any) {
      Vue.set(state, "status", status);
    },
  },
  // -----------------------------------------------------------------
  actions: {
    createUserRoute: async function (context: any, user: {}) {
      await userService.createUserRoute(user);
    },
    recoverPasswordRoute: async function (context: any, user: {}) {
      return new Promise((resolve, reject) => {
        userService.recoverPasswordRoute(user).then((response: any) => {
          resolve(response.status);
        });
      });
    },
    getUserData: async function (context: any, userId: number) {
      await userService.getUser(userId).then((response: any) => {
        context.commit("setUserData", {
          firstname: response.data[0].us_first_name,
          secondname: response.data[0].us_second_name,
          lastname: response.data[0].us_last_name,
          secondlastname: response.data[0].us_second_last_name,
          phonenumber: response.data[0].us_phone_number,
          identification: response.data[0].us_identification,
          birthday: response.data[0].us_birthday,
          language: response.data[0].us_fk_language,
          email: response.data[0].us_email,
          password: response.data[0].us_password,
        });
      });
    },
    validateUserRoute: async function (context: any, user: {}) {
      return new Promise((resolve, reject) => {
        userService
          .validateUserRoute(user)
          .then((response: any) => {
            if (response.data !== "") {
              context.commit("setLoginRoute", response.data);
              localStorage.setItem("token", response.data.token);
              localStorage.setItem(
                "Name",
                response.data.results[0].us_first_name +
                  " " +
                  response.data.results[0].us_last_name
              );
              localStorage.setItem("Email", response.data.results[0].us_email);
              localStorage.setItem(
                "Language",
                response.data.results[0].us_fk_language
              );
              localStorage.setItem("ID", response.data.results[0].us_id);
              if (response.data.results[0].us_fk_language == 1) {
                localStorage.setItem("Lang", "en-us");
              } else if (response.data.results[0].us_fk_language == 2) {
                localStorage.setItem("Lang", "es-ve");
              }
            }
            resolve(response.status);
          })
          .catch((error: any) => {
            reject(error.response.status);
          });
      });
    },
    federatedSignUpGoogle: async(context: any, payload: any) =>{
      let userEmail: string | null | undefined;
      let today: any = new Date();
      let dd: any = today.getDate();
      let mm: any = today.getMonth()+1; 
      const yyyy = today.getFullYear();
      if(dd<10) 
      {
          dd=`0${dd}`;
      } 
      if(mm<10) 
      {
          mm=`0${mm}`;
      }
      today = `${yyyy}-${mm}-${dd}`;

      const userData: any = {
                identification: "12345",
                firstName: "",
                secondName: "",
                lastName: "",
                secondLastName: "",
                birthday: today,
                email: "",
                password: null,
                phoneNumber: null,
                charge:  "Client",
                idLanguage: 1,
                idStatus: 4,
      };
      const userInLs: any = {
        userName: "",
        userLastName: "",
        userLanguage: "",
        userPhoto: "",
      };
      let googleProfile: any;
      await fa
        .signInWithPopup(
          payload.provider == "google" ? providerGoogle : providerFacebook
        )
        .then((result) => {
          googleProfile = result.additionalUserInfo?.profile;
          userData.firstName = googleProfile.given_name;
          userData.lastName = googleProfile.family_name;
         // userData.userPhoto = googleProfile.picture;
          userData.email = googleProfile.email;
        })
        .catch((error) => {
          console.log(error);
        });
      
      await userService.createUserRoute(userData).then((response: any) => {
        if (response.data.status == 201){
          context.commit("setStatus", {registered: true});
        } else {
          context.commit("setStatus", {registered: false}); //el correo ya esta usado
        }
      });

      await userService.validateUserRoute({userEmail: userData.userEmail, userPassword: null}).then((response: any)=>{
        if (response.data.status == 200) {
         /*userInLs.userName = response.data.user[0].user_first_name;
          userInLs.userLastName = response.data.user[0].user_first_lastname;
          userInLs.userLanguage = response.data.user[0].language_name;
          userInLs.userPhoto = response.data.user[0].user_photo; */
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("Email", response.data.results[0].us_email);
              localStorage.setItem(
                "Language",
                response.data.results[0].us_fk_language
              );
              localStorage.setItem("ID", response.data.results[0].us_id);
              if (response.data.results[0].us_fk_language == 1) {
                localStorage.setItem("Lang", "en-us");
              } else if (response.data.results[0].us_fk_language == 2) {
                localStorage.setItem("Lang", "es-ve");
              }
          //localStorage.setItem("userData", JSON.stringify(userInLs));
          //context.commit("setUser", response.data.user[0]);
        }
      })
    }
  },
};
