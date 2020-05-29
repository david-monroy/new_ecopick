import { API_URL } from "./config";

export default {
  getShipment(trackingId: string) {
    return API_URL.get(`/shipment/${trackingId}`);
  },
  getRoute(trackingId: string) {
    return API_URL.get(`/shipment/${trackingId}/route`);
  },
  getLatLon(direction: string) {
    return API_URL.post(`/location/latLon`, { direction: direction });
  },
};
