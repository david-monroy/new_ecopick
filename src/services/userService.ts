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
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTE1VDEyOjUzOjQ4Ljc5MloiLCJleHAiOiIyMDIwLTA1LTE2VDEyOjUzOjQ4Ljc5MloifQ.gAq2dxRY39J1nPNr0vVr6tLAq0RM9RlU7CsjstjQ298`,
      },
    });
  },
};
