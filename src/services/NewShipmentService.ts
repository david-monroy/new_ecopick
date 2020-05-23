import { API_URL } from "./config";

export default {
  getCharacteristics() {
    return API_URL.get("/characteristic", {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIzVDAyOjI1OjAyLjM3NloiLCJleHAiOiIyMDIwLTA1LTI0VDAyOjI1OjAyLjM3NloifQ.7LIxxDBuHQ0yrEWYVU8Nl9XMBIREz-1OSuHfYG-sPis`,
      },
    }); //Aqui van los las llamadas a la API de un módulo determinado, se colocan métodos que devuelvan promesas, por ejemplo: API_URL.get('/ruta')
  },
  getOptions() {
    return API_URL.get("/option", {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIzVDAyOjI1OjAyLjM3NloiLCJleHAiOiIyMDIwLTA1LTI0VDAyOjI1OjAyLjM3NloifQ.7LIxxDBuHQ0yrEWYVU8Nl9XMBIREz-1OSuHfYG-sPis`,
      },
    }); //Aqui van los las llamadas a la API de un módulo determinado, se colocan métodos que devuelvan promesas, por ejemplo: API_URL.get('/ruta')
  },
  getOffices() {
    return API_URL.get("/office", {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIzVDAyOjI1OjAyLjM3NloiLCJleHAiOiIyMDIwLTA1LTI0VDAyOjI1OjAyLjM3NloifQ.7LIxxDBuHQ0yrEWYVU8Nl9XMBIREz-1OSuHfYG-sPis`,
      },
    }); //Aqui van los las llamadas a la API de un módulo determinado, se colocan métodos que devuelvan promesas, por ejemplo: API_URL.get('/ruta')
  },
  getDiscounts() {
    return API_URL.get("/discount/10", {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIzVDAyOjI1OjAyLjM3NloiLCJleHAiOiIyMDIwLTA1LTI0VDAyOjI1OjAyLjM3NloifQ.7LIxxDBuHQ0yrEWYVU8Nl9XMBIREz-1OSuHfYG-sPis`,
      },
    }); //Aqui van los las llamadas a la API de un módulo determinado, se colocan métodos que devuelvan promesas, por ejemplo: API_URL.get('/ruta')
  },
};
