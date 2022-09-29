import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { TransactionDataType } from "../types";
import {
  acceptATransaction,
  createNewTransaction,
  fetchAllTransactions,
} from "./transactionAsyncThunk";

const initialState: TransactionDataType = {
  loading: false,
  error: "",
  transactions: [],
  singleTransaction: {} as any,
  count: 0,
  limit: "",
  skip: "",
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
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllTransactions.pending, (state) => {
        state.loading = true;
        state.transactions = [];
      })
      .addCase(
        fetchAllTransactions.fulfilled,
        (state, action: PayloadAction<TransactionDataType>) => {
          state.loading = false;
          state.limit = action.payload?.limit;
          state.count = action.payload?.count;
          state.transactions = action.payload?.transactions;
        }
      )
      .addCase(fetchAllTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "something went wrong";
      })
      .addMatcher(
        isAnyOf(createNewTransaction.pending, acceptATransaction.pending),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          createNewTransaction.fulfilled,
          createNewTransaction.rejected,
          acceptATransaction.fulfilled,
          acceptATransaction.rejected
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
} = slice.actions;
export default slice.reducer;
