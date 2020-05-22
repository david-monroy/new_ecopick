import { API_URL } from "./config";

export default {
  getInvoice(trackingId: any) {
    return API_URL.get(`/shipment/${trackingId}/invoice`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIxVDEzOjIyOjE5LjA2MFoiLCJleHAiOiIyMDIwLTA1LTIyVDEzOjIyOjE5LjA2MFoifQ.tP9NiVbcrhYNxCzsLqDGlBMuhnWPxYQuN_ADNcUAfjg`,
      },
    });
  },
  sendInvoice(formData: FormData) {
    return API_URL.post(`/user/sendAttachment`, formData, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTIxVDEzOjIyOjE5LjA2MFoiLCJleHAiOiIyMDIwLTA1LTIyVDEzOjIyOjE5LjA2MFoifQ.tP9NiVbcrhYNxCzsLqDGlBMuhnWPxYQuN_ADNcUAfjg`,
      },
    });
  },
};
