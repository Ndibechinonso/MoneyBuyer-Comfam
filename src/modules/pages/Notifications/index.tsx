import { useEffect, useRef } from "react";
import NotificationItem from "../../../common/components/NotificationMenuComponent";
import PaginationComponent from "../../../common/components/PaginationComponent";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../common/components/redux/hooks";
import { fetchNotifications } from "../../../common/components/redux/notifications/notificationsAsyncThunk";

const Notifications = () => {
  const {
    notifications,
    loading,
    pagination: { totalPages, dataCount, currentPage },
  } = useAppSelector((state) => state.notification);

  const dispatch = useAppDispatch();

  const fetchPage = (page: number) => {
    dispatch(fetchNotifications(page));
  };

  const fetchUnmount = useRef(false);
  useEffect(() => {
    if (fetchUnmount.current === false) {
      fetchUnmount.current = true;
      return;
    }
    return () => {
      if (currentPage !== 1) {
        dispatch(fetchNotifications(1));
      }
    };
  }, []); // eslint-disable-line

  return (
    <>
      <div className={`${loading ? "fetching_notification" : ""}`}>
        {notifications.length > 0
          ? notifications.map((itm, id) => (
              <NotificationItem
                key={itm._id}
                content={itm.notification}
                status={itm.read}
                time={itm.createdAt}
                notificationid={itm._id}
                id={itm.action_id}
                type={itm.notification_action}
                position={id}
              />
            ))
          : null}

        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          setPage={fetchPage}
          dataCount={dataCount}
          loading={loading}
        />
      </div>
    </>
  );
};

export default Notifications;
