import { API_URL } from "./config";

export default {
  createUserRoute(user: {}) {
    return API_URL.post(`/user/register`, user, {     
        headers: {
        Authorization: {"Content-Type":"application/json"},
      }, 
    })
  },
  getUser(userId: any) {
    return API_URL.get(`/user/${userId}`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIxVDEzOjIyOjE5LjA2MFoiLCJleHAiOiIyMDIwLTA1LTIyVDEzOjIyOjE5LjA2MFoifQ.tP9NiVbcrhYNxCzsLqDGlBMuhnWPxYQuN_ADNcUAfjg`,
      },
    });
  },
  recoverPasswordRoute(user: {}) {
    return API_URL.put(`/user/newPassword`, user, {     
        headers: {
        Authorization: {"Content-Type":"application/json"},
      }, 
    })
  }, 
};
