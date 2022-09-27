import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import fetchUser from "./getUserThunk"
import { UserProps } from "../types"
import { initialUser } from "../types"

const initialState = {
    loading: false,
    error: "",
    user: initialUser,
    profileImageChange: false,
}

const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateProfileImage: (state) =>{
            state.profileImageChange = true;
        },
        resetProfileImageState: (state) =>{
            state.profileImageChange = false;
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUser.fulfilled, (state, action: PayloadAction<any> ) =>{
            state.loading = false;
            state.user = action.payload?.user
        })
        .addCase(fetchUser.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.error.message
        })
    }
})

export const {updateProfileImage, resetProfileImageState} = slice.actions
export default slice.reducer