import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchAllBanks
} from "./getAllBanksAsyncThunk";
import { IfundsAndWallet } from "./types";

const initialState = {
  loading: false,
  error: "",
  banks: [],
  bankInfo: {
    bank_code: "",
    bank_name: "",
  },
};

const slice = createSlice({
  name: "verification",
  initialState,
  reducers: {
    selectABank: (state, action: PayloadAction<any>) => {
      state.bankInfo.bank_code = action.payload.code;
      state.bankInfo.bank_name = action.payload.name;
    }
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
  },
});

export const {
  selectABank
} = slice.actions;

export default slice.reducer;
