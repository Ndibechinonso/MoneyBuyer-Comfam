import React from "react";
import { useLocation } from "react-router-dom";
import { getFirstLevelPath, getObject } from "../../utils/helpers";
import CustomButton from "../customButtons";
import NotificationIcon from "../customIcons/NotificationIcon";
import DropDownMenu from "../dropDowns/UserMenu";
import ReactPortal from "../Layout/portal/Portal";
import UserMenu from "./UserMenu";

function Header() {
  const { pathname } = useLocation();
  // const [showDropDown, setShowDropDown] = React.useState(false);

  const value = getObject(getFirstLevelPath(pathname));

  // const dropDownClickHandler = (): void => {
  //   setShowDropDown(!showDropDown);
  // };

  return (
    <>
      <header className="confam__layout--header">
        <div className="confam__layout--header_top header">
          <NotificationIcon />
          <DropDownMenu>
            <UserMenu />
          </DropDownMenu>
        </div>
        <div className="confam__layout--header_bottom titleBar">
          <div className="titleBar__message">
            <div className="titleBar__message--headline">{`${value?.title} ${
              pathname === "/dashboard" ? "Kenneth!" : ""
            }`}</div>
            <div className="titleBar__message--sub">{`${value?.subtitle}`}</div>
          </div>
          <CustomButton
            className="titleBar__cta"
            action={() => console.log("first")}
            actionText="New Transaction"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
