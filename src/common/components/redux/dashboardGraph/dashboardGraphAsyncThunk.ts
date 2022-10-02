import { createAsyncThunk } from "@reduxjs/toolkit";
import admin from "../../../../modules/service/admin";

const fetchDashboardGraph = createAsyncThunk("dashboard/fetchDashboardGraph", async (duration: string) =>{
    return admin.getDashboardGraph(duration)
    .then((res) => res.data)
    .catch((err) => err.data)
})

export default fetchDashboardGraph
