import { createAsyncThunk } from "@reduxjs/toolkit";
import admin from "../../../../modules/service/admin";

export const fetchAllDisputes = createAsyncThunk("disputes/fetchAllDisputes", async ({ page, startDate, endDate, filter, search }: {page: number,  startDate?: string, endDate?: string, filter?: string, search?: string }) => {
    return admin.getDisputes(page, 10, startDate, endDate, filter, search)
    .then((res) =>  res.data)
    .catch((err) => err)
})