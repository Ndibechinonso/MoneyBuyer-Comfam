import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllBanks, fetchWalletInfo } from "./fundsAndWalletAsyncThunk";
import { IfundsAndWallet } from "./types";

const initialState: IfundsAndWallet = {
  loading: false,
  error: "",
  banks: [],
  wallet: {
    id: "",
    user_id: "",
    type: "USER-WALLET",
    transaction_id: null,
    lean: false,
    balance: 0,
    created_at: "",
    updated_at: "",
    transactions: [],
  },
};

const slice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    resetWallet: (state) => {
      state.wallet = initialState.wallet;
      state.loading = initialState.loading;
      state.error = initialState.error;
      state.banks = initialState.banks;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllBanks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllBanks.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.banks = action.payload;
      })
      .addCase(fetchAllBanks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "something went wrong";
      })
      .addCase(fetchWalletInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchWalletInfo.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.wallet = action.payload;
        }
      )
      .addCase(fetchWalletInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "something went wrong";
      });
  },
});

export const {resetWallet} = slice.actions
export default slice.reducer;
