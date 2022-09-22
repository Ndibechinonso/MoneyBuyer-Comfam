import { createSlice } from "@reduxjs/toolkit";
import { DisputesDataType } from "../types";
import { fetchAllDisputes } from "./disputesAsyncThunk";
const initialState: DisputesDataType = {
    loading: false,
    error: "",
    _id: "",
    seller: {} as any,
    buyer: {
        _id: "",
        email: "",
        first_name: "",
        user_type: "",
        last_name: "",
        createdAt: "",
        updatedAt: "",
        wallet_id: "",
    },
    transaction: "",
    dispute_reason: "",
    quantity: 0,
    images: [],
    status: "",
    createdAt: "",
    updatedAt: "",
}

const slice = createSlice({
    name: "disputes",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllDisputes.pending, (state) =>{
state.loading = true
        })
        .addCase(fetchAllDisputes.fulfilled, (state, action) =>{
            state.loading = false

        })
        .addCase(fetchAllDisputes.rejected, (state, action)=>{
            state.loading = false
        })
    },
})

export default slice.reducer