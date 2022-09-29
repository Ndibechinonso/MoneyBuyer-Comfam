import { useLocation, useNavigate } from "react-router-dom";
import {
  displayHeaderBtn,
  displayPageInfo,
  getFirstLevelPath,
  getObject,
} from "../../utils/helpers";
import CustomButton from "../CustomButtons";
import NotificationIcon from "../CustomIcons/NotificationIcon";
import DropDown from "../DropDowns/primitive";
import UserMenuItem from "../DropDowns/UserMenuItem";
import UserMenuTrigger from "./UserMenuTrigger";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Alerts } from "../redux/alert/alertActions";
import statusIndicator from "../../../static/images/status_indicator.svg";
import HandWave from "../CustomIcons/HandWave";
import { fetchUserDetails } from "../../../https/storage";

type Iheader = {
  newUser?: boolean;
  inCompleteReg?: boolean;
};

function Header({ newUser, inCompleteReg }: Iheader) {
  const { pathname } = useLocation();
  const { first_name } = fetchUserDetails();
  const { isloading } = useAppSelector((state) => state.isloading);

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
          {displayPageInfo(pathname, newUser, inCompleteReg) && (
            <div className="titleBar__message">
              <div className="titleBar__message--headline">{`${value?.title} ${
                pathname === "/dashboard" ? `${first_name}!` : ""
              }`}</div>
              <div className="titleBar__message--sub">
                <span>{`${value?.subtitle}`}</span>
                {pathname === "/dashboard" && <HandWave />}
              </div>
            </div>
          )}
          {newUser === false && pathname === "/messages" && (
            <div className="titleBar__message " id="user_info">
              <div className="titleBar__message--user_image">
                {/* <img alt="user avatar" src={steve} /> */}
              </div>
              <div className="">
                <div className="user_name">Steve Martins</div>{" "}
                <div>
                  <span className="">
                    <img alt="status indicator" src={statusIndicator} />{" "}
                  </span>{" "}
                  <span className="user_status">Active Now</span>
                </div>
              </div>
            </div>
          )}
          {displayHeaderBtn(pathname, newUser, inCompleteReg) ? (
            <CustomButton
              disabled={isloading}
              className="titleBar__cta"
              action={() => dispatch(Alerts("newtransaction"))}
              actionText="New Transaction"
            />
          ) : null}
        </div>
      </header>
    </>
  );
}

export default Header;
