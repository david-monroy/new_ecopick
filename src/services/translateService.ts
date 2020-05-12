import { API_URL } from "./config";

export default {
  translate(lang: any) {
    return API_URL.post(`/language/${lang}`);
  },
};
