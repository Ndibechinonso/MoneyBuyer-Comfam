import React from "react";
import NotificationItem from "../../../common/components/NotificationMenuComponent";
import { notificationArray } from "../../../fakeData";

function index() {
  return (
    <>
      {notificationArray.map((itm, id) => (
        <NotificationItem
          key={id}
          content={itm.content}
          status={itm.status}
          time={itm.time}
        />
      ))}
    </>
  );
}

export default index;
