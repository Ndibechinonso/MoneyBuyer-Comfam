import React from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "../customIcons/LogoutIcon";
import ReminderIcon from "../customIcons/ReminderIcon";
import SettingsIcon from "../customIcons/SettingsIcon";
import UserIcon from "../customIcons/UserIcon";
import DropDownItem from "./primitive/DropDownItem";
import DropDownMenuContent from "./primitive/DropDownMenuContent";

interface menuProps {}

function UserMenuItem({}: menuProps) {
  const navigate = useNavigate();

  return (
    <DropDownMenuContent className="header__dropDownMenu">
      <DropDownItem className="header__dropDownMenu--itm">
        <button onClick={() => navigate("/setting/profile")}>
          <UserIcon />
          View Profile
        </button>
      </DropDownItem>
      <DropDownItem className="header__dropDownMenu--itm">
        <button onClick={() => navigate("/setting/bank_detail")}>
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
        <button>
          <LogoutIcon />
          Log Out
        </button>
      </DropDownItem>
    </DropDownMenuContent>
  );
}

export default UserMenuItem;