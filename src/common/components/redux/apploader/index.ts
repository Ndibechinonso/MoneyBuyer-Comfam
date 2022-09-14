import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type loadingInitiator =
  | ""
  | "fetching_all_transactions"
  | "created_new_transaction"
  | "newuser_check"
  | "verify_code"
  | "resend_code";

interface loadingState {
  isloading: boolean;
  initiator?: loadingInitiator;
}

const initialState: loadingState = {
  isloading: false,
  initiator: "",
};

export const loadingSlice = createSlice({
  name: "loadingstate",
  initialState,
  reducers: {
    loadingStart: (state, action: PayloadAction<loadingInitiator>) => {
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

export const loadStart = (init?: loadingInitiator) => {
  return loadingStart(init);
};
export const loadStop = () => {
  return loadingStop();
};

export default loadingSlice.reducer;
