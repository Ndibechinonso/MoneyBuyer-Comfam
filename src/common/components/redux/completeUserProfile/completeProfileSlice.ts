import { createSlice } from "@reduxjs/toolkit"
import {completeProfile} from "./completeProfileThunk"

const initialState = {
loading: false,
passwordInputs: false
}

const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetPasswordInputs: (state) =>{
            state.passwordInputs = true
        }
    },
    extraReducers(builder) {
        builder.addCase(completeProfile.pending, (state) =>{

        })
        .addCase(completeProfile.fulfilled, (state, action) =>{

        })
        .addCase(completeProfile.rejected, (state, action) =>{

        })
    },
})

export const {resetPasswordInputs} = slice.actions
export default slice.reducer