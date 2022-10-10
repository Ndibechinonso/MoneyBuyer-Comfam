import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DisputesDataType } from "../types";
import { fetchAllDisputes, fetchDisputeImages } from "./disputesAsyncThunk";
const initialState: DisputesDataType = {
  loading: false,
  error: "",
  disputes: [],
  singleDispute: {} as any,
  singleDisputeImages:[],
  pagination: {
    currentPage: 0,
    dataCount: 0,
    totalPages: 0,
  },
  page: 0,
};

const slice = createSlice({
  name: "disputes",
  initialState,
  reducers: {
    changePageNumber: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    updateSingleDispute: (state, action: PayloadAction<any>) => {
      state.singleDispute = action.payload;
    },
    removeSingleDispute: (state) => {
      state.singleDispute = initialState.singleDispute;
    },
    removeTransactionImages: (state) => {
      state.singleDisputeImages = initialState.singleDisputeImages;
    },
    // resetDispute: (state) => {
    //   state.error = initialState.error;
    //   state.disputes = initialState.disputes;
    //   state.singleDispute = initialState.singleDispute;
    //   state.pagination = initialState.pagination;
    //   state.page = initialState.page;
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllDisputes.pending, (state) => {
        state.loading = true;
        // state.disputes = [];
      })
      .addCase(
        fetchAllDisputes.fulfilled,
        (state, action: PayloadAction<DisputesDataType>) => {
          console.log(action.payload, "pay");
          
          state.loading = false;
          Object.keys(state.pagination).forEach(key => {
            state.pagination[key] = action.payload.pagination[key]
          })
          state.disputes = action.payload?.disputes;
        }
      )
      .addCase(fetchAllDisputes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "something went wrong";
      }).addCase(fetchDisputeImages.fulfilled, (state, action) => {
        // state.singleDisputeImages = [
        //   ...state.singleDisputeImages,
        //   action.payload,
        // ];
        state.singleDisputeImages.push(action.payload)
      })
  },
});

export const {
  changePageNumber,
  updateSingleDispute,
  removeSingleDispute,
  removeTransactionImages,
  // resetDispute,
} = slice.actions;
export default slice.reducer;
