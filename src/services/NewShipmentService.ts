import { API_URL } from "./config";

export default {
  getCharacteristics() {
    return API_URL.get("/characteristic", {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIyVDAyOjE2OjIwLjQ4NVoiLCJleHAiOiIyMDIwLTA1LTIzVDAyOjE2OjIwLjQ4NloifQ.b4w4FFsyIeYzu98xTl4feYP-ph4L0pWXoLaFISLreBo`,
      },
    }); //Aqui van los las llamadas a la API de un módulo determinado, se colocan métodos que devuelvan promesas, por ejemplo: API_URL.get('/ruta')
  },
  getOptions() {
    return API_URL.get("/option", {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIyVDAyOjE2OjIwLjQ4NVoiLCJleHAiOiIyMDIwLTA1LTIzVDAyOjE2OjIwLjQ4NloifQ.b4w4FFsyIeYzu98xTl4feYP-ph4L0pWXoLaFISLreBo`,
      },
    }); //Aqui van los las llamadas a la API de un módulo determinado, se colocan métodos que devuelvan promesas, por ejemplo: API_URL.get('/ruta')
  },
  getOffices() {
    return API_URL.get("/office", {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIyVDAyOjE2OjIwLjQ4NVoiLCJleHAiOiIyMDIwLTA1LTIzVDAyOjE2OjIwLjQ4NloifQ.b4w4FFsyIeYzu98xTl4feYP-ph4L0pWXoLaFISLreBo`,
      },
    }); //Aqui van los las llamadas a la API de un módulo determinado, se colocan métodos que devuelvan promesas, por ejemplo: API_URL.get('/ruta')
  },
  getDiscounts() {
    return API_URL.get("/discount/10", {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIyVDAyOjE2OjIwLjQ4NVoiLCJleHAiOiIyMDIwLTA1LTIzVDAyOjE2OjIwLjQ4NloifQ.b4w4FFsyIeYzu98xTl4feYP-ph4L0pWXoLaFISLreBo`,
      },
    }); //Aqui van los las llamadas a la API de un módulo determinado, se colocan métodos que devuelvan promesas, por ejemplo: API_URL.get('/ruta')
  },
};
