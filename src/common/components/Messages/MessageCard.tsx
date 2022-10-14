import { useEffect, useState } from "react";
import admin from "../../../modules/service/admin";
import { capitalizeFirstLetter } from "../../utils";
import { loadingStart, loadingStop } from "../redux/apploader";
import { useAppDispatch } from "../redux/hooks";

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

  const dispatch = useAppDispatch();
  
  const [userAvatar, setUserAvartar] = useState("");

useEffect(() => {
  dispatch(loadingStart(""));
  admin
  .getImage(buyerImage)
  .then((res) => {
    setUserAvartar(res);
  })
  .catch((err) => console.log(err, "error"))
  .finally(() => dispatch(loadingStop()))
}, [buyerImage])
    
  return (
    <div className="messagecard">
      <div
        className="messagecard__image"
        style={{ backgroundImage: `url(${userAvatar})` }}
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
