import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { fetchAllDisputes } from "./disputes/disputesAsyncThunk";
import { store } from "./store";
import {
  updateDate,
  updateFilterParam,
  updateSearchParam,
} from "./tableFilter/tableFilterSlice";
import { fetchAllTransactions } from "./transaction/transactionAsyncThunk";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
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

export default listenerMiddleware;
