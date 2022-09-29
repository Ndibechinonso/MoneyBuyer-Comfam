import { createAsyncThunk } from "@reduxjs/toolkit";
import admin from "../../../../modules/service/admin";

export const fetchAllBanks = createAsyncThunk(
  "wallet/fetchAllBanks",
  async () => {
    return admin
      .getAllBanks()
      .then((res) => res.data.data)
      .catch((err) => console.log(err));
  }
);
export const fetchWalletInfo = createAsyncThunk(
  "wallet/fetchWalletInfo",
  async () => {
    return admin
      .getWalletBalance()
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
);
