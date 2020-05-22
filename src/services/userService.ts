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
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIxVDIwOjAzOjMxLjEwMloiLCJleHAiOiIyMDIwLTA1LTIyVDIwOjAzOjMxLjEwMloifQ.poUKL-IJjepDcHfYmt1zZRK1cvj7FvzXT5bo0C0b3eY`,
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
