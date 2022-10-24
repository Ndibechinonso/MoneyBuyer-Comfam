import { createListenerMiddleware /* isAnyOf */ } from "@reduxjs/toolkit";
import { fetchNotifications } from "./notifications/notificationsAsyncThunk";
import { store } from "./store";

const updateTableMiddleware = createListenerMiddleware();

updateTableMiddleware.startListening({
  type: "notifications/deleteNotification/fulfilled",
  effect: async (state, listenApi) => {
    const { currentPage, totalPages, dataCount } =
      store.getState().notification.pagination;
    listenApi.dispatch(
      fetchNotifications(
        totalPages === currentPage && dataCount % 10 === 1
          ? totalPages - 1
          : currentPage
      )
    );
  },
});

export default updateTableMiddleware;
