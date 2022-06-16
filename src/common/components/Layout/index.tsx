import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { getFirstLevelPath, getObject } from "../../utils/helpers";
import Header from "../Header";
import NewUserCard from "../sharedCards/NewUserCard";
import SideNav from "../SideNav";
import Notice from "./Notice";

function Layout() {
  const { pathname } = useLocation();
  const [userError, setUserror] = React.useState(false);
  const [newUser, setNewUser] = React.useState(false);

  const value = getObject(getFirstLevelPath(pathname));

  return (
    <div className="confam">
      <SideNav />
      <div className="confam__layout">
        <Header />
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
  );
}

export default Layout;
