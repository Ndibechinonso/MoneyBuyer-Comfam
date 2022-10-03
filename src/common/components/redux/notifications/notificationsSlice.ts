import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { NotificationsProps } from "../types";
import {
  deleteNotification,
  fetchDispute,
  fetchNotifications,
  fetchTransaction,
  readNotification,
} from "./notificationsAsyncThunk";

const initialState: NotificationsProps = {
  loading: false,
  notification: { loading: false, item: {} },
  notifications: [],
  pagination: {
    currentPage: 0,
    dataCount: 0,
    totalPages: 0,
  },
  page: 0,
};

const slice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    changePageNumber: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    removeNotificationItem: (state) => {
      state.notification.item = initialState.notification.item;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.pagination.currentPage = action.payload?.pagination.currentPage;
        state.pagination.dataCount = action.payload?.pagination.dataCount;
        state.pagination.totalPages = action.payload?.pagination.totalPages;
        state.notifications = action.payload.notifications;
      })
      .addCase(deleteNotification.pending, (state) => {
        state.loading = true
      })
      .addCase(readNotification.fulfilled, (state, action) => {
        state.notifications = state.notifications.map((item) =>
          item._id === action.payload._id
            ? { ...item, read: action.payload.read }
            : item
        );
      })
      .addMatcher(
        isAnyOf(fetchTransaction.pending, fetchDispute.pending),
        (state) => {
          state.notification.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(fetchTransaction.fulfilled, fetchDispute.fulfilled),
        (state, action) => {
          state.notification.item = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTransaction.fulfilled,
          fetchDispute.fulfilled,
          fetchTransaction.rejected,
          fetchDispute.rejected
        ),
        (state) => {
          state.notification.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(fetchNotifications.fulfilled, fetchNotifications.rejected),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(deleteNotification.fulfilled, deleteNotification.rejected),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const { changePageNumber, removeNotificationItem } = slice.actions;

export default slice.reducer;