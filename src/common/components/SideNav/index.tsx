import { Link, NavLink, useLocation } from "react-router-dom";
// import ConfirmMoneyIcon from "../customIcons/ConfamMoney";
import { language } from "../../utils/language/en";
import DashboardIcon from "../customIcons/DashBoardIcon";
import WalletIcon from "../customIcons/WalletIcon";
import TransactionIcon from "../customIcons/TransactionIcon";
// import DeliveryIcon from "../customIcons/DeliveryIcon";
import MessagesIcon from "../customIcons/MessagesIcon";
import DisputeIcon from "../customIcons/DisputeIcon";

const { navigation: PageDictionary } = language.layout;


type IsideNav = {
  newUser?:boolean,
}

function SideNav({newUser}:IsideNav) {
  const {pathname} = useLocation()
  return (
    <nav className={`confam__sideNav nav${pathname.includes("messages") && newUser === false?"__small":""}`}>
      {/* logo */}
      <Link className="nav__logo" to={"/"}>
        {/* <ConfirmMoneyIcon /> */}
      </Link>
      <ul className="nav__wrapper">
        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav__item--wrapper nav__item--wrapper__active"
                : "nav__item--wrapper"
            }
            to={"/dashboard"}
          >
            <DashboardIcon />
            <span>{PageDictionary.dashboard}</span>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav__item--wrapper nav__item--wrapper__active"
                : "nav__item--wrapper"
            }
            to={"/wallet"}
          >
            <WalletIcon />
            <span>{PageDictionary.wallet}</span>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav__item--wrapper nav__item--wrapper__active"
                : "nav__item--wrapper"
            }
            to={"/messages"}
          >
            <MessagesIcon />
            <span>{PageDictionary.messages}</span>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav__item--wrapper nav__item--wrapper__active"
                : "nav__item--wrapper"
            }
            to={"/transaction"}
          >
            <TransactionIcon />
            <span>{PageDictionary.transaction}</span>
          </NavLink>
        </li>
        {/* <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav__item--wrapper nav__item--wrapper__active"
                : "nav__item--wrapper"
            }
            to={"/delivery"}
          >
            <DeliveryIcon />
            <span>{PageDictionary.delivery}</span>
          </NavLink>
        </li> */}
        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav__item--wrapper nav__item--wrapper__active"
                : "nav__item--wrapper"
            }
            to={"/dispute"}
          >
            <DisputeIcon />
            <span>{PageDictionary.dispute}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
