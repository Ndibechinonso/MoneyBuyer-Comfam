import { createAsyncThunk } from "@reduxjs/toolkit";
import admin from "../../../../modules/service/admin";

export const fetchAllDisputes = createAsyncThunk("disputes/fetchAllDisputes", async ({ page, startDate, endDate, search, filter }: {page: number,  startDate?: string, endDate?: string, search?: string, filter?: string }) => {
    return admin.getDisputes(page, 10, startDate, endDate)
    .then((res) =>  res.data)
    .catch((err) => err)
})