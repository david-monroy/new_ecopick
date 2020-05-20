import { API_URL } from "./config";

export default {
  getUser(userId: number) {
    return API_URL.get(`/user/${userId}`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIwVDAyOjQ5OjQyLjU1NVoiLCJleHAiOiIyMDIwLTA1LTIxVDAyOjQ5OjQyLjU1NVoifQ.gey-OZHDZdUJ7sIeJVQ5qVtVMZpbMRloPAlryR32GcQ`,
      },
    });
  },
};
