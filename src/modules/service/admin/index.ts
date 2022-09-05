import ENDPOINTS from "../../../https/endpoints";
import { makeAuthorizedRequestWithHeadersAndPayload } from "../../../https/http";
// import { HTTPResponse } from "../../../https/http";
const admin = {
  async newTransaction(body: any) {
    const { method, url } = ENDPOINTS.transaction.new_transaction;

    return makeAuthorizedRequestWithHeadersAndPayload(method, url, body);
  },
  async acceptTransaction(id: string) {
    const method = ENDPOINTS.transaction.accept_transaction.method;
    const url = ENDPOINTS.transaction.accept_transaction.url(id);
    return makeAuthorizedRequestWithHeadersAndPayload(method, url);
  },
  async rejectTransaction(id: string, body: any) {
    const method = ENDPOINTS.transaction.reject_transaction.method;
    const url = ENDPOINTS.transaction.reject_transaction.url(id);

    return makeAuthorizedRequestWithHeadersAndPayload(method, url, body);
  },
  async deleteTransaction(id: string) {
    const method = ENDPOINTS.transaction.delete_transaction.method;
    const url = ENDPOINTS.transaction.delete_transaction.url(id);
    return makeAuthorizedRequestWithHeadersAndPayload(method, url);
  },
  async getAllTransaction() {
    const { method, url } = ENDPOINTS.transaction.all_transaction;
    return makeAuthorizedRequestWithHeadersAndPayload(method, url);
  },
  async confirmDelivery(id: string) {
    const method = ENDPOINTS.transaction.confirm_delivery.method;
    const url = ENDPOINTS.transaction.confirm_delivery.url(id);
    return makeAuthorizedRequestWithHeadersAndPayload(method, url);
  },
  async searchForTransaction(id: string) {
    const method = ENDPOINTS.transaction.search_transactions.method;
    const url = ENDPOINTS.transaction.search_transactions.url(id);
    return makeAuthorizedRequestWithHeadersAndPayload(method, url);
  },
  async uploadImage(fileName: string) {
    const method = ENDPOINTS.file_handling.upload_s3_image.method;
    const url = ENDPOINTS.file_handling.upload_s3_image.url(fileName);
    return makeAuthorizedRequestWithHeadersAndPayload(method, url);
  },
};

export default admin;
