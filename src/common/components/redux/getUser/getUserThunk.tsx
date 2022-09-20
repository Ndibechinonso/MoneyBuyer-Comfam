import { createAsyncThunk } from "@reduxjs/toolkit";
import admin from "../../../../modules/service/admin";

 const fetchUser = createAsyncThunk("user/fetchUser", () => {
    return admin.getUserInfo()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
})

export default fetchUser