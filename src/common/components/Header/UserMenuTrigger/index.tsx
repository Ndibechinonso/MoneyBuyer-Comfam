import React, { useEffect, useRef, useState } from "react";
import { fetchUserDetails } from "../../../../https/storage";
import admin from "../../../../modules/service/admin";
import DropDownIcon from "../../CustomIcons/DropDownIcon";
import { useAppSelector } from "../../redux/hooks";

const UserMenuTrigger = () => {

  const runOnce = useRef(false);
  const [userAvatar, setUserAvartar] = useState("");
  const {profileImageChange} = useAppSelector((state) => state.user)

  useEffect(() => {
    if (runOnce.current && !profileImageChange) {
      return;
    }
    if ((fetchUserDetails().verified && !userAvatar) || profileImageChange) {
      const image = fetchUserDetails().image;
      admin
        .getImage(image)
        .then((res) => {
          setUserAvartar(res);
        })
        .catch((err) => console.log(err, "error"));
      runOnce.current = true;
    }
  }, [profileImageChange]);

  return (
    <div className="userMenu">
      {userAvatar ? (
        <img src={userAvatar} alt="" className="userMenu__image" />
      ) : (
        <div className="userMenu__image_placeholder"></div>
      )}
      <DropDownIcon className={`userMenu__icon`} />
    </div>
  );
}

export default UserMenuTrigger;
