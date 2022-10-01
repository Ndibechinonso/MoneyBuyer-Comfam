import { createAsyncThunk } from "@reduxjs/toolkit"
import admin from "../../../../modules/service/admin"

const fetchNotifications = createAsyncThunk("notifications/fetchNotifications", async () =>{
    return admin.getNotifications()
    .then((res) => res.data)
    .catch((err) => err.data)
})

export {fetchNotifications}