import React, { useCallback, useEffect, useState } from "react";
import admin from "../../../modules/service/admin";
import { formatDate } from "../../utils";
import SearchIcon from "../CustomIcons/SearchIcon";
import { loadingStop } from "../redux/apploader";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {fetchAllMessages} from "../redux/messages/messagesAsyncThunk";
import { openMessageChats } from "../redux/messages/messagesSlice";
import MessageCard from "./MessageCard";

const Messages = () => {
const dispatch = useAppDispatch()
const {messageList} = useAppSelector((state)=> state.messages)
const [loadedMessageList, setLoadedMessageList] = useState([])

// const fetchData = useCallback(async () => {
//   const data = await messageList.map((message) => {
//     return admin
//      .getImage(message.seller.image)
//      .then((res) => {
//        // setSellerAvatar(res);
//        message.seller.image = res
//      })
//      .catch((err) => console.log(err, "error"))
//      .finally(() => dispatch(loadingStop()));
//    })
 
//    setLoadedMessageList(data);
// }, [])

// useEffect( () =>{
//   fetchData()
//   console.log(messageList, "messages");

//  console.log(loadedMessageList, "loadedMessageList");
 

// }, [fetchData])
const filterActiveMessage = (id) =>{
  const activeMessage = messageList.filter((message) => message._id === id )
  dispatch(openMessageChats(activeMessage))
}

useEffect(() =>{
  dispatch(fetchAllMessages())
}, [])


  return (
    <div className="messagescontainer">
      <form className="searchbox">
        <label>
          <input type="search" name="searchmessage" id="" />
          <button type="submit">
            <SearchIcon />
          </button>
        </label>
      </form>
      {messageList && messageList.length > 0 && messageList.map((item, index) => ( <div key={item._id} onClick={() =>{filterActiveMessage(item._id)}}><MessageCard
            buyerId={item?.seller?.first_name}
            buyerImage={item?.seller?.loadedImage}
            lastmessage={`${item?.chats?.[item?.chats?.length -1].message.substring(0,22)} ${item?.chats?.[item?.chats?.length -1].message.length > 23 ? "..." : ""}`}
            lastmessagetime={formatDate(item?.chats?.[item?.chats?.length -1].createdAt, 3)}
            newmessagecount={"3"}
          /> </div>
        )
      )}
    </div>
  );
}

export default Messages;
