import React, { useEffect, useRef } from "react";
import NotificationItem from "../../../common/components/NotificationMenuComponent";
import { useAppDispatch, useAppSelector } from "../../../common/components/redux/hooks";
import { fetchNotifications } from "../../../common/components/redux/notifications/notificationsAsyncThunk";
import { notificationArray } from "../../../fakeData";

const  Notifications = () => {
  const {notifications} = useAppSelector((state) => state.notification)
  const runOnce = useRef(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (runOnce.current) {
      return;
    }
    dispatch(fetchNotifications())
 runOnce.current = true
  }, [])

  return (
    <>
      {notifications && notifications.map((itm, id) => (
        <NotificationItem
          key={id}
          content={itm.notification}
          status={itm.status}
          time={itm.createdAt}
        />
      ))}
    </>
  );
}

export default Notifications;
