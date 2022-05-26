import React from "react";
import userImg from "../../../../static/images/userImage.jpeg";
import DropDownIcon from "../../customIcons/DropDownIcon";

interface userMenuProps {
  dropDownHandler: () => void;
  showDropDown: boolean;
}

function UserMenu({ dropDownHandler, showDropDown }: userMenuProps) {
  return (
    <div className="userMenu" onClick={dropDownHandler}>
      <img className="userMenu__image" src={userImg} alt="user profile" />
      <DropDownIcon className={`${showDropDown ? "userMenu__icon" : ""}`} />
    </div>
  );
}

export default UserMenu;
