import { API_URL } from "./config";

export default {
  getInvoice(trackingId: any) {
    return API_URL.get(`/shipment/${trackingId}/invoice`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTE1VDEyOjUzOjQ4Ljc5MloiLCJleHAiOiIyMDIwLTA1LTE2VDEyOjUzOjQ4Ljc5MloifQ.gAq2dxRY39J1nPNr0vVr6tLAq0RM9RlU7CsjstjQ298`,
      },
    });
  },
  sendInvoice(formData: FormData) {
    return API_URL.post(`/user/sendAttachment`, formData, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTE1VDEyOjUzOjQ4Ljc5MloiLCJleHAiOiIyMDIwLTA1LTE2VDEyOjUzOjQ4Ljc5MloifQ.gAq2dxRY39J1nPNr0vVr6tLAq0RM9RlU7CsjstjQ298`,
      },
    });
  },
};
