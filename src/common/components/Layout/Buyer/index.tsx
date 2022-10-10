import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { fetchUserToken } from "../../../../https/storage";
import useAppLoader from "../../../hooks/useAppLoader";
import useLoading from "../../../hooks/useLoading";
import {
  getFirstLevelPath,
  getObject,
  renderEmptyPageState,
} from "../../../utils/helpers";
import CustomAlert from "../../CustomAlert";
import CustomLoader from "../../CustomLoader";
import Header from "../../Header";
import Messages from "../../Messages";
import { fetchAllDisputes } from "../../redux/disputes/disputesAsyncThunk";
import { removeSingleDispute } from "../../redux/disputes/disputesSlice";
import fetchUser from "../../redux/getUser/getUserThunk";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllMessages } from "../../redux/messages/messagesAsyncThunk";
import { fetchNotifications } from "../../redux/notifications/notificationsAsyncThunk";
import { fetchAllTransactions } from "../../redux/transaction/transactionAsyncThunk";
import { removeSingleTransaction } from "../../redux/transaction/transactionSlice";
import NewUserCard from "../../sharedCards/NewUserCard";
import SideNav from "../../SideNav";
import Notice from "./Notice";

const Buyer = () => {
  const { pathname } = useLocation();
  const [userError, setUserError] = useState(true);
  const [newUser, setNewUser] = useState(true);
  const value = getObject(getFirstLevelPath(pathname));
  const { modal, modalType } = useAppSelector((state) => state.alert);
  // pagination: { dataCount: transactionDataCount },
  // pagination: { dataCount: disputeDataCount, },
  const { id: transactionId } = useAppSelector(
    (state) => state.transactions.singleTransaction
  );
  const { _id: disputeId } = useAppSelector(
    (state) => state.disputes.singleDispute
  );
  const { dataCount: notificationCount } = useAppSelector(
    (state) => state.notification.pagination
  );
  const mountOnce = useRef(false);
  const { verified, transaction_count, user_type } = useAppSelector(
    (state) => state.user.user
  );
  const { messageList } = useAppSelector((state) => state.messages);
  const { transactionloading, userloading } = useLoading(); // custom hook to handle all loading states
  const componentloading = useAppLoader(); // custom hook to conditionaly rendering the app loader

  const { startDate, endDate, search, filter } = useAppSelector(
    (state) => state.tableFilter
  );

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (verified) {
      setUserError(false);
    }
    if (transaction_count) {
      setNewUser(false);
    }
  }, [verified, transaction_count]);

  //  this removes transaction and dispute modal item object from the redux state whenever the modal is closed
  useEffect(() => {
    if (modalType === "" && transactionId) {
      dispatch(removeSingleTransaction());
    }
    if (modalType === "" && disputeId) {
      dispatch(removeSingleDispute());
    }
  }, [modalType, transactionId, disputeId, dispatch]); //eslint-disable-line

  //  update new user information after user has initiated a transaction
  useEffect(() => {
    if (user_type !== "" && transaction_count === 0 && transactionloading) {
      dispatch(fetchUser());
    }
  }, [transactionloading, dispatch]);

  //  this gets the user notification and also the user object when component mounts
  useLayoutEffect(() => {
    if (mountOnce.current) {
      return;
    }
    if (fetchUserToken()) {
      dispatch(fetchNotifications(1));
      dispatch(fetchAllMessages());
      dispatch(fetchAllTransactions({ page: 1 }));
      dispatch(fetchAllDisputes({ page: 1 }));
      if (user_type === "") {
        dispatch(fetchUser());
      }
    }
    mountOnce.current = true;
  }, []);

  if (!fetchUserToken()) {
    return <Navigate replace to="/signin/buyer" />;
  }

  return (
    <>
      {modal && <CustomAlert alertType={modalType} />}
      <div
        className={`confam ${
          pathname.includes("messages") &&
          newUser === false &&
          messageList.length !== 0
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
};

export default Buyer;
