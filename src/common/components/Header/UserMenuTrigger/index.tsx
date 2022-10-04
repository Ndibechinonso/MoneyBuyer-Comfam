import React, { useEffect, useRef, useState } from "react";
import admin from "../../../../modules/service/admin";
import DropDownIcon from "../../CustomIcons/DropDownIcon";
import { useAppSelector } from "../../redux/hooks";

const UserMenuTrigger = () => {

  const runOnce = useRef(false);
  const [userAvatar, setUserAvartar] = useState("");
  const {profileImageChange} = useAppSelector((state) => state.user)
  const {verified, image} = useAppSelector(state => state.user.user)

  useEffect(() => {
    if (runOnce.current && !profileImageChange) {
      return;
    }
    if ((verified && !userAvatar) || profileImageChange) {
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
