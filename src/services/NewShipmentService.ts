import { API_URL } from "./config";

export default {
  getPackagesCharacteristic() {
    return API_URL.get("/characteristic"); //Aqui van los las llamadas a la API de un módulo determinado, se colocan métodos que devuelvan promesas, por ejemplo: API_URL.get('/ruta')
  },
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTE3VDE1OjMzOjQ1LjU2N1oiLCJleHAiOiIyMDIwLTA1LTE4VDE1OjMzOjQ1LjU2N1oifQ.T3HGmk4ERCA2TfDUJ3JdS_oCFBMoiSysh0OuqkbLdUQ`,
  },
};
