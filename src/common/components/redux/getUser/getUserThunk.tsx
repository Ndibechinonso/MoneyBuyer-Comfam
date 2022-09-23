import { createAsyncThunk } from "@reduxjs/toolkit";
import admin from "../../../../modules/service/admin";

 const fetchUser = createAsyncThunk("user/fetchUser", async() => {
    return admin.getUserInfo()
    .then((res) => res.data)
    .catch((err) => err)
})

export default fetchUser