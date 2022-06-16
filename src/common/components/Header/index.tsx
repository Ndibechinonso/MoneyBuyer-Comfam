import { useLocation } from "react-router-dom";
import { getFirstLevelPath, getObject } from "../../utils/helpers";
import CustomButton from "../customButtons";
import NotificationIcon from "../customIcons/NotificationIcon";
import DropDown from "../dropDowns/primitive";
import UserMenuItem from "../dropDowns/UserMenuItem";
import UserMenuTrigger from "./UserMenuTrigger";

function Header() {
  const { pathname } = useLocation();
  const value = getObject(getFirstLevelPath(pathname));

  return (
    <>
      <header className="confam__layout--header">
        <div className="confam__layout--header_top header">
          <NotificationIcon />
          <DropDown content={<UserMenuItem />}>
            <button>
              <UserMenuTrigger />
            </button>
          </DropDown>
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
