import React from "react";
import ThrashIcon from "../customIcons/DeleteIcon";
import DoneAllIcon from "../customIcons/DoneAllIcon";
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
