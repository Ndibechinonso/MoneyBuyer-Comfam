import React from "react";
import userImg from "../../../../static/images/userImage.jpeg";
import DropDownIcon from "../../customIcons/DropDownIcon";

interface userMenuProps {
  // dropDownHandler: () => void;
  // showDropDown: boolean;
}

function UserMenuTrigger({}: userMenuProps) {
  return (
    <div className="userMenu">
      <img className="userMenu__image" src={userImg} alt="user profile" />
      <DropDownIcon className={`userMenu__icon`} />
    </div>
  );
}

export default UserMenuTrigger;
