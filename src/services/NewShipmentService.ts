import { API_URL } from "./config";

export default {
  getPackagesCharacteristic() {
    return API_URL.get("/shipments/new"); //Aqui van los las llamadas a la API de un módulo determinado, se colocan métodos que devuelvan promesas, por ejemplo: API_URL.get('/ruta')
  },
};
