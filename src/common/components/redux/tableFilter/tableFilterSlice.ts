import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startDate: "" as any,
  endDate: "" as any,
  search: "",
  filter: ""
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
    updateSearchParam : (state, action) => {
      state.search = action.payload?.search;
    },
    updateFilterParam : (state, action) => {
      state.filter = action.payload?.search;
    }
  },
});

export const { updateDate, resetDate, updateSearchParam } = slice.actions;
export default slice.reducer;
