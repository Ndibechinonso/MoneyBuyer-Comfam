import React from "react";
import ThrashIcon from "../CustomIcons/DeleteIcon";
import DoneAllIcon from "../CustomIcons/DoneAllIcon";
import DropDownItem from "./primitive/DropDownItem";
import DropDownMenuContent from "./primitive/DropDownMenuContent";

type Props = {};

function NotificationDropDownItem({}: Props) {
  return (
    <DropDownMenuContent className="notifications__item--dropdown">
      <DropDownItem>
        <button>
          <DoneAllIcon />
          <span>Mark as read</span>
        </button>
      </DropDownItem>
      <DropDownItem>
        <button>
          <ThrashIcon />
          <span>Delete Notification</span>
        </button>
      </DropDownItem>
    </DropDownMenuContent>
  );
}

export default NotificationDropDownItem;
