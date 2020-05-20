import { API_URL } from "./config";

export default {
  getRoute(trackingId: string) {
    return API_URL.get(`/shipment/${trackingId}/route`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIwVDEwOjQzOjE5LjEyMVoiLCJleHAiOiIyMDIwLTA1LTIxVDEwOjQzOjE5LjEyM1oifQ.SJk-Rq4FdXV1jkcC9xdDbsyZtstEvGuIGkwoXLgExjg`,
      },
    });
  },
  getLatLon(direction: string) {
    return API_URL.post(
      `/location/latLon`,
      { direction: direction },
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIwVDEwOjQzOjE5LjEyMVoiLCJleHAiOiIyMDIwLTA1LTIxVDEwOjQzOjE5LjEyM1oifQ.SJk-Rq4FdXV1jkcC9xdDbsyZtstEvGuIGkwoXLgExjg`,
        },
      }
    );
  },
};
