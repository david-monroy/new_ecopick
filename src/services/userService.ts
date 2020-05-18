import { API_URL } from "./config";

export default {
  createUserRoute(user: {}) {
    return API_URL.post(`/user/register`, user, {     
        headers: {
        Authorization: {"Content-Type":"application/json"},
      }, 
    })
  },
};