import ENDPOINTS from "../../../https/endpoints";
import { makeUnauthorizedRequestWithHeadersAndPayload } from "../../../https/http";
import { HTTPResponse } from "../../../https/http";

const auth =  {
  async registerBuyer(body: any)  : Promise<HTTPResponse> {
    const { method, url } = ENDPOINTS.auth.register;
    return makeUnauthorizedRequestWithHeadersAndPayload( method, url, body );
  },
  async loginBuyer(body: any) : Promise<HTTPResponse>  {
    const { method, url } = ENDPOINTS.auth.login;
    return makeUnauthorizedRequestWithHeadersAndPayload( method, url, body );
  },
  async verifyBuyer(body: any) : Promise<HTTPResponse>  {
    const { method, url } = ENDPOINTS.auth.verify_user;
    return makeUnauthorizedRequestWithHeadersAndPayload( method, url, body );
  },
  async resendVerifyBuyer(body: any) : Promise<HTTPResponse>  {
    const { method, url } = ENDPOINTS.auth.resend_code;
    return makeUnauthorizedRequestWithHeadersAndPayload( method, url, body );
  },
  async resetPassword(body: any) : Promise<HTTPResponse>  {
    const { method, url } = ENDPOINTS.auth.reset_password;
    return makeUnauthorizedRequestWithHeadersAndPayload( method, url, body );
  },
  async changePassword(body: any) : Promise<HTTPResponse>  {
    const { method, url } = ENDPOINTS.auth.change_password;
    return makeUnauthorizedRequestWithHeadersAndPayload( method, url, body );
  },
  async verifyBuyerBvn(body: any)  : Promise<HTTPResponse> {
    const { method, url } = ENDPOINTS.auth.verify_bvn;
    return makeUnauthorizedRequestWithHeadersAndPayload( method, url, body );
  },
  async completeBuyerProfile(body: any) : Promise<HTTPResponse>  {
    const { method, url } = ENDPOINTS.auth.complete_profile;
    return makeUnauthorizedRequestWithHeadersAndPayload( method, url, body );
  },
};

export default auth;
