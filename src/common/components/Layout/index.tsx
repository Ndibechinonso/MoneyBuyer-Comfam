import React, { useEffect, useState } from "react";
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
import admin from "../../../modules/service/admin";
import { loadStart, loadStop } from "../redux/apploader";

function Layout() {
  const { pathname } = useLocation();
  const [userError, setUserError] = useState(true);
  const [newUser, setNewUser] = useState(true);
  const value = getObject(getFirstLevelPath(pathname));
  const { modal, modalType } = useAppSelector((state) => state.alert);
  const { isloading, initiator } = useAppSelector((state) => state.isloading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (fetchUserDetails().verified) {
      setUserError(false);
    }
    if (fetchUserToken()) {
      dispatch(loadStart("newuser_check"));
      admin
        .getAllTransaction()
        .then((res) => (res.count === 0 ? setNewUser(true) : setNewUser(false)))
        .catch((err) => console.log(err))
        .finally(() => dispatch(loadStop()));
    }
  }, []);

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
            {newUser && getFirstLevelPath(pathname) !== "setting" ? (
              // !isloading &&
              // initiator === "newuser_check" &&
               (
                <>
                  {userError && <Notice />}
                  <NewUserCard
                    completedRegistration={userError}
                    message={value?.newUser.message}
                  />
                </>
              )
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
