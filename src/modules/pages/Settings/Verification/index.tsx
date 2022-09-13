import React, { useEffect, useId, useState, useRef } from "react";
import CustomButton from "../../../../common/components/CustomButtons";
import NaijaFlag from "../../../../common/components/CustomIcons/NaijaFlag";
import uploadImg from "../../../../static/images/uploadImg.svg";
import { Select } from "react-select-states-and-lga-in-nigeria";
import "react-select-states-and-lga-in-nigeria/dist/index.css";
import { VerificationProps } from "../../../../common/components/redux/types";
import { setItem } from "../../../../https/storage";
import { useNavigate } from "react-router-dom";
import CustomImageInput from "../../../../common/components/CustomImageInput";
import admin from "../../../service/admin";
// import CustomImageInput from "../../CustomImageInput";
import { fetchUserDetails } from "../../../../https/storage";
import Pulse from "../../../../common/components/CustomIcons/Pulse";



const initialFormState: VerificationProps = {
  image: "",
  first_name: "",
  last_name: "",
  state: "",
  phone_number: "",
  street_number: "",
  street_name: "",
  city: "",
  local_gov: "",
};

function Verification() {
  const id = useId();
  const navigate = useNavigate();
  const { email, first_name, last_name } = fetchUserDetails();

  const [rawImage, setRawImage] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);
  const [unEditedstate, setSelectState] = useState("");
  const [local_gov, setLga] = useState("");
  const [userEmail, setUserEmail] = useState(email);
  const [inputs, setInputs] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const hiddenFileInput = useRef(null);
  const openFilePicker = () => {
    hiddenFileInput.current.click();
  };

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
      //     inputs.image = res?.response.data.key;
      //   })
      //   .catch((err) => {console.log(err); setImageLoading(false); removeImageHandler(rawImage[0])
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleStateChange = (e: any) => {
    setSelectState(e.target.value);
  };

  const handleLgaChange = (e: any) => {
    setLga(e.target.value);
  };

  useEffect(() => {
    let state = String(unEditedstate).toLowerCase();
    setInputs({ ...inputs, state, local_gov });
  }, [unEditedstate, local_gov]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    inputs.first_name = first_name
    inputs.last_name = last_name
    event.preventDefault();
    setIsSubmitted(true);
    if ( inputs.image &&
      inputs.first_name &&
      inputs.last_name &&
      inputs.state &&
      inputs.phone_number &&
      inputs.street_number &&
      inputs.street_name &&
      inputs.city &&
      inputs.local_gov){
      setItem("verification", JSON.stringify(inputs));
      navigate(`/setting/bank_detail`);
    }
  };
  return (
    <div className="profile__container">
      <form onSubmit={handleSubmit}>
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
            {rawImage.length > 0 && !imageLoading && <p>Remove Image</p>}
            {imageLoading && <Pulse /> }
          </div>
        </div>

        <div className="profile__container_form">
              <div className="form_group">
            <label htmlFor={`${id}-firstName`}> First Name </label>
            <input
              className="profile__container_form_input"
              id={`${id}-firstName`}
              type="text"
              disabled={true}
              name="first_name"
              // value={inputs.first_name}
              defaultValue={first_name}
              onChange={handleChange}
              placeholder="First Name"
            />
            {isSubmitted && !inputs.first_name && (
              <small className="input_error text-red-1 text-xs">
                *Required
              </small>
            )}
          </div>

          <div className="form_group">
            <label htmlFor={`${id}-lastName`}> Last Name </label>
            <input
              className="profile__container_form_input"
              id={`${id}-lastName`}
              disabled={true}
              type="text"
              name="last_name"
              // value={inputs.last_name}
              defaultValue={last_name}
              onChange={handleChange}
              placeholder="Last Name"
            />
            {isSubmitted && !inputs.last_name && (
              <small className="input_error text-red-1 text-xs">
                *Required
              </small>
            )}
          </div>

          <div className="form_group">
            <label htmlFor={`${id}-email`}> Email Address </label>
            <input
              className="profile__container_form_input"
              id={`${id}-email`}
              name="email"
              // value={userEmail}
              defaultValue={userEmail}
              disabled={true}
              type="email"
              placeholder="Email Address"
            />
            {/* {isSubmitted && userEmail && (
              <small className="input_error text-red-1 text-xs">
                *Required
              </small>
            )} */}
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
                name="phone_number"
                value={inputs.phone_number}
                onChange={(e) => {
                  const value = e.target.value.trim();
                  // if((!/\d+/.test(value) && value !== "") || value.length > 11 || !/\d+/.test(value))return
                  // if (!/^\d*[.]?\d*$/.test(value) || value.length > 11) return;
                  if (!/^[0-9]*$/.test(value) || value.length > 11) return;
                  handleChange(e);
                }}
                placeholder="0703-436-5367"
                minLength={11}
                maxLength={11}
              />
            </div>
            {isSubmitted && !inputs.phone_number && (
              <small className="input_error text-red-1 text-xs">
                *Required
              </small>
            )}
          </div>

          <div className="form_group">
            <label htmlFor={`${id}-street_number`}> Street Number</label>
            <input
              className="profile__container_form_input"
              id={`${id}-street_number`}
              type="text"
              name="street_number"
              value={inputs.street_number}
              onChange={(e) => {
                const value = e.target.value.trim();
                if ((!/\d+/.test(value) && value !== "") || value.length > 11)
                  return;
                handleChange(e);
              }}
              placeholder="Enter Street Number"
            />
            {isSubmitted && !inputs.street_number && (
              <small className="input_error text-red-1 text-xs">
                *Required
              </small>
            )}
          </div>

          <div className="form_group">
            <label htmlFor={`${id}-street_name`}> Street Name</label>
            <input
              className="profile__container_form_input"
              id={`${id}-street_name`}
              type="text"
              name="street_name"
              value={inputs.street_name}
              onChange={handleChange}
              placeholder="Enter Street Name"
            />
            {isSubmitted && !inputs.street_name && (
              <small className="input_error text-red-1 text-xs">
                *Required
              </small>
            )}
          </div>

          <div className="form_group">
            <label htmlFor={`${id}-city`}> City</label>
            <input
              className="profile__container_form_input"
              id={`${id}-city`}
              type="text"
              name="city"
              value={inputs.city}
              onChange={handleChange}
              placeholder="City"
            />
            {isSubmitted && !inputs.city && (
              <small className="input_error text-red-1 text-xs">
                *Required
              </small>
            )}
          </div>

          <div className="form_group">
            <Select
              state={unEditedstate}
              lga={local_gov}
              changeState={handleStateChange}
              changeLga={handleLgaChange}
            />
            {isSubmitted && (!unEditedstate || !local_gov) && (
              <small className="input_error text-red-1 text-xs">
                *Required
              </small>
            )}
          </div>
        </div>
        <CustomButton
          className="profile__cta"
          type="submit"
          disabled={imageLoading}
          action={() => null}
          actionText="Next"
        />
      </form>
    </div>
  );
}

export default Verification;
