import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getFirstLevelPath, getObject } from "../../utils/helpers";
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
  const mountOnce = useRef(false);
  const { verified, transactionCount } = useAppSelector(
    (state) => state.user.user
  );
  const { isloading, initiator } = useAppSelector((state) => state.isloading);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (verified) {
      setUserError(false);
    }
    if (transactionCount) {
      setNewUser(false);
    }
  }, [verified, transactionCount]);

  useEffect(() => {
    if (modalType === "" && transactionId) {
      dispatch(removeSingleTransaction());
    }
    if (modalType === "" && disputeId) {
      dispatch(removeSingleDispute());
    }
  }, [modalType, transactionId, disputeId, dispatch]); //eslint-disable-line

  // useEffect(() => {
  //   if (
  //     prevInitiator === "wallet_transaction" ||
  //     (transactionCount === 0 && prevInitiator === "created_new_transaction")
  //   ) {
  //     dispatch(fetchUser());
  //   }
  // }, [prevInitiator, dispatch]); //eslint-disable-line

  useLayoutEffect(() => {
    if (mountOnce.current) {
      return;
    }
    dispatch(fetchUser());
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
          pathname.includes("messages") && newUser === false
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
            {isloading && initiator === "newuser_check" ? (
              <div style={{ height: "50vh", gridColumn: "1/-1" }}>
                <CustomLoader size={10} />
              </div>
            ) : newUser && getFirstLevelPath(pathname) !== "setting" ? (
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
