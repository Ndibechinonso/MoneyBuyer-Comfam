import CustomLoader from "../../../common/components/CustomLoader";
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


  return (
    <>
      {loading ? (
        <CustomLoader size={10} />
      ) : notifications.length > 0 ? (
        notifications.map((itm, id) => (
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
      ) : // <div className="no_notifications">No Notifications</div>
      null}

      {dataCount > 10 ? (
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          setPage={fetchPage}
        />
      ) : null}
    </>
  );
};

export default Notifications;
