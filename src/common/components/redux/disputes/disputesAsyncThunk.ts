import { createAsyncThunk } from "@reduxjs/toolkit";
import admin from "../../../../modules/service/admin";

export const fetchAllDisputes = createAsyncThunk("disputes/fetchAllDisputes", async ({ startDate, endDate }: { startDate: string, endDate: string }) => {
    return admin.getDisputes(0, 10, startDate, endDate)
    .then((res) => console.log(res, "disputes"))
    .catch((err) => err)
})