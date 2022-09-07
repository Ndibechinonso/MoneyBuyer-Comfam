import React, { useEffect, useId, useState, useRef } from "react";
import CustomButton from "../../../../common/components/customButtons";
import NaijaFlag from "../../../../common/components/customIcons/NaijaFlag";
import uploadImg from "../../../../static/images/uploadImg.svg";
import { Select } from "react-select-states-and-lga-in-nigeria";
import "react-select-states-and-lga-in-nigeria/dist/index.css";
import { VerificationProps } from "../../../../common/components/redux/types";
import { setItem } from "../../../../https/storage";
import { useNavigate } from "react-router-dom";
import CustomImageInput from "../../../../common/components/CustomImageInput";
import customtoast from "../../../../common/components/customToast";
import admin from "../../../service/admin";
// import CustomImageInput from "../../CustomImageInput";

const initialFormState: VerificationProps = {
  image: "",
  first_name: "",
  last_name: "",
  state: "",
  phone_number: "",
  street_number: null,
  street_name: "",
  city: "",
  local_gov: "",
};

function Verification() {
  const id = useId();
  const navigate = useNavigate();

  const [rawImages, setRawImages] = useState([]);
  const [imageUrl, setImageUrl] = useState("")
  const [state, setSelectState] = useState("");
  const [local_gov, setLga] = useState("");

  const [inputs, setInputs] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const hiddenFileInput = useRef(null)
const openFilePicker = () =>{
  hiddenFileInput.current.click()
}
useEffect(() =>{
console.log(inputs);

}, [inputs])
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { files } = e.target;

    if (files.length) {
      setRawImages((prev) => [...prev, files.item(0)]);
      admin
        .uploadImage(files.item(0).name)
        .then((res) => {customtoast(res.statusText); console.log(res, "res"); inputs.image = (res?.data?.url) })
        .catch((err) => console.log(err));
    }
  };

  const removeImageHandler = (file: any) => {
    const temp = rawImages.filter(
      (img) => img.lastModified !== file.lastModified
    );
    setRawImages([...temp]);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleStateChange = (e: any) => {
    setSelectState(e.target.value);
    console.log(e.target.value, "state");
  };

  const handleLgaChange = (e: any) => {
    setLga(e.target.value);
    console.log(e.target.value, "lga");
  };

  const validate =
  inputs.image &&
    inputs.first_name &&
    inputs.last_name &&
    inputs.state &&
    inputs.phone_number &&
    inputs.street_number &&
    inputs.street_name &&
    inputs.city &&
    inputs.local_gov;

  useEffect(() => {
    setInputs({ ...inputs, state, local_gov });
  }, [state, local_gov]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (!validate) return;
    setItem("verification", JSON.stringify(inputs));
    navigate(`/setting/bank_detail`);
  };
  return (
    <div className="profile__container">
      <form onSubmit={handleSubmit}>
        <div className="profile__container_header">
          <div className="profile_image_div cursor-pointer">
            {(rawImages.length < 1) && <img
              src={uploadImg}
              alt="profile mugshot"
              className="profile_picture_placeholder"
              onClick={openFilePicker}
            /> }
            <input
              type="file"
              name="images"
              value=""
              ref={hiddenFileInput}
              accept="image/png, image/jpeg"
              id={`${id}-product_image`}
              onChange={changeHandler}
            />

            {rawImages.map((img, idx) => (
              <div key={img?.lastModified} className="">
                <img
                  onClick={() => removeImageHandler(img)}
                  className="profile_picture"
                  key={img?.lastModified}
                  src={URL.createObjectURL(img)}
                  alt={`product`}
                />
              </div>
            ))}
            {(rawImages.length > 0) && <p>Remove Image</p>}
          </div>
        </div>

        <div className="profile__container_form">
          <div className="form_group">
            <label htmlFor={`${id}-firstName`}> First Name </label>
            <input
              className="profile__container_form_input"
              id={`${id}-firstName`}
              type="text"
              name="first_name"
              value={inputs.first_name}
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
              type="text"
              name="last_name"
              value={inputs.last_name}
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
              // value={inputs.last_name}
              type="email"
              placeholder="Email Address"
            />
            {isSubmitted && !inputs.first_name && (
              <small className="input_error text-red-1 text-xs">
                *Required
              </small>
            )}
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
                onChange={handleChange}
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
              type="number"
              name="street_number"
              value={inputs.street_number}
              onChange={handleChange}
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
              state={state}
              lga={local_gov}
              changeState={handleStateChange}
              changeLga={handleLgaChange}
            />
            {isSubmitted && (!state || !local_gov) && (
              <small className="input_error text-red-1 text-xs">
                *Required
              </small>
            )}
          </div>
        </div>
        <CustomButton
          className="profile__cta"
          type="submit"
          action={() => {}}
          actionText="Next"
        />
      </form>
    </div>
  );
}

export default Verification;
