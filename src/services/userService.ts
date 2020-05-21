import { API_URL } from "./config";

export default {
  getUser(userId: any) {
    return API_URL.get(`/user/${userId}`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIxVDEzOjIyOjE5LjA2MFoiLCJleHAiOiIyMDIwLTA1LTIyVDEzOjIyOjE5LjA2MFoifQ.tP9NiVbcrhYNxCzsLqDGlBMuhnWPxYQuN_ADNcUAfjg`,
      },
    });
  },
};
