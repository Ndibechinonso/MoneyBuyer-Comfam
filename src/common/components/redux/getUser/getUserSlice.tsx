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
        },
        updateUser:(state,action) => {
            state.user = action.payload
        },
        resetUser: (state)=> {
            state.error = initialState.error
            state.user = initialState.user
            state.profileImageChange = initialState.profileImageChange
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUser.fulfilled, (state, {payload}: PayloadAction<any> ) =>{
            state.loading = false;
            state.user = payload
        })
        .addCase(fetchUser.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.error.message
        })
    }
})

export const {updateProfileImage, resetProfileImageState, updateUser,resetUser} = slice.actions
export default slice.reducer