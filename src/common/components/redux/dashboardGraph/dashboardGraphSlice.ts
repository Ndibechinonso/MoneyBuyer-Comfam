
import type { DashboardGraphProps } from "../types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import fetchDashboardGraph from "./dashboardGraphAsyncThunk"

 const initialState: DashboardGraphProps = {
    loading: false,
    error: "",
    graphData: {} as any,
    startDate: "",
    endDate: ""
}

const slice = createSlice({
    name: "dashboardGraph",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchDashboardGraph.pending, (state) =>{
            state.loading = true
        } )
        .addCase(fetchDashboardGraph.fulfilled, (state, action: PayloadAction<any>) =>{   
            state.loading = false;
            state.graphData = action.payload.graph;
            state.startDate = action.payload?.startDate
            state.endDate = action.payload?.endDate
        })
        .addCase(fetchDashboardGraph.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.error.message
        })
    }
})


export default slice.reducer