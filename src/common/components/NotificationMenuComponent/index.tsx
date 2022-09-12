import React from "react";
import ThreeDotIcon from "../CustomIcons/ThreeDot";
import DropDown from "../dropDowns/primitive";
import NotificationDropDownItem from "../dropDowns/NotificationItem";

type Props = {
    status: boolean;
    content:string;
    time:string;
};

function NotificationItem({status,content, time}: Props) {
  return (
    <div className={`${status?"notifications__itemR":"notifications__item"}`}>
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
      <p className="notifications__item--time">{time}</p>
    </div>
  );
}

export default NotificationItem;
