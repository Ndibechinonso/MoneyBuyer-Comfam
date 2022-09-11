import React from "react";
import { useNavigate } from "react-router-dom";
import { clearUserDetails } from "../../../https/storage";
import LogoutIcon from "../CustomIcons/LogoutIcon";
import ReminderIcon from "../CustomIcons/ReminderIcon";
import SettingsIcon from "../CustomIcons/SettingsIcon";
import UserIcon from "../CustomIcons/UserIcon";
import DropDownItem from "./primitive/DropDownItem";
import DropDownMenuContent from "./primitive/DropDownMenuContent";

interface menuProps {}

function UserMenuItem({}: menuProps) {
  const navigate = useNavigate();

   const logoutHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    clearUserDetails();
    navigate("/");
  };

  return (
    <DropDownMenuContent className="header__dropDownMenu">
      <DropDownItem className="header__dropDownMenu--itm">
        <button onClick={() => navigate("/setting/profile")}>
          <UserIcon />
          View Profile
        </button>
      </DropDownItem>
      <DropDownItem className="header__dropDownMenu--itm">
        <button onClick={() => navigate("/setting/profile")}>
          <SettingsIcon />
          Settings
        </button>
      </DropDownItem>
      <DropDownItem className="header__dropDownMenu--itm">
        <button onClick={() => navigate("/setting/notification")}>
          <ReminderIcon />
          Send Delivery Reminder
        </button>
      </DropDownItem>
      <DropDownItem className="header__dropDownMenu--itm">
        <button onClick={logoutHandler}>
          <LogoutIcon />
          Log Out
        </button>
      </DropDownItem>
    </DropDownMenuContent>
  );
}

export default UserMenuItem;
