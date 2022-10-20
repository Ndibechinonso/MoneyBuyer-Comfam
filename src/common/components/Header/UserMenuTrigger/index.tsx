import React, { useEffect, useState } from "react";
import admin from "../../../../modules/service/admin";
import DropDownIcon from "../../CustomIcons/DropDownIcon";
import customToast from "../../CustomToast";
import { useAppSelector } from "../../redux/hooks";

const UserMenuTrigger = () => {
  const [userAvatar, setUserAvartar] = useState("");
  const { profileImageChange } = useAppSelector((state) => state.user);
  const { verified, image } = useAppSelector((state) => state.user.user);

  useEffect(() => {
    if (verified) {
      admin
        .getImage(image)
        .then((res) => {
          setUserAvartar(res);
        })
        .catch((err) =>
          customToast(`${err.message} while getting profile image`, true)
        );
    }
  }, [profileImageChange, verified]);

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
};

export default UserMenuTrigger;
