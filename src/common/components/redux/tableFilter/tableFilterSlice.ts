import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startDate: "" as any,
  endDate: "" as any,
};

const slice = createSlice({
  name: "tableFilter",
  initialState,
  reducers: {
    updateDate: (state, action) => {
      state.startDate = action.payload?.startDate;
      state.endDate = action.payload?.endDate;
    },
    resetDate: (state) => {
      state.startDate = initialState.startDate;
      state.endDate = initialState.endDate;
    },
  },
});

export const { updateDate, resetDate } = slice.actions;
export default slice.reducer;
