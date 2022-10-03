import { createAsyncThunk } from "@reduxjs/toolkit";
import admin from "../../../../modules/service/admin";
import {
  IcanceltransactionFeedback,
  ItransactionFeedback,
} from "../../../../modules/service/admin/types";
import customToast from "../../CustomToast";
import { Alerts } from "../alert/alertActions";
import { iAlert } from "../alert/types";
import { fetchNotifications } from "../notifications/notificationsAsyncThunk";
import { store } from "../store";
import { NewTransaction } from "../types";

const alert = (type: iAlert) => store.dispatch(Alerts(type));

const successHandler = (type: iAlert) => {
  const { endDate, startDate } = store.getState().tableFilter;
  const { page } = store.getState().transactions;
  if (
    type === "transactionaccepted" ||
    type === "transactioncancelled" ||
    type === "transactionrejected" ||
    type === "newtransactioncreated" ||
    type === "confirmdelivery"
  ) {
    store.dispatch(fetchNotifications(1));
  }
  store.dispatch(fetchAllTransactions({ page, startDate, endDate }));
  alert(type);
};
const errorHandler = (message: string) => {
  alert("");
  customToast(message, true);
};

export const fetchAllTransactions = createAsyncThunk(
  "transaction/fetchAllTransactions",
  async ({
    page,
    startDate,
    endDate,
  }: {
    page: number;
    startDate?: string;
    endDate?: string;
  }) => {
    return admin
      .getAllTransaction(page, 10, startDate, endDate)
      .then((res) => res.data)
      .catch((err) => err);
  }
);
export const createNewTransaction = createAsyncThunk(
  "transaction/createNewTransaction",
  async (data: NewTransaction) => {
    return admin
      .newTransaction(data)
      .then(() => successHandler("newtransactioncreated"))
      .catch((err) => errorHandler(err.message));
  }
);
export const acceptATransaction = createAsyncThunk(
  "transaction/acceptATransaction",
  async (id: string) => {
    return admin
      .acceptTransaction(id)
      .then(() => successHandler("transactionaccepted"))
      .catch((err) => errorHandler(err.message));
  }
);
export const rejectATransaction = createAsyncThunk(
  "transaction/rejectATransaction",
  async ({ id, body }: { id: string; body: IcanceltransactionFeedback }) => {
    return admin
      .rejectTransaction(id, body)
      .then(() => successHandler("transactionrejected"))
      .catch((err) => errorHandler(err.message));
  }
);
export const deleteATransaction = createAsyncThunk(
  "transaction/deleteATransaction",
  async (id: string) => {
    return admin
      .deleteTransaction(id)
      .then((res) => successHandler("transactiondeleted"))
      .catch((err) => errorHandler(err.message));
  }
);
export const confirmADelivery = createAsyncThunk(
  "transaction/confirmADelivery",
  async (id: string) => {
    return admin
      .confirmDelivery(id)
      .then(() => successHandler("deliveryconfirmed"))
      .catch((err) => errorHandler(err.message));
  }
);
export const cancelATransaction = createAsyncThunk(
  "transaction/cancelATransaction",
  async (data: IcanceltransactionFeedback) => {
    return admin
      .cancelTransaction(data)
      .then(() => successHandler("transactioncancelled"))
      .catch((err) => errorHandler(err.message));
  }
);
export const transactionFeedback = createAsyncThunk(
  "transaction/transactionFeedback",
  async (data: ItransactionFeedback) => {
    return admin
      .feedbackTransaction(data)
      .then(() => successHandler("sentfeedback"))
      .catch((err) => errorHandler(err.message));
  }
);

// export const fundATransaction = createAsyncThunk(
//   "transaction/fundATransaction",
//   async (data: IfundTransaction) => {
//     return admin
//       .fundTransaction(data)
//       .then((res) => res.data)
//       .catch((err) => err);
//   }
// );
