import { API_URL } from "./config";

export default {
  getCharacteristics() {
    return API_URL.get("/characteristic", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
  getOptions() {
    return API_URL.get("/option", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
  getOffices() {
    return API_URL.get("/office", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
  getBaseCost() {
    return API_URL.get("/configuration/basecost", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
  sendOrder(Order: {}) {
    return API_URL.post(`/shipment`, Order, {
      headers: {
        Authorization: { "Content-Type": "application/json" },
      },
    });
  },
  verifyDirection(Order: {}) {
    return API_URL.post(`/direction/verify`, Order, {
      headers: {
        Authorization: { "Content-Type": "application/json" },
      },
    });
  },
};
