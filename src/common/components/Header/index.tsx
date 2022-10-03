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
import { useEffect, useMemo, useState } from "react";
import { capitalizeFirstLetter } from "../../utils";
import { loadingStop } from "../redux/apploader";
import admin from "../../../modules/service/admin";
import { SellerProps } from "../redux/types";
import useLoading from "../../hooks/useLoading";
import { fetchNotifications } from "../redux/notifications/notificationsAsyncThunk";

type Iheader = {
  newUser?: boolean;
  inCompleteReg?: boolean;
};

function Header({ newUser, inCompleteReg }: Iheader) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const value = getObject(getFirstLevelPath(pathname));
  const dispatch = useAppDispatch();
  const { notifications } = useAppSelector((state) => state.notification);
  // const [unreadNotifications, setUnreadNotifications] = useState([]);
  const { activeMessage } = useAppSelector((state) => state.messages);
  const [sellerObject, setSellerObject] = useState<any>({});
  // const { isloading } = useAppSelector((state) => state.);
  const { transactionloading } = useLoading();
  // const disputes = useAppSelector(state => state.disputes.disputes)
  // const transactions = useAppSelector(state => state.transactions.transactions)
  // const wallet_transaction = useAppSelector(state => state.wallet.wallet.transactions)

  const [sellerAvatar, setSellerAvatar] = useState("");

  // useEffect(() => {
  //   const newNotifications = notifications.filter(
  //     (notification) => notification.read === false
  //   );
  //   setUnreadNotifications(newNotifications);
  // }, [notifications]);

  const unreadNotifications = useMemo(
    () => notifications.filter((notification) => notification.read === false),
    [notifications]
  );

  useEffect(() => {
    const activeSeller = activeMessage[0]?.seller;
    setSellerObject(activeSeller);
  }, [activeMessage]);

  // useEffect(() => {

  //   dispatch(fetchNotifications(1))
  // }, [])

  // useEffect(()=>{
  //   admin
  //   .getImage(image)
  //   .then((res) => {
  //     setSellerAvatar(res);
  //   })
  //   .catch((err) => console.log(err, "error"))
  //   .finally(() => dispatch(loadingStop()));
  // }, [image])

  return (
    <>
      <header className="confam__layout--header">
        <div className="confam__layout--header_top header">
          <button
            className="notification__icon"
            onClick={() => navigate("/notifications")}
          >
            <NotificationIcon
              color={`${
                unreadNotifications.length > 0 ? "#E01D1D" : "#FFFFFF"
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
                pathname === "/dashboard" ? `${sellerObject?.first_name}!` : ""
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
