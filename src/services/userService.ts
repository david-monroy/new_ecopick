import { API_URL } from "./config";

export default {
  getUser(userId: number) {
    return API_URL.get(`/user/${userId}`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIxVDIwOjAzOjMxLjEwMloiLCJleHAiOiIyMDIwLTA1LTIyVDIwOjAzOjMxLjEwMloifQ.poUKL-IJjepDcHfYmt1zZRK1cvj7FvzXT5bo0C0b3eY`,
      },
    });
  },
};
