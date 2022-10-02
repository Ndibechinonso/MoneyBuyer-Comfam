import React, { useEffect } from "react";
import ThreeDotIcon from "../CustomIcons/ThreeDot";
import DropDown from "../DropDowns/primitive";
import NotificationDropDownItem from "../DropDowns/NotificationItem";
import { duration } from "../../utils";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Alerts } from "../redux/alert/alertActions";
import { updateSingleTransaction } from "../redux/transaction/transactionSlice";
import { updateSingleDispute } from "../redux/disputes/disputesSlice";
import {
  fetchDispute,
  fetchTransaction,
  readNotification,
} from "../redux/notifications/notificationsAsyncThunk";

type Props = {
  status: boolean;
  content: string;
  time: string;
  notificationid: string;
  id: string;
  type: string;
};

function NotificationItem({
  status,
  content,
  time,
  id,
  type,
  notificationid,
}: Props) {
  const dispatch = useAppDispatch();
  const { item, loading } = useAppSelector(
    (state) => state.notification.notification
  );

  useEffect(() => {
    if (item.id === id && loading === false && type === "TRANSACTION") {
      dispatch(Alerts("transactionitem", item.status));
      dispatch(updateSingleTransaction(item));
      dispatch(readNotification({ notification_id: notificationid }));
    }
    if (item.id === id && loading === false && type === "DISPUTE") {
      dispatch(Alerts("disputeitem", item.status));
      dispatch(updateSingleDispute(item));
      dispatch(readNotification({ notification_id: notificationid }));
    }
  }, [item.id]);

  const viewClickHandler = () => {
    if (type === "TRANSACTION") {
      dispatch(fetchTransaction(id));
    }
    if (type === "DISPUTE") {
      dispatch(fetchDispute(id));
    }
  };

  return (
    <div
      className={`${status ? "notifications__itemR" : "notifications__item"} `}
    >
      <div className="notifications__item--status"></div>
      <span className="notifications__item--avatar"></span>
      <p className="notifications__item--content">
        {content} <span onClick={viewClickHandler}>View</span>
      </p>
      <DropDown
        content={
          <NotificationDropDownItem
            notification_id={notificationid}
            type={type}
          />
        }
      >
        <button className="notifications__item--trigger">
          <ThreeDotIcon />
        </button>
      </DropDown>
      <p className="notifications__item--time">{duration(time) + " ago"}</p>
    </div>
  );
}

export default NotificationItem;
