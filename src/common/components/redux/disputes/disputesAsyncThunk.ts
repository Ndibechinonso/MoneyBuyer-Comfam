import { createAsyncThunk } from "@reduxjs/toolkit";
import admin from "../../../../modules/service/admin";
import customToast from "../../CustomToast";

export const fetchAllDisputes = createAsyncThunk("disputes/fetchAllDisputes", async ({ page, startDate, endDate, search, filter }: {page: number,  startDate?: string, endDate?: string, search?: string, filter?: string }) => {
    return admin.getDisputes(page, 10, startDate, endDate, search, filter)
    .then((res) =>  res.data)
    .catch((err) => err)
})

export const fetchDisputeImages = createAsyncThunk(
    "dispute/itemImages",
    async (data: string) => {
      return admin
        .getImage(data)
        .then((res) => res)
        .catch((err) => customToast(err.message,true));
    }
  );