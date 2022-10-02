import React, { useEffect, useRef, useState } from "react";
import CustomLoader from "../../../common/components/CustomLoader";
import NotificationItem from "../../../common/components/NotificationMenuComponent";
import PaginationComponent from "../../../common/components/PaginationComponent";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../common/components/redux/hooks";
import { fetchNotifications } from "../../../common/components/redux/notifications/notificationsAsyncThunk";
import { changePageNumber } from "../../../common/components/redux/notifications/notificationsSlice";
import { notificationArray } from "../../../fakeData";

const Notifications = () => {
  const { notifications } = useAppSelector((state) => state.notification);
  const runOnce = useRef(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [neglectlimit, setLimit] = useState(5);

  const { loading } = useAppSelector((state) => state.notification);
  const { totalPages } = useAppSelector(
    (state) => state.notification.pagination
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNotifications(currentPage));
  }, [currentPage]);

  useEffect(() => {
    dispatch(changePageNumber(currentPage));
  }, [currentPage]);

  return (
    <>
      {loading ? (
        <CustomLoader size={10} />
      ) : notifications.length > 0 ? (
        notifications.map((itm, id) => (
          <NotificationItem
            key={id}
            content={itm.notification}
            status={itm.read}
            time={itm.createdAt}
            notificationid={itm._id}
            id={itm.action_id}
            type={itm.notification_action}
          />
        ))
      ) : (
        <div className="no_notifications">No Notifications</div>
      )}

      <PaginationComponent
        loading={false}
        currentPage={currentPage}
        // totalPages={Math.ceil((count || 0) / limit)}
        totalPages={totalPages}
        // totalPages={12}
        setLimit={setLimit}
        setPage={setCurrentPage}
        limit={neglectlimit}
      />
    </>
  );
};

export default Notifications;
