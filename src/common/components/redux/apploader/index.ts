import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loadingState {
  isloading: boolean;
  initiator: string;
}

const initialState: loadingState = {
  isloading: false,
  initiator: "",
};

export const loadingSlice = createSlice({
  name: "loadingstate",
  initialState,
  reducers: {
    loadingStart: (state, action: PayloadAction<string>) => {
      state.isloading = true;
      state.initiator = action.payload;
    },
    loadingStop: (state) => {
      state.isloading = initialState.isloading;
      state.initiator = initialState.initiator;
    },
  },
});

export const { loadingStart, loadingStop } = loadingSlice.actions;

export const loadStart = (init?: string) => {
  return loadingStart(init);
};
export const loadStop = () => {
  return loadingStop();
};

export default loadingSlice.reducer;
