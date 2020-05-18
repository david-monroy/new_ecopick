import { API_URL } from "./config";

export default {
  recoverPasswordRoute(user: {}) {
    return API_URL.put(`/user/newPassword`, user, {     
        headers: {
        Authorization: {"Content-Type":"application/json"},
      }, 
    })
  },
};