import { API_URL } from "./config";

export default {
  getCharacteristics() {
    return API_URL.get("/characteristic", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }); //Aqui van los las llamadas a la API de un módulo determinado, se colocan métodos que devuelvan promesas, por ejemplo: API_URL.get('/ruta')
  },
  getOptions() {
    return API_URL.get("/option", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }); //Aqui van los las llamadas a la API de un módulo determinado, se colocan métodos que devuelvan promesas, por ejemplo: API_URL.get('/ruta')
  },
  getOffices() {
    return API_URL.get("/office", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }); //Aqui van los las llamadas a la API de un módulo determinado, se colocan métodos que devuelvan promesas, por ejemplo: API_URL.get('/ruta')
  },
  getBaseCost() {
    return API_URL.get("/configuration/basecost", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }); //Aqui van los las llamadas a la API de un módulo determinado, se colocan métodos que devuelvan promesas, por ejemplo: API_URL.get('/ruta')
  },
  sendOrder(Order: {}) {
    return API_URL.post(`/shipment`, Order, {
      headers: {
        Authorization: { "Content-Type": "application/json" },
      },
    });
  },
  verifyDirection(Order: {}) {
    return API_URL.post(`/direction/verify`, Order, {
      headers: {
        Authorization: { "Content-Type": "application/json" },
      },
    });
  },
};
