import { createAsyncThunk } from "@reduxjs/toolkit";
import admin from "../../../../modules/service/admin";

export const fetchAllBanks = createAsyncThunk(
  "verification/fetchAllBanks",
  async () => {
    return admin
      .getAllBanks()
      .then((res) => res.data.data)
      .catch((err) => err);
  }
);
