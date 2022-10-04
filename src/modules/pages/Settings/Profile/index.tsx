import React, { useEffect, useId, useRef, useState } from "react";
import CustomButton from "../../../../common/components/CustomButtons";
import NaijaFlag from "../../../../common/components/CustomIcons/NaijaFlag";
import admin from "../../../service/admin";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useNavigate } from "react-router-dom";
import CustomToast from "../../../../common/components/CustomToast";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../common/components/redux/hooks";
import {
  loadingStart,
  loadingStop,
} from "../../../../common/components/redux/apploader";
import Pulse from "../../../../common/components/CustomIcons/Pulse";
import {
  updatePassword,
  uploadProfileImage,
} from "../../../../common/components/redux/completeUserProfile/completeProfileThunk";
import Settings from "..";
import route from "../../../../common/routes/route";
import useScrollToView from "../../../../common/hooks/useScrollToView";

const REACT_APP_FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL;

const Profile = () => {
  const id = useId();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isloading } = useAppSelector((state) => state.isloading);
  const { profileImageChange } = useAppSelector((state) => state.user);
  const { passwordInputs } = useAppSelector((state) => state.completeProfile);
  const {
    id: userId,
    first_name,
    last_name,
    phone_number,
    email,
    verified,
    image,
  } = useAppSelector((state) => state.user.user);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [userAvatar, setUserAvartar] = useState("");
  const hiddenFileInput = useRef(null);
  const headerRef = useScrollToView();

  useEffect(() => {
    if ((verified && !userAvatar) || profileImageChange) {
      dispatch(loadingStart(""));
      admin
        .getImage(image)
        .then((res) => {
          setUserAvartar(res);
        })
        .catch((err) => console.log(err, "error"))
        .finally(() => dispatch(loadingStop()));
    }
    if (!verified) {
      navigate(route.protected.setting_verification);
    }
  }, [profileImageChange]);

  useEffect(() => {
    if (!verified) {
      navigate(route.protected.setting_verification);
    }
  }, []);

  const responseActions = () => {
    setNewPassword("");
    setOldPassword("");
  };
  useEffect(() => {
    responseActions();
  }, [passwordInputs]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loadingStart(""));
    dispatch(updatePassword({ oldPassword, newPassword }));
  };

  const openFilePicker = () => {
    hiddenFileInput.current.click();
  };

  const changeHandler = async (
    e: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (isloading) return;
    const { files } = e.target;

    if (files.length) {
      dispatch(loadingStart(""));
      dispatch(uploadProfileImage({ files }));
    }
  };

  return (
    <Settings>
      <div className="profile__container">
        <form onSubmit={handleSubmit}>
          <div ref={headerRef} className={`profile__container_header`}>
            <div
              className={`profile_image_div cursor-pointer ${
                isloading ? "loading_state" : ""
              }`}
            >
              {isloading ? (
                <div className="center_place">
                  <Pulse />{" "}
                </div>
              ) : (
                <p
                  onClick={openFilePicker}
                  className="profile_image_overlay center_place"
                >
                  Update Image
                </p>
              )}
              <input
                type="file"
                name="images"
                ref={hiddenFileInput}
                accept="image/png, image/jpeg"
                id={`${id}-product_image`}
                onChange={changeHandler}
              />
              {userAvatar && (
                <img
                  src={userAvatar}
                  alt=""
                  className="profile__container__image"
                />
              )}
            </div>

            <h4> Referral Code </h4>
            <div className="profile__container_header-copy">
              <h5 className="linkText">{`${REACT_APP_FRONTEND_URL}?referal_id=${userId}`}</h5>
              <CopyToClipboard
                text={`${REACT_APP_FRONTEND_URL}?referal_id=${userId}`}
                onCopy={() => CustomToast("Link copied")}
              >
                <h5 className="copy cursor-pointer">Copy</h5>
              </CopyToClipboard>
            </div>
          </div>
          <div className="profile__container_form">
            <div className="form_group">
              <label htmlFor={`${id}-firstName`}> First Name </label>
              <input
                className="profile__container_form_input"
                id={`${id}-firstName`}
                type="text"
                placeholder="First Name"
                disabled={true}
                defaultValue={first_name}
              />
            </div>
            <div className="form_group">
              <label htmlFor={`${id}-lastName`}> Last Name </label>
              <input
                className="profile__container_form_input"
                id={`${id}-lastName`}
                type="text"
                placeholder="Last Name"
                defaultValue={last_name}
                disabled={true}
              />
            </div>
            <div className="form_group">
              <label htmlFor={`${id}-email`}> Email Address </label>
              <input
                className="profile__container_form_input"
                id={`${id}-email`}
                type="email"
                placeholder="Email Address"
                defaultValue={email}
                disabled={true}
              />
            </div>
            <div className="form_group">
              <label htmlFor={`${id}-phoneNumber`}> Phone Number </label>
              <div className="profile__container_form_input flex">
                <div className="input_telephone">
                  <NaijaFlag />
                  <span> +234 </span>
                </div>
                <input
                  id={`${id}-phoneNumber`}
                  type="tel"
                  placeholder="0703-436-5367"
                  defaultValue={phone_number}
                />
              </div>
            </div>
            <div className="form_group">
              <label htmlFor={`${id}-password`}>Old Password </label>
              <input
                required
                className="profile__container_form_input"
                id={`${id}-old_password`}
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Old Password"
                disabled={isloading}
              />
            </div>
            <div className="form_group">
              <label htmlFor={`${id}-password`}>New Password </label>
              <input
                required
                className="profile__container_form_input"
                id={`${id}-new_password`}
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                disabled={isloading}
              />
            </div>
          </div>

          <CustomButton
            className="profile__cta"
            action={() => {}}
            actionText="Update Profile"
            disabled={isloading}
          />
        </form>
      </div>
    </Settings>
  );
};

export default Profile;
