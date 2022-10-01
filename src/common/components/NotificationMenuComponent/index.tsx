import React, { useEffect, useRef } from "react";
import ThreeDotIcon from "../CustomIcons/ThreeDot";
import DropDown from "../DropDowns/primitive";
import NotificationDropDownItem from "../DropDowns/NotificationItem";
import { duration } from "../../utils";

type Props = {
    status: boolean;
    content:string;
    time:string;
};

function NotificationItem({status,content, time}: Props) {
  
  return (
    <div className={`${status ? "notifications__itemR" : "notifications__item"}`}>
      <div className="notifications__item--status"></div>
      <span className="notifications__item--avatar"></span>
      <p className="notifications__item--content">
        {content} <span>View</span>
      </p>
      <DropDown content={<NotificationDropDownItem />}>
        <button className="notifications__item--trigger">
          <ThreeDotIcon />
        </button>
      </DropDown>
      <p className="notifications__item--time">{duration(time) + " ago"}</p>
    </div>
  );
}

export default NotificationItem;
