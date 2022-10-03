import React from "react";
import ThrashIcon from "../CustomIcons/DeleteIcon";
import DoneAllIcon from "../CustomIcons/DoneAllIcon";
import { useAppDispatch } from "../redux/hooks";
import {
  deleteNotification,
  readNotification,
} from "../redux/notifications/notificationsAsyncThunk";
import DropDownItem from "./primitive/DropDownItem";
import DropDownMenuContent from "./primitive/DropDownMenuContent";

type props = {
  notification_id: string;
  type: string;
};

function NotificationDropDownItem({ notification_id }: props) {
  const dispatch = useAppDispatch();
  const markAsReadHandler = () => {
    dispatch(readNotification({ notification_id }));
  };
  const deleteHandler = () => {
    
    dispatch(deleteNotification(notification_id));
  };
  return (
    <DropDownMenuContent className="notifications__item--dropdown">
      <DropDownItem>
        <button onClick={markAsReadHandler}>
          <DoneAllIcon />
          <span>Mark as read</span>
        </button>
      </DropDownItem>
      <DropDownItem>
        <button onClick={deleteHandler}>
          <ThrashIcon />
          <span>Delete Notification</span>
        </button>
      </DropDownItem>
    </DropDownMenuContent>
  );
}

export default NotificationDropDownItem;
