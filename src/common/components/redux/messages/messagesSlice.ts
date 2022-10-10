import type { MessagesProps } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createMessage,  fetchAllMessages, sendNewChat } from "./messagesAsyncThunk";

const initialState: MessagesProps = {
  loading: false,
  error: "",
  messageList: [],
  activeMessage: [],
  activeChats: [],
  activeSeller: {} as null,
};

const slice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    openMessageChats: (state, action) => {
      state.activeMessage = action.payload;
      state.activeChats = action.payload?.[0]?.chats;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchAllMessages.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.messageList = action?.payload;
          state.loading = false;
        }
      )
      .addCase(fetchAllMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(sendNewChat.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendNewChat.fulfilled, (state, action) => {
        state.activeMessage = action.payload;
        state.activeChats = action.payload?.chats;
        state.loading = false;
      })
      .addCase(sendNewChat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(createMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(createMessage.fulfilled, (state, action: PayloadAction<any>) => {
        state.messageList = action?.payload;
        state.loading = false;
      })
      .addCase(createMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { openMessageChats } = slice.actions;
export default slice.reducer;
