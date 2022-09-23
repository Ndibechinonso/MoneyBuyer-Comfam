import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    startDate: "" as any,
    endDate: "" as any
}

const slice = createSlice({
    name: "tableFilter",
    initialState,
    reducers: {
        updateDate: (state, action) =>{
            console.log(action.payload);  
            state.startDate = action.payload?.startDate;
            state.endDate = action.payload?.endDate
        }
    }
})

export const {updateDate} = slice.actions
export default slice.reducer