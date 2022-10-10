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
    readNotificationCount: 0,
    totalNotifications: 0,
    unreadNotificationCount: 0,
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
      .addCase(
        fetchNotifications.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          Object.keys(payload).forEach((key) => {
            state[key] = payload[key];
          });
        }
      )
      .addCase(deleteNotification.pending, (state) => {
        state.loading = true;
      })
      // .addCase(
      //   deleteNotification.fulfilled,
      //   (state, action: PayloadAction<any>) => {
        //   const temp = state.notifications.find(
        //     (item) => item._id === action.payload._id
        //   );
        //   state.notifications = state.notifications.filter(
        //     (item) => item._id !== action.payload._id
        //   );
        //   state.pagination.dataCount--;
        //   temp.read
        //   ? state.pagination.unreadNotificationCount--
        //   : state.pagination.readNotificationCount--
      //   }
      // )
      .addCase(readNotification.fulfilled, (state, action) => {
        state.notifications = state.notifications.map((item) =>
          item._id === action.payload._id
            ? { ...item, read: action.payload.read }
            : item
        );
        state.pagination.readNotificationCount--;
        state.pagination.unreadNotificationCount++;
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
        isAnyOf(
          fetchNotifications.fulfilled,
          fetchNotifications.rejected,
          deleteNotification.fulfilled,
          deleteNotification.rejected
        ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const { changePageNumber, removeNotificationItem } = slice.actions;

export default slice.reducer;
