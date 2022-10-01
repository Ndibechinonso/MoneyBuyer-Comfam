import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { TransactionDataType } from "../types";
import * as thunk from "./transactionAsyncThunk";

const initialState: TransactionDataType = {
  loading: false,
  error: "",
  transactions: [],
  singleTransaction: {} as any,
  // count: 0,
  // limit: "",
  // skip: "",
  pagination: {
    currentPage: 0,
    dataCount: 0,
    totalPages: 0
},
  page: 0,
};

const slice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    changePageNumber: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    updateSingleTransaction: (state, action: PayloadAction<any>) => {
      state.singleTransaction = action.payload;
    },
    removeSingleTransaction: (state) => {
      state.singleTransaction = initialState.singleTransaction;
    },
    resetTransactions: (state) => {
      state.error = initialState.error;
      state.transactions = initialState.transactions;
      state.singleTransaction = initialState.singleTransaction;
      state.count = initialState.count;
      state.limit = initialState.limit;
      state.page = initialState.page;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(thunk.fetchAllTransactions.pending, (state) => {
        state.loading = true;
        state.transactions = [];
      })
      .addCase(
        thunk.fetchAllTransactions.fulfilled,
        (state, action: PayloadAction<TransactionDataType>) => {          
          state.loading = false;
          state.pagination.currentPage = action.payload?.pagination.currentPage;
          state.pagination.dataCount = action.payload?.pagination.dataCount;
          state.pagination.dataCount = action.payload?.pagination.dataCount;
          // state.limit = action.payload?.limit;
          // state.count = action.payload?.count;
          state.transactions = action.payload?.transactions;
        }
      )
      .addCase(thunk.fetchAllTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "something went wrong";
      })
      .addMatcher(
        isAnyOf(
          thunk.createNewTransaction.pending,
          thunk.acceptATransaction.pending,
          thunk.rejectATransaction.pending,
          thunk.deleteATransaction.pending,
          thunk.confirmADelivery.pending,
          thunk.cancelATransaction.pending,
          thunk.transactionFeedback.pending
        ),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          thunk.createNewTransaction.fulfilled,
          thunk.createNewTransaction.rejected,
          thunk.acceptATransaction.fulfilled,
          thunk.acceptATransaction.rejected,
          thunk.rejectATransaction.fulfilled,
          thunk.rejectATransaction.rejected,
          thunk.deleteATransaction.fulfilled,
          thunk.deleteATransaction.rejected,
          thunk.confirmADelivery.fulfilled,
          thunk.confirmADelivery.rejected,
          thunk.cancelATransaction.fulfilled,
          thunk.cancelATransaction.rejected,
          thunk.transactionFeedback.fulfilled,
          thunk.transactionFeedback.rejected
        ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const {
  changePageNumber,
  updateSingleTransaction,
  removeSingleTransaction,
  resetTransactions,
} = slice.actions;
export default slice.reducer;
