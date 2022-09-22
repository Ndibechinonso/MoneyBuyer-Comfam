import ENDPOINTS from "../../../https/endpoints";
import {
  makeAuthorizedImageDownload,
  makeAuthorizedImageUpload,
  makeAuthorizedRequestWithHeadersAndPayload,
} from "../../../https/http";
import {
  IcanceltransactionFeedback,
  IcreateDispute,
  ItransactionFeedback,
} from "./types";
// import { HTTPResponse } from "../../../https/http";
const admin = {
  async getUserInfo() {
    const { method, url } = ENDPOINTS.auth.get_user_info;
    return makeAuthorizedRequestWithHeadersAndPayload(method, url);
  },
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
  async feedbackTransaction(body: ItransactionFeedback) {
    const { method, url } = ENDPOINTS.transaction.feedback_transactions;
    return makeAuthorizedRequestWithHeadersAndPayload(method, url, body);
  },
  async getAllTransaction() {
    const { method, url } = ENDPOINTS.transaction.all_transaction;
    return makeAuthorizedRequestWithHeadersAndPayload(method, url);
  },
  async cancelTransaction(body: IcanceltransactionFeedback) {
    const { method, url } = ENDPOINTS.transaction.cancel_transaction;
    return makeAuthorizedRequestWithHeadersAndPayload(method, url, body);
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
  async uploadImage(file: FileList) {
    const url = ENDPOINTS.file_handling.upload_s3_image.url(file.item(0).name);
    return makeAuthorizedImageUpload(url, file);
  },
  async getImage(fileName: string) {
    const url = ENDPOINTS.file_handling.download_s3_image.url(fileName);
    return makeAuthorizedImageDownload(url);
  },
  async sendFeedback(body: any) {
    const { method, url } = ENDPOINTS.send_feedback;
    return makeAuthorizedRequestWithHeadersAndPayload(method, url, body);
  },
  async changePasswordLoggedIn(body: any) {
    const { method, url } = ENDPOINTS.auth.update_password;
    return makeAuthorizedRequestWithHeadersAndPayload(method, url, body);
  },
  async updateProfileImage(body: any) {
    const { method, url } = ENDPOINTS.auth.update_profile_image;
    return makeAuthorizedRequestWithHeadersAndPayload(method, url, body);
  },
  async updateNotification(body: any) {
    const { method, url } = ENDPOINTS.auth.update_notification_settings;
    return makeAuthorizedRequestWithHeadersAndPayload(method, url, body);
  },
  async createDispute(body: IcreateDispute) {
    const { method, url } = ENDPOINTS.disputes.create_dispute;
    return makeAuthorizedRequestWithHeadersAndPayload(method, url, body);
  },
  async getDisputes(skips: number, limit: number, startDate?: string, endDate?: string) {    
    const { method, url: makeUrl } = ENDPOINTS.disputes.get_disputes;
    const url = makeUrl(skips, limit, startDate, endDate);
    return makeAuthorizedRequestWithHeadersAndPayload(method, url);
  },
  async getSingleDispute(id: string) {
    const { method, url: makeUrl } = ENDPOINTS.disputes.get_a_dispute;
    const url = makeUrl(id);
    return makeAuthorizedRequestWithHeadersAndPayload(method, url);
  },
  async getDashboardSummary() {
    const { method, url } = ENDPOINTS.dashboard.dashboard_summary;
    return makeAuthorizedRequestWithHeadersAndPayload(method, url);
  },
};

export default admin;
