import { createAsyncThunk } from "@reduxjs/toolkit";
import admin from "../../../../modules/service/admin";

type NewChatProps = {
    message_id: string;
    message: string
}

const createMessage = createAsyncThunk("messages/createMessage", async ({seller, transaction}: {seller: string, transaction: string}) =>{   
    window.location.href = "/messages"
    return admin.createNewMessage({seller, transaction})
    .then((res) => res.data)
    .catch((err) => err.data)
})

const fetchAllMessages = createAsyncThunk("messages/fetchAllMessages", async () =>{
    return admin.getAllMessages()
    .then((res) => res.data)
    .catch((err) => err.data)
})

const sendNewChat = createAsyncThunk("messages/sendNewChat", async ({values}: {values: NewChatProps}) => {
    const {message_id, message} = values
    return admin.sendNewMessage({message_id, message})
    .then((res) => res.data)
    .catch((err) => err.data)
} )

export {createMessage, fetchAllMessages, sendNewChat}
