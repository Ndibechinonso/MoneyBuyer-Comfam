import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DisputesDataType } from "../types";
import { fetchAllDisputes } from "./disputesAsyncThunk";
const initialState: DisputesDataType = {
    loading: false,
    error: "",
    disputes: [],
    singleDispute: {} as any,
    count: 0,
    limit: "",
    skip: "",
    page: 0
}

const slice = createSlice({
    name: "disputes",
    initialState,
    reducers: {
        changePageNumber: (state, action: PayloadAction<number>) =>{
            state.page = action.payload
        },
        updateSingleDispute: (state, action: PayloadAction<any>)=>{
            state.singleDispute = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchAllDisputes.pending, (state) =>{
           state.loading = true
           state.disputes = []
        })
        .addCase(fetchAllDisputes.fulfilled, (state, action: PayloadAction<DisputesDataType>) =>{
            state.loading = false
            state.limit = action.payload?.limit
            state.count = action.payload?.count
            state.disputes = action.payload?.disputes

        })
        .addCase(fetchAllDisputes.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message || "something went wrong"
        })
    },
})

export const {changePageNumber, updateSingleDispute} = slice.actions
export default slice.reducer