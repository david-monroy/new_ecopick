import { API_URL } from "./config";

export default {
  getShipment(trackingId: string) {
    return API_URL.get(`/shipment/${trackingId}`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIxVDAwOjA0OjI4LjkxMVoiLCJleHAiOiIyMDIwLTA1LTIyVDAwOjA0OjI4LjkxMVoifQ.4i2PLd81GM932_-2tM4ERp6x3XM9p28I-J8IHfwIQIs`,
      },
    });
  },
  getRoute(trackingId: string) {
    return API_URL.get(`/shipment/${trackingId}/route`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIxVDAwOjA0OjI4LjkxMVoiLCJleHAiOiIyMDIwLTA1LTIyVDAwOjA0OjI4LjkxMVoifQ.4i2PLd81GM932_-2tM4ERp6x3XM9p28I-J8IHfwIQIs`,
      },
    });
  },
  getLatLon(direction: string) {
    return API_URL.post(
      `/location/latLon`,
      { direction: direction },
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIxVDAwOjA0OjI4LjkxMVoiLCJleHAiOiIyMDIwLTA1LTIyVDAwOjA0OjI4LjkxMVoifQ.4i2PLd81GM932_-2tM4ERp6x3XM9p28I-J8IHfwIQIs`,
        },
      }
    );
  },
};
