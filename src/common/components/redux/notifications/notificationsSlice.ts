import { createSlice } from "@reduxjs/toolkit";
import { NotificationsProps } from "../types";
import { fetchNotifications } from "./notificationsAsyncThunk";

const initialState: NotificationsProps = {
    loading: false,
   notifications: []
}

const slice = createSlice({
    name: "notifications",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNotifications.pending, (state) =>{
            state.loading = true;
        })
        .addCase(fetchNotifications.fulfilled, (state, action) => {
            state.loading = false;
            state.notifications = action.payload.notifications
        })
        .addCase(fetchNotifications.rejected, (state, action) =>{
            state.loading = false
        })
    }
})

export default slice.reducer