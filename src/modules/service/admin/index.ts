import ENDPOINTS from "../../../https/endpoints";
import { httpRequest } from "../../../https/http";

const admin = {
  async newTransaction(body: any) {
    const { method, url } = ENDPOINTS.transaction.new_transaction;

    return httpRequest({ url, method, body, isAuth: true });
  },
  async acceptTransaction(id: string) {
    const method = ENDPOINTS.transaction.accept_transaction.method;
    const url = ENDPOINTS.transaction.accept_transaction.url(id);
    return httpRequest({ url, method, isAuth: true });
  },
  async rejectTransaction(id: string, body: any) {
    const method = ENDPOINTS.transaction.reject_transaction.method;
    const url = ENDPOINTS.transaction.reject_transaction.url(id);

    return httpRequest({ url, method, body, isAuth: true });
  },
  async deleteTransaction(id: string) {
    const method = ENDPOINTS.transaction.delete_transaction.method;
    const url = ENDPOINTS.transaction.delete_transaction.url(id);
    return httpRequest({ url, method, isAuth: true });
  },
  async getAllTransaction() {
    const { method, url } = ENDPOINTS.transaction.all_transaction;
    return httpRequest({ url, method, isAuth: true });
  },
  async confirmDelivery(id: string) {
    const method = ENDPOINTS.transaction.confirm_delivery.method;
    const url = ENDPOINTS.transaction.confirm_delivery.url(id);
    return httpRequest({ url, method, isAuth: true });
  },
  async searchForTransaction(id: string) {
    const method = ENDPOINTS.transaction.search_transactions.method;
    const url = ENDPOINTS.transaction.search_transactions.url(id);
    return httpRequest({ url, method, isAuth: true });
  },
};

export default admin;
