import React from "react";
import { capitalizeFirstLetter } from "../../utils";

type Imesssagecard = {
  buyerImage?: string;
  newmessagecount?: string;
  buyerId: string;
  lastmessage?: string;
  lastmessagetime?: string;
};

const MessageCard = ({
  buyerImage,
  newmessagecount,
  buyerId,
  lastmessage,
  lastmessagetime,
}: Imesssagecard) => {
  return (
    <div className="messagecard">
      <div
        className="messagecard__image"
        style={{ backgroundImage: `url(${buyerImage})` }}
      ></div>
      <h6 className="messagecard__title">{capitalizeFirstLetter(buyerId)}</h6>
      {lastmessage && <p className="messagecard__message">{lastmessage}</p> }
      {/* {newmessagecount && <div className={`messagecard__count`}>
        <span>{newmessagecount}</span>
      </div>} */}
      {lastmessagetime && <time className="messagecard__time">{lastmessagetime}</time> }
    </div>
  );
}

export default MessageCard;
