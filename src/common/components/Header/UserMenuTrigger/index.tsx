import React, { useEffect, useState } from "react";
import { fetchUserDetails } from "../../../../https/storage";
import admin from "../../../../modules/service/admin";
import userImg from "../../../../static/images/userImage.jpeg";
import DropDownIcon from "../../CustomIcons/DropDownIcon";

interface userMenuProps {
  // dropDownHandler: () => void;
  // showDropDown: boolean;
}

function UserMenuTrigger({}: userMenuProps) {
  const [userAvatar, setUserAvartar] = useState("");
  useEffect(() => {
    if (fetchUserDetails().verified && !userAvatar) {
      const image = fetchUserDetails().image;
      // setUserAvartar(image);
      admin
          .getImage(image)
          .then((res) => {
          setUserAvartar(res)
          // setUserAvartar((prev) => [...prev, URL.createObjectURL(res)]);
        })
          .catch((err) => console.log(err, "error"));
    }
  }, []);

  return (
    <div className="userMenu">
      {/* <img className="userMenu__image" src={userImg} alt="user profile" /> */}
     {userAvatar ? <img src={userAvatar} alt="" className="userMenu__image" /> : <div className="userMenu__image_placeholder"></div> }
      <DropDownIcon className={`userMenu__icon`} />
    </div>
  );
}

export default UserMenuTrigger;
