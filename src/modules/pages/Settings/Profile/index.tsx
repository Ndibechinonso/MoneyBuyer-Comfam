import React, { useEffect, useId, useRef, useState } from 'react'
import CustomButton from '../../../../common/components/CustomButtons'
import CustomForm from '../../../../common/components/CustomForms';
import NaijaFlag from '../../../../common/components/CustomIcons/NaijaFlag'
import { fetchUserDetails } from '../../../../https/storage';
import uploadImg from "../../../../static/images/uploadImg.svg";
import admin from '../../../service/admin';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';
import CustomToast from '../../../../common/components/CustomToast';

function Profile() {
  const id = useId()
  const navigate = useNavigate();
  const userId = fetchUserDetails().id;
const REACT_APP_FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL
const { email, first_name, last_name, phone_number } = fetchUserDetails();

  const [rawImage, setRawImage] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);
  const [copied, setCopied] = useState(false)
  const hiddenFileInput = useRef(null);
  const openFilePicker = () => {
    hiddenFileInput.current.click();
  };

  useEffect(()=>{
    if(!fetchUserDetails().verified){
      navigate("/setting/verification");
    }
  }, [])

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if(imageLoading) return
    const { files } = e.target;

    if (files.length) {
      setRawImage([files.item(0)]);
      setImageLoading(true)
      // admin
      //   .uploadImage(files.item(0))
      //   .then((res) => {
      //     setImageLoading(false)
      //     console.log(res, "res");
      //   })
      //   .catch((err) => {console.log(err); setImageLoading(false)
      //   });
    }
  };

  const removeImageHandler = (file: any) => {
    if(imageLoading) return
    const temp = rawImage.filter(
      (img) => img.lastModified !== file.lastModified
    );
    setRawImage([...temp]);
  };


  return (
    <div className ='profile__container'>
        <form onSubmit={(e) => e.preventDefault()}>
        <div className={`profile__container_header`}>
          <div className={`profile_image_div cursor-pointer ${imageLoading ? "loading_state" : ""}`}>
            {rawImage.length < 1 && (
              <img
                src={uploadImg}
                alt="profile mugshot"
                className="profile_picture_placeholder"
                onClick={openFilePicker}
              />
            )}
            <input
              type="file"
              name="images"
              value=""
              ref={hiddenFileInput}
              accept="image/png, image/jpeg"
              id={`${id}-product_image`}
              onChange={changeHandler}
            />

            {rawImage.map((img, idx) => (
              <div key={img?.lastModified} className="" >
                <img
                  onClick={() => removeImageHandler(img)}
                  className="profile_picture"
                  key={img?.lastModified}
                  src={URL.createObjectURL(img)}
                  alt={`product`}
                />
              </div>
            ))}
            {rawImage.length > 0 && <p>Remove Image</p>}
          </div>

          <h4> Referral Code </h4>
                  <div className="profile__container_header-copy">
                    <h5 className="linkText">{`${REACT_APP_FRONTEND_URL}?referralId=${userId}`}</h5>
                    <CopyToClipboard text={`${REACT_APP_FRONTEND_URL}?id=${userId}`}
          onCopy={() => CustomToast("Link copied")}>
          <h5 className="copy">Copy</h5>
        </CopyToClipboard>
                    {/* <h5 className="copy">Copy</h5> */}
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
                    <label htmlFor={`${id}-password`}> Password </label>
                    <input
                      className="profile__container_form_input"
                      id={`${id}-password`}
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form_group">
                    <label htmlFor={`${id}-confirm_password`}>
                      {" "}
                      Confirm Password{" "}
                    </label>
                    <input
                      className="profile__container_form_input"
                      id={`${id}-confirm_password`}
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </div>

            </div>
           
              <CustomButton
                className="profile__cta"
                action={() => console.log("profile updated")}
                actionText="Update Profile"
              />

      </form>
      </div>
  )
}

export default Profile