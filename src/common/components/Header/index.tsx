import { useEffect, useState } from "react";
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
import HandWave from "../CustomIcons/HandWave";
import { capitalizeFirstLetter } from "../../utils";
import useLoading from "../../hooks/useLoading";
import route from "../../routes/route";

type Iheader = {
  newUser?: boolean;
  inCompleteReg?: boolean;
};

function Header({ newUser, inCompleteReg }: Iheader) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const value = getObject(getFirstLevelPath(pathname));
  const dispatch = useAppDispatch();
  const unreadNotifications = useAppSelector((state) => state.notification.pagination.unReadNotification);
  const { activeMessage } = useAppSelector((state) => state.messages);
  const { user } = useAppSelector((state) => state.user)
  const [sellerObject, setSellerObject] = useState<any>({});
  const { transactionloading } = useLoading();
  const [sellerAvatar, setSellerAvatar] = useState("");

  useEffect(() => {
    const activeSeller = activeMessage[0]?.seller;
    setSellerObject(activeSeller);
  }, [activeMessage]);

  return (
    <>
      <header className="confam__layout--header">
        <div className="confam__layout--header_top header">
          <button
            className="notification__icon"
            onClick={() => navigate(route.protected.notifications)}
          >
            <NotificationIcon
              color={`${
                unreadNotifications !== 0 ? "#E01D1D" : "#FFFFFF"
              }`}
            />
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
                pathname === "/messages" ? `${capitalizeFirstLetter(sellerObject?.first_name)}!` : ""
              } ${
                pathname === "/dashboard" ? `${capitalizeFirstLetter(user?.first_name)}!` : ""
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
                <img alt="" src={sellerAvatar} />
              </div>
              <div className="">
                {sellerObject?.first_name && (
                  <div className="user_name">
                    {capitalizeFirstLetter(sellerObject?.first_name)}{" "}
                    {capitalizeFirstLetter(sellerObject?.last_name)}
                  </div>
                )}
                {/* <div>
                  <span className="">
                    <img alt="status indicator" src={statusIndicator} />{" "}
                  </span>
                  <span className="user_status">Active Now</span>
                </div> */}
              </div>
            </div>
          )}
          {displayHeaderBtn(pathname, newUser, inCompleteReg) ? (
            <CustomButton
              disabled={transactionloading}
              loading={transactionloading}
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
