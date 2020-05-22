import { API_URL } from "./config";

export default {
  getShipment(trackingId: string) {
    return API_URL.get(`/shipment/${trackingId}`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIxVDEzOjIyOjE5LjA2MFoiLCJleHAiOiIyMDIwLTA1LTIyVDEzOjIyOjE5LjA2MFoifQ.tP9NiVbcrhYNxCzsLqDGlBMuhnWPxYQuN_ADNcUAfjg`,
      },
    });
  },
  getRoute(trackingId: string) {
    return API_URL.get(`/shipment/${trackingId}/route`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIxVDEzOjIyOjE5LjA2MFoiLCJleHAiOiIyMDIwLTA1LTIyVDEzOjIyOjE5LjA2MFoifQ.tP9NiVbcrhYNxCzsLqDGlBMuhnWPxYQuN_ADNcUAfjg`,
      },
    });
  },
  getLatLon(direction: string) {
    return API_URL.post(
      `/location/latLon`,
      { direction: direction },
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIxVDExOjAwOjQ0LjY1NVoiLCJleHAiOiIyMDIwLTA1LTIyVDExOjAwOjQ0LjY1N1oifQ.scTB-Q-Pt6quoR4i-aHZH0LLyQPkjKfHdgaWSGez45E`,
        },
      }
    );
  },
};
