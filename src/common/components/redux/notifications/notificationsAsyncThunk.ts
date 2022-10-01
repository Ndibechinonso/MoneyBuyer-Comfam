import { createAsyncThunk } from "@reduxjs/toolkit"
import admin from "../../../../modules/service/admin"

const fetchNotifications = createAsyncThunk("notifications/fetchNotifications", async (page: number) =>{
    return admin.getNotifications(page, 10)
    .then((res) => res.data)
    .catch((err) => err.data)
})

export {fetchNotifications}