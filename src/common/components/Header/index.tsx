import { useLocation, useNavigate } from "react-router-dom";
import { getFirstLevelPath, getObject } from "../../utils/helpers";
import CustomButton from "../customButtons";
import NotificationIcon from "../customIcons/NotificationIcon";
import DropDown from "../dropDowns/primitive";
import UserMenuItem from "../dropDowns/UserMenuItem";
import UserMenuTrigger from "./UserMenuTrigger";
import { useAppDispatch } from "../redux/hooks";
import { Alerts } from "../redux/alert/alertActions";
import steve from "../../../static/images/steve.svg";
import statusIndicator from "../../../static/images/status_indicator.svg";

type Iheader = {
  newUser?:boolean
}

function Header({newUser}:Iheader) {
  const { pathname } = useLocation();
  console.log(pathname);

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
        {pathname !== "/messages" && (<div className="titleBar__message">
            <div className="titleBar__message--headline">{`${value?.title} ${
              pathname === "/dashboard" ? "Kenneth!" : ""
            }`}</div>
            <div className="titleBar__message--sub">{`${value?.subtitle}`}</div>
          </div> ) }
          {pathname === "/messages" && (<div className="titleBar__message " id="user_info">
            <div className="titleBar__message--user_image"><img src={steve} /></div>
            <div className=""><div className="user_name">Steve Martins</div> <div><span className=""><img src={statusIndicator} /> </span> <span className="user_status">Active Now</span></div></div>
          </div> ) }
          {!["messages", "notifications"].includes(getFirstLevelPath(pathname)) ? (
            <CustomButton
              className="titleBar__cta"
              action={() => dispatch(Alerts("newtransaction"))}
              actionText="New Transaction"
            />
          ): null} 
        </div>
      </header>
    </>
  );
}

export default Header;
