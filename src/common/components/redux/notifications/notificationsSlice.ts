import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationsProps } from "../types";
import { fetchNotifications } from "./notificationsAsyncThunk";

const initialState: NotificationsProps = {
    loading: false,
   notifications: [],
   pagination: {
    currentPage: 0,
    dataCount: 0,
    totalPages: 0
},
page: 0
}

const slice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        changePageNumber: (state, action: PayloadAction<number>) =>{
            state.page = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNotifications.pending, (state) =>{
            state.loading = true;
        })
        .addCase(fetchNotifications.fulfilled, (state, action) => {            
            state.loading = false;            
            state.pagination.currentPage = action.payload?.pagination.currentPage;
            state.pagination.dataCount = action.payload?.pagination.dataCount;
            state.pagination.totalPages = action.payload?.pagination.totalPages;
            state.notifications = action.payload.notifications
        })
        .addCase(fetchNotifications.rejected, (state, action) =>{
            state.loading = false
        })
    }
})

export const {changePageNumber} = slice.actions

export default slice.reducer