import { createSlice } from "@reduxjs/toolkit";
import { DisputesDataType } from "../types";
import { fetchAllDisputes } from "./disputesAsyncThunk";
const initialState: DisputesDataType = {
    loading: false,
    error: "",
    disputes: [],
    count: 0,
    limit: "",
    skip: "",
    page: 0
}

const slice = createSlice({
    name: "disputes",
    initialState,
    reducers: {
        changePageNumber: (state, action) =>{
            state.page = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchAllDisputes.pending, (state) =>{
           state.loading = true
           state.disputes = []
        })
        .addCase(fetchAllDisputes.fulfilled, (state, action) =>{
            state.loading = false
            state.limit = action.payload?.limit
            state.count = action.payload?.count
            state.disputes = action.payload?.disputes

        })
        .addCase(fetchAllDisputes.rejected, (state, action)=>{
            state.loading = false
        })
    },
})

export const {changePageNumber} = slice.actions
export default slice.reducer