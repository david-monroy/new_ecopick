import { API_URL } from "./config";

export default {
  //Aqui van los las llamadas a la API de un módulo determinado, se colocan métodos que devuelvan promesas, por ejemplo: API_URL.get('/ruta')
  createUserRoute(user: {}) {
    return API_URL.post(`/user/register`, user, {     
        headers: {
        Authorization: {"Content-Type":"application/json"},
      }, 
    })
  },
  validateUserRoute(user: {}) {
    return API_URL.post(`/user/login`, user, {     
        headers: {
        Authorization: {"Content-Type":"application/json"},
      }, 
    })
  },
};