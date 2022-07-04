import React from "react";
import SearchIcon from "../customIcons/SearchIcon";
import MessageCard from "./MessageCard";

type Props = {};

function Messages({}: Props) {
  const fakemessage = [
    {
      buyerImage: "",
      newmessagecount: "1",
      buyerId: "Buyer ID",
      lastmessage: "How soon can I get the package?",
      lastmessagetime: "10:22 AM",
    },
    {
      buyerImage: "",
      newmessagecount: "2",
      buyerId: "Buyer ID",
      lastmessage: "How soon can I get the package?",
      lastmessagetime: "10:22 AM",
    },
    {
      buyerImage: "",
      newmessagecount: "",
      buyerId: "Buyer ID",
      lastmessage: "How soon can I get the package?",
      lastmessagetime: "10:22 AM",
    },
    {
      buyerImage: "",
      newmessagecount: "",
      buyerId: "Buyer ID",
      lastmessage: "How soon can I get the package?",
      lastmessagetime: "10:22 AM",
    },
    {
      buyerImage: "",
      newmessagecount: "",
      buyerId: "Buyer ID",
      lastmessage: "How soon can I get the package?",
      lastmessagetime: "10:22 AM",
    },
    {
      buyerImage: "",
      newmessagecount: "",
      buyerId: "Buyer ID",
      lastmessage: "How soon can I get the package?",
      lastmessagetime: "10:22 AM",
    },
  ];
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
      {fakemessage.map(
        ({
          buyerId,
          buyerImage,
          lastmessage,
          lastmessagetime,
          newmessagecount,
        }) => (
          <MessageCard
            buyerId={buyerId}
            buyerImage={buyerImage}
            lastmessage={`${lastmessage.substring(0,22)}...`}
            lastmessagetime={lastmessagetime}
            newmessagecount={newmessagecount}
          />
        )
      )}
    </div>
  );
}

export default Messages;
