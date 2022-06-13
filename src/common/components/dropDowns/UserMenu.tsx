import React from "react";
import { Link } from "react-router-dom";
import DropDownWrapper from ".";
import LogoutIcon from "../customIcons/LogoutIcon";
import ReminderIcon from "../customIcons/ReminderIcon";
import SettingsIcon from "../customIcons/SettingsIcon";
import UserIcon from "../customIcons/UserIcon";
import DropDownActionArea from "./DropDownActionArea";
import { stopDropDownPropagation } from "./utils";

interface menuProps {
  children: React.ReactNode;
}

function UserMenu({ children }: menuProps) {
  return (
    <DropDownWrapper trigger={children}>
      <DropDownActionArea >
        <nav onClick={stopDropDownPropagation} className="header__dropDownMenu">
          <ul className="header__dropDownMenu--container">
            <li className="header__dropDownMenu--itm">
              <Link to={"/setting/profile"}>
                <UserIcon />
                View Profile
              </Link>
            </li>
            <li className="header__dropDownMenu--itm">
              <Link to={"/setting/bank_detail"}>
                <SettingsIcon />
                Settings
              </Link>
            </li>
            <li className="header__dropDownMenu--itm">
              <Link to={"/setting/notification"}>
                <ReminderIcon />
                Send Delivery Reminder
              </Link>
            </li>
            <li className="header__dropDownMenu--itm">
              <button>
                <LogoutIcon />
                Log Out
              </button>
            </li>
          </ul>
        </nav>
      </DropDownActionArea>
    </DropDownWrapper>
  );
}

export default UserMenu;
