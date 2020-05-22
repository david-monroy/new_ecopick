import { API_URL } from "./config";

export default {
  getAllShipments() {
    return API_URL.get(`/shipment`,{
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIxVDAxOjUwOjUxLjIxOVoiLCJleHAiOiIyMDIwLTA1LTIyVDAxOjUwOjUxLjIyMVoifQ.z78b95WsqpL3O2o4ZBvKd3PEmVDvNAIn0WdgBJwxj_4`,
      },
    });
  },
};
