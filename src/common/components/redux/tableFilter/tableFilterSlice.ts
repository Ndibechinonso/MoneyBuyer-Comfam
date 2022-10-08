import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startDate: "" as any,
  endDate: "" as any,
  search: "",
  filter: "",
  type: "",
};

const slice = createSlice({
  name: "tableFilter",
  initialState,
  reducers: {
    setTableType: (state, action) => {
      state.type = action.payload;
    },
    updateDate: (state, action) => {
      state.startDate = action.payload?.startDate;
      state.endDate = action.payload?.endDate;
    },
    // resetDate: (state) => {
    //   state.startDate = initialState.startDate;
    //   state.endDate = initialState.endDate;
    // },
    updateSearchParam: (state, action) => {
      state.search = action.payload;
    },
    updateFilterParam: (state, action) => {
      state.filter = action.payload;
    },
    resetAllParams: (state) => {
      state.startDate = initialState.startDate;
      state.endDate = initialState.endDate;
      state.search = initialState.search;
      state.filter = initialState.filter;
    },
  },
});

export const {
  setTableType,
  updateDate,
  updateSearchParam,
  updateFilterParam,
  resetAllParams,
} = slice.actions;
export default slice.reducer;
