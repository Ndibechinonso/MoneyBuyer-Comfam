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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardSummary.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchDashboardSummary.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          Object.keys(state).forEach(key => {
            if(key.toString() !== "loading" && key.toString() !== "error"){
              state[key] = action.payload[key]
            }
          })
        }
      )
      .addCase(fetchDashboardSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const { resetDashboard } = slice.actions;
export default slice.reducer;
