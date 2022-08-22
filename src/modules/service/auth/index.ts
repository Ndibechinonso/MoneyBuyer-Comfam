import ENDPOINTS from "../../../https/endpoints";
import { httpRequest } from "../../../https/http";

const auth = {
  async registerBuyer(body: any) {
    const { method, url } = ENDPOINTS.auth.register;
    return httpRequest({ url, method, body });
  },
  async loginBuyer(body: any) {
    const { method, url } = ENDPOINTS.auth.login;
    return httpRequest({ url, method, body });
  },
  async verifyBuyer(body: any) {
    const { method, url } = ENDPOINTS.auth.verify_user;
    return httpRequest({ url, method, body });
  },
  async resetPassword(body: any) {
    const { method, url } = ENDPOINTS.auth.reset_password;
    return httpRequest({ url, method, body });
  },
  async changePassword(body: any) {
    const { method, url } = ENDPOINTS.auth.change_password;
    return httpRequest({ url, method, body });
  },
  async verifyBuyerBvn(body: any) {
    const { method, url } = ENDPOINTS.auth.verify_bvn;
    return httpRequest({ url, method, body });
  },
  async completeBuyerProfile(body: any) {
    const { method, url } = ENDPOINTS.auth.complete_profile;
    return httpRequest({ url, method, body });
  },
};

export default auth;
