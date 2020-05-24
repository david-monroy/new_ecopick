import { API_URL } from "./config";

export default {
  getAllShipments() {
    return API_URL.get(`/shipment`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};
