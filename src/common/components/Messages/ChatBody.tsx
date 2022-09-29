import React, { useEffect, useRef, useState } from "react";
import { formatDate } from "../../utils";
import { useAppSelector } from "../redux/hooks";
import ChatDateDivider from "../CustomIcons/ChatDateDivider";

const ChatBody = () => {
  const { activeMessage, activeChats } = useAppSelector(
    (state) => state.messages
  );
  const [chatArray, setChatArray] = useState<any>();
  const bottomRef = useRef(null);

  useEffect(() => {
    const groupedChats = activeChats.reduce((group, chat) => {
      let { createdAt } = chat;
      createdAt = (new Date(createdAt).toDateString() === new Date().toDateString()) ? "Today" : createdAt.split("T")[0];  
      group[createdAt] = group[createdAt] ?? [];
      group[createdAt].push(chat);
      return group;
    }, {});
    setChatArray(groupedChats);
  }, [activeChats]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatArray]);

  return (
    <div className="chatbody">
      {chatArray &&
        Object.keys(chatArray).map((key, index) => {
          return (
            <div key={index} className="chat_content">
              <div className="date">
                <span>
                  <ChatDateDivider />
                </span>
                <span className="date_value">{key}</span>
                <span>
                  <ChatDateDivider />
                </span>
              </div>
              {chatArray[key].map((chat, index) => {
                return (
                  <div
                  ref={bottomRef}
                    key={chat._id}
                    className={`${
                      chat.sender === "buyer"
                        ? "buyer_msg_body"
                        : "seller_msg_body"
                    }`}
                  >
                    <div className="arrow-up"></div>
                    <p className="text">{chat.message}</p>
                    <p className="time">{formatDate(chat.createdAt, 3)}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default ChatBody;
