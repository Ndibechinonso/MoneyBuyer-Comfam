import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { fetchAllDisputes } from "./disputes/disputesAsyncThunk";
import { fetchNotifications } from "./notifications/notificationsAsyncThunk";
import { store } from "./store";
import {
  updateDate,
  updateFilterParam,
  updateSearchParam,
} from "./tableFilter/tableFilterSlice";
import { fetchAllTransactions } from "./transaction/transactionAsyncThunk";

const updateTableMiddleware = createListenerMiddleware();

updateTableMiddleware.startListening({
  matcher: isAnyOf(
    updateDate,
    updateSearchParam,
    updateFilterParam
    // resetAllParams
  ),
  effect: async (state, listenerApi) => {
    const { endDate, search, startDate, filter, type } =
      store.getState().tableFilter;

    if (type === "Transaction" && (search || startDate || filter)) {
      listenerApi.dispatch(
        fetchAllTransactions({ page: 1, endDate, search, startDate, filter })
      );
    }
    if (type === "Dispute" && (search || startDate || filter)) {
      listenerApi.dispatch(
        fetchAllDisputes({ page: 1, endDate, search, startDate, filter })
      );
    }
  },
});

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
