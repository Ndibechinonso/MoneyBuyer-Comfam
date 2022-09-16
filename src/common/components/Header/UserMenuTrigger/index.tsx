import React, { useEffect, useState } from "react";
import { fetchUserDetails } from "../../../../https/storage";
import admin from "../../../../modules/service/admin";
import userImg from "../../../../static/images/userImage.jpeg";
import DropDownIcon from "../../CustomIcons/DropDownIcon";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import fetchUser from "../../redux/getUser/getUserThunk";

function UserMenuTrigger() {
  const dispatch = useAppDispatch()

  const {user, profileImageChange} = useAppSelector((state) => state.user)
 
  // useEffect(() =>{
  //   dispatch(fetchUser())
  // }, [])
  // useEffect(() =>{
  //   console.log(user, "user");
    
  // }, [user])
  const [userAvatar, setUserAvartar] = useState("");

  useEffect(() => {
    if ((fetchUserDetails().verified && !userAvatar) || profileImageChange) {
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
