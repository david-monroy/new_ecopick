import { API_URL } from "./config";

export default {
  getAllShipments(userID: number) {
    return API_URL.get(`/shipment/byUser/${userID}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};
