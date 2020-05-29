import { API_URL } from "./config";

export default {
  getDiscounts(userID: number) {
    return API_URL.get(`/discount/${userID}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};
