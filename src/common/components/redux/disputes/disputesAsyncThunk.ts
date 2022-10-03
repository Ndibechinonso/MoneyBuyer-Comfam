import { createAsyncThunk } from "@reduxjs/toolkit";
import admin from "../../../../modules/service/admin";

export const fetchAllDisputes = createAsyncThunk("disputes/fetchAllDisputes", async ({ page, startDate, endDate }: {page: number,  startDate?: string, endDate?: string }) => {
    return admin.getDisputes(page, 10, startDate, endDate)
    .then((res) =>  res.data)
    .catch((err) => err)
})