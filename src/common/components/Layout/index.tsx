import React, { useEffect, useLayoutEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getFirstLevelPath, getObject } from "../../utils/helpers";
import Header from "../Header";
import NewUserCard from "../sharedCards/NewUserCard";
import SideNav from "../SideNav";
import Notice from "./Notice";
import CustomAlert from "../CustomAlert";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Messages from "../Messages";
import {
  fetchUserDetails,
  fetchUserToken,
  storeUserDetails,
} from "../../../https/storage";
import admin from "../../../modules/service/admin";
import { loadStart, loadStop } from "../redux/apploader";
import CustomLoader from "../CustomLoader";
import { removeItem } from "../redux/tableItem";

function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [userError, setUserError] = useState(true);
  const [newUser, setNewUser] = useState(true);
  const value = getObject(getFirstLevelPath(pathname));
  const { modal, modalType } = useAppSelector((state) => state.alert);
  const { itm: transactionItm } = useAppSelector((state) => state.tableItem);
  const { isloading, initiator, prevInitiator } = useAppSelector(
    (state) => state.isloading
  );
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (fetchUserDetails().verified) {
      setUserError(false);
    }
    if (fetchUserDetails().transactionCount) {
      setNewUser(false);
    }
  }, []);

  useEffect(() => {
    if (modalType === "" && transactionItm.id) {
      dispatch(removeItem());
    }
    if (modalType === "" && pathname.includes("forgotpassword")) {
      if (pathname.includes("buyer")) {
        navigate("/sigin/buyer");
      }
      if (pathname.includes("seller")) {
        navigate("/signin/seller");
      }
    }
  }, [modalType, modal]);

  useEffect(() => {
    if (
      fetchUserDetails().transactionCount === 0 &&
      prevInitiator === "created_new_transaction"
    ) {
      dispatch(loadStart("newuser_check"));
      admin
        .getUserInfo()
        .then((res) => {
          storeUserDetails({
            ...res.user.buyer,
            transactionCount: res.user.transactionCount,
          });
          setNewUser(false);
        })
        .catch((err) => console.log(err))
        .finally(() => dispatch(loadStop()));
    }
    if (userError === true && prevInitiator === "verifying_user") {
      setUserError(false);
    }
  }, [prevInitiator, dispatch]);

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
