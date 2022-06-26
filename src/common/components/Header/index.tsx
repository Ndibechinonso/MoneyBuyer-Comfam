import { useLocation, useNavigate } from "react-router-dom";
import { getFirstLevelPath, getObject } from "../../utils/helpers";
import CustomButton from "../customButtons";
import NotificationIcon from "../customIcons/NotificationIcon";
import DropDown from "../dropDowns/primitive";
import UserMenuItem from "../dropDowns/UserMenuItem";
import UserMenuTrigger from "./UserMenuTrigger";
import { useAppDispatch } from "../redux/hooks";
import { Alerts } from "../redux/alert/alertActions";

function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const value = getObject(getFirstLevelPath(pathname));
  const dispatch = useAppDispatch();
  return (
    <>
      <header className="confam__layout--header">
        <div className="confam__layout--header_top header">
          <button
            className="notification__icon"
            onClick={() => navigate("/notifications")}
          >
            <NotificationIcon />
          </button>
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
          {getFirstLevelPath(pathname) !== "notifications" && (
            <CustomButton
              className="titleBar__cta"
              action={() => dispatch(Alerts("newtransaction"))}
              actionText="New Transaction"
            />
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
