import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type loadingInitiator =
  | ""
  | "fetching_all_transactions"
  | "created_new_transaction"
  | "newuser_check"
  | "verify_code"
  | "resend_code"
  | "verifying_user";

interface loadingState {
  isloading: boolean;
  initiator?: loadingInitiator;
  prevInitiator: loadingInitiator;
}

const initialState: loadingState = {
  isloading: false,
  initiator: "",
  prevInitiator: "",
};

export const loadingSlice = createSlice({
  name: "LOADING_STATE",
  initialState,
  reducers: {
    loadingStart: (state, action: PayloadAction<loadingInitiator>) => {
      state.isloading = true;
      state.prevInitiator = state.initiator;
      state.initiator = action.payload;
    },
    loadingStop: (state) => {
      state.isloading = initialState.isloading;
      state.prevInitiator = state.initiator;
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
