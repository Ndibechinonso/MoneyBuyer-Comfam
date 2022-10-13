import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { TransactionDataType } from "../types";
import * as thunk from "./transactionAsyncThunk";

const initialState: TransactionDataType = {
  loading: false,
  error: "",
  transactions: [],
  singleTransaction: {} as any,
  singleTransactionImages: [],
  pagination: {
    currentPage: 0,
    dataCount: 0,
    totalPages: 0,
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
    removeTransactionImages: (state) => {
      state.singleTransactionImages = initialState.singleTransactionImages;
    },
  
  },
  extraReducers(builder) {
    builder
      .addCase(thunk.fetchAllTransactions.pending, (state) => {
        state.loading = true;
        // state.transactions = [];
      })
      .addCase(
        thunk.fetchAllTransactions.fulfilled,
        (state, action: PayloadAction<TransactionDataType>) => {
          Object.keys(state.pagination).forEach(key => {
            state.pagination[key] = action.payload.pagination[key]
          })
          state.transactions = action.payload?.transactions;
        }
      )
      .addCase(thunk.fetchTransactionImages.fulfilled, (state, action) => {
        state.singleTransactionImages.push(action.payload)
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
          thunk.transactionFeedback.rejected,
          thunk.fetchAllTransactions.fulfilled,
          thunk.fetchAllTransactions.rejected,
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
  removeTransactionImages,
  // resetTransactions,
} = slice.actions;
export default slice.reducer;
