import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import {
  getFirstLevelPath,
  getObject,
  renderEmptyPageState,
} from "../../utils/helpers";
import Header from "../Header";
import NewUserCard from "../sharedCards/NewUserCard";
import SideNav from "../SideNav";
import Notice from "./Notice";
import CustomAlert from "../CustomAlert";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Messages from "../Messages";
import { fetchUserDetails, fetchUserToken } from "../../../https/storage";
import CustomLoader from "../CustomLoader";
import fetchUser from "../redux/getUser/getUserThunk";
import { removeSingleTransaction } from "../redux/transaction/transactionSlice";
import { removeSingleDispute } from "../redux/disputes/disputesSlice";
import useLoading from "../../hooks/useLoading";
import { fetchNotifications } from "../redux/notifications/notificationsAsyncThunk";
import useAppLoader from "../../hooks/useAppLoader";
import { fetchAllMessages } from "../redux/messages/messagesAsyncThunk";

function Layout() {
  const { pathname } = useLocation();
  const [userError, setUserError] = useState(true);
  const [newUser, setNewUser] = useState(true);
  const value = getObject(getFirstLevelPath(pathname));
  const { modal, modalType } = useAppSelector((state) => state.alert);
  const { id: transactionId } = useAppSelector(
    (state) => state.transactions.singleTransaction
  );
  const { _id: disputeId } = useAppSelector(
    (state) => state.disputes.singleDispute
  );
  const { dataCount: notificationCount, currentPage: notificationCP } =
    useAppSelector((state) => state.notification.pagination);
  const mountOnce = useRef(false);
  const { verified, transactionCount, user_type } = useAppSelector(
    (state) => state.user.user
  );
  const { messageList } = useAppSelector((state) => state.messages);
  const { transactionloading, userloading } = useLoading(); // custom hook to handle all loading states
  const componentloading = useAppLoader(); // custom hook to conditionaly rendering the app loader

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (verified) {
      setUserError(false);
    }
    if (transactionCount) {
      setNewUser(false);
    }
  }, [verified, transactionCount]);

  //  this removes transaction and dispute modal item object from the redux state whenever the modal is closed
  useEffect(() => {
    if (modalType === "" && transactionId) {
      dispatch(removeSingleTransaction());
    }
    if (modalType === "" && disputeId) {
      dispatch(removeSingleDispute());
    }
  }, [modalType, transactionId, disputeId, dispatch]); //eslint-disable-line

  //  this fetches the first page of the route that is being so redux has the first page in memory
  useEffect(() => {
    return () => {
      if (
        getFirstLevelPath(pathname) === "notifications" &&
        notificationCP !== 1
      ) {
        dispatch(fetchNotifications(1));
      }
    };
  }, [pathname]);

  useEffect(() => {
    if (transactionCount === 0 && transactionloading) {
      dispatch(fetchUser());
    }
  }, [transactionloading, dispatch]); // eslint-disable-line

  //  this gets the user notification and also the user object when component mounts
  useLayoutEffect(() => {
    if (mountOnce.current) {
      return;
    }
    dispatch(fetchNotifications(1));
    dispatch(fetchAllMessages());
    if (user_type === "") {
      dispatch(fetchUser());
    }
    mountOnce.current = true;
  }, []); //eslint-disable-line

  if (!fetchUserToken() || fetchUserDetails() === false) {
    return <Navigate replace to="/signin/buyer" />;
  }

  return (
    <>
      {modal && <CustomAlert alertType={modalType} />}
      <div
        className={`confam ${
          pathname.includes("messages") && newUser === false && messageList.length !== 0
            ? "confam__message"
            : ""
        }`}
      >
        <SideNav newUser={newUser} />
        {pathname.includes("messages") && newUser === false && <Messages />}
        <div className="confam__layout">
          <Header inCompleteReg={userError} newUser={newUser} />
          <main
            className={`content content__${getFirstLevelPath(
              pathname
            )} content__${userError ? "userError" : "clean"}`}
          >
            {userloading || componentloading ? (
              <div style={{ height: "50vh", gridColumn: "1/-1" }}>
                <CustomLoader size={10} />
              </div>
            ) : renderEmptyPageState(
                newUser,
                pathname,
                notificationCount,
                messageList.length
              ) ? (
              <>
                {userError && <Notice />}
                <NewUserCard
                  completedRegistration={userError}
                  message={value?.newUser.message}
                />
              </>
            ) : (
              <section className={`${getFirstLevelPath(pathname)}`}>
                <Outlet />
              </section>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout;
