import { createAsyncThunk } from "@reduxjs/toolkit";
import admin from "../../../../modules/service/admin";
import { ImarkNotification } from "../../../../modules/service/admin/types";
import customToast from "../../CustomToast";

const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (page: number) => {
    return admin
      .getNotifications(page, 10)
      .then((res) => res.data)
      .catch((err) => customToast(err.message,true));
  }
);
const fetchTransaction = createAsyncThunk(
  "notifications/fetchNotificationitem/transaction",
  async (id: string) => {
    return admin
      .getSingleTransaction(id)
      .then((res) => res.data)
      .catch((err) => customToast(err.message,true));
  }
);
const fetchDispute = createAsyncThunk(
  "notifications/fetchNotificationitem/dispute",
  async (id: string) => {
    return admin
      .getSingleDispute(id)
      .then((res) => res.data)
      .catch((err) => customToast(err.message,true));
  }
);
const readNotification = createAsyncThunk(
  "notifications/readNotification",
  async (body: ImarkNotification) => {
    return admin
      .markNotification(body)
      .then((res) => res.data)
      .catch((err) => customToast(err.message,true));
  }
);
const deleteNotification = createAsyncThunk(
  "notifications/deleteNotification",
  async (id: string) => {
    return admin
      .deleteNotification(id)
      .then((res) => res.data)
      .catch((err) => customToast(err.message,true));
  }
);

export {
  fetchNotifications,
  readNotification,
  deleteNotification,
  fetchTransaction,
  fetchDispute,
};
