import { API_URL } from "./config";

export default {
  getInvoice(trackingId: string) {
    return API_URL.get(`/shipment/${trackingId}/invoice`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
  sendInvoice(formData: FormData) {
    return API_URL.post(`/user/sendAttachment`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};
