import axios from "axios";

export const API_URL = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default API_URL;
