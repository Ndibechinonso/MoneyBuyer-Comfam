import { formatDate } from "../../utils";
import SearchIcon from "../CustomIcons/SearchIcon";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { openMessageChats } from "../redux/messages/messagesSlice";
import MessageCard from "./MessageCard";

const Messages = () => {
const dispatch = useAppDispatch()
const {messageList} = useAppSelector((state)=> state.messages)

const filterActiveMessage = (id) =>{
  const activeMessage = messageList.filter((message) => message._id === id )
  dispatch(openMessageChats(activeMessage))
}

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
            buyerImage={item?.seller?.image}
            lastmessage={`${item?.chats.length > 0 ? item?.chats?.[item?.chats?.length -1]?.message.substring(0,22) : ""} ${item?.chats.length > 0 && item?.chats?.[item?.chats?.length -1].message.length > 23 ? "..." : ""}`}
            lastmessagetime={item?.chats.length > 0 && formatDate(item?.chats?.[item?.chats?.length -1]?.createdAt, 3)}
            newmessagecount={"3"}
          /> </div>
        )
      )}
    </div>
  );
}

export default Messages;
