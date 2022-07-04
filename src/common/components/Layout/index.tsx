import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { getFirstLevelPath, getObject } from "../../utils/helpers";
import Header from "../Header";
import NewUserCard from "../sharedCards/NewUserCard";
import SideNav from "../SideNav";
import Notice from "./Notice";
import CustomAlert from "../CustomAlert";
import { useAppSelector } from "../redux/hooks";

function Layout() {
  const { pathname } = useLocation();
  const [userError] = React.useState(false);
  const [newUser] = React.useState(true);
  const value = getObject(getFirstLevelPath(pathname));
  const { modal, modalType } = useAppSelector((state) => state.alert);

  return (
    <>
      {modal && <CustomAlert alertType={modalType} />}
      <div className="confam">
        <SideNav />
        <div className="confam__layout">
          <Header newUser={userError} />
          <main
            className={`content content__${getFirstLevelPath(
              pathname
            )} content__${userError ? "userError" : "clean"}`}
          >
            {newUser && getFirstLevelPath(pathname) !== "setting" ? (
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
