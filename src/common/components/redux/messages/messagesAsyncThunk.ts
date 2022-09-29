import { createAsyncThunk } from "@reduxjs/toolkit";
import admin from "../../../../modules/service/admin";

type NewMessageProps = {
    message_id: string;
    message: string
}
const fetchAllMessages = createAsyncThunk("messages/fetchAllMessages", async () =>{
    return admin.getAllMessages()
    .then((res) => res.data)
    .catch((err) => err.data)
})

const sendNewChat = createAsyncThunk("messages/sendNewChat", async ({values}: {values: NewMessageProps}) => {
    const {message_id, message} = values
    return admin.sendNewMessage({message_id, message})
    .then((res) => res.data)
    .catch((err) => err.data)
} )

export {fetchAllMessages, sendNewChat}
