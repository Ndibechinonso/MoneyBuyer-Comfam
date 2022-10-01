import type { DashboardProps } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchDashboardSummary from "./dashboardAsyncThunk";

const initialState: DashboardProps = {
  loading: false,
  error: "",
  totalTransactions: 0,
  openTransactions: 0,
  settledTransactions: 0,
  transactionHistory: [],
  contactList: [],
  activeContracts: [],
};

const slice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    resetDashboard: (state) => {
      state.error = initialState.error;
      state.totalTransactions = initialState.totalTransactions;
      state.openTransactions = initialState.openTransactions;
      state.settledTransactions = initialState.settledTransactions;
      state.transactionHistory = initialState.transactionHistory;
      state.contactList = initialState.contactList;
      state.activeContracts = initialState.activeContracts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardSummary.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchDashboardSummary.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.totalTransactions = action.payload?.totalTransactions;
          state.openTransactions = action.payload?.openTransactions;
          state.settledTransactions = action.payload?.settledTransactions;
          state.transactionHistory = action.payload?.transactionHistory;
          state.contactList = action.payload?.contactList;
          state.activeContracts = action.payload?.activeContracts;
        }
      )
      .addCase(fetchDashboardSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetDashboard } = slice.actions;
export default slice.reducer;
