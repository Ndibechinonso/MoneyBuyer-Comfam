import { createAsyncThunk } from "@reduxjs/toolkit";
import admin from "../../../../modules/service/admin";

const fetchDashboardSummary = createAsyncThunk("dashboard/fetchDashboardSummary", () =>{
    return admin.getDashboardSummary()
    .then((res) => res.data)
    .catch((err) => err.data)
})

export default fetchDashboardSummary
