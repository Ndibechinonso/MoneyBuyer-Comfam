import React, { useId, useState } from "react";
import CustomButton from "../../CustomButtons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import auth from "../../../../modules/service/auth";
import { useNavigate } from "react-router-dom";
import { loadingStart, loadingStop } from "../../redux/apploader";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { validateEmail, validatePassword } from "../../../utils";
import CustomToast from "../../CustomToast";

const BuyerForm = () => {
  const id = useId();
  const queryParams = new URLSearchParams(window.location.search).get("referal_id")
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { isloading } = useAppSelector((state) => state.isloading);
  const navigate = useNavigate();
  const initialFormState = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    signupTAC: false,
    referal_id : ""
  };
  const [inputs, setInputs] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false)

const handleShowPassword = () => {
  setShowPassword((prev) => !prev);
};
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    if (name !== "signupTAC") {
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
    } else {
      setInputs((values) => ({ ...values, [name]: event.target.checked }));
    }
  };

  const validate =
    inputs.first_name &&
    inputs.last_name &&
    inputs.email &&
    validatePassword(inputs.password) &&
    inputs.signupTAC;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true)
    if(!validate) return
    if(queryParams) {
      inputs.referal_id = queryParams
    }
    dispatch(loadingStart(""));
    auth
      .registerBuyer(inputs)
      .then((res) => { setIsSubmitted(false); navigate(`/verification?email=${inputs.email}`) })
      .catch((err) => {  setIsSubmitted(false); CustomToast(err.message)})
      .finally(() => dispatch(loadingStop()));
  };

  return (
    <div className="biodata_container">
      <form onSubmit={handleSubmit}>
        <div className="seller_container_form">
          <div className="form_group">
            <label htmlFor={`${id}-first_name`}>First Name</label>
            <input
              disabled={isloading}
              className="seller_container_form_input"
              name="first_name"
              id={`${id}-first_name`}
              value={inputs.first_name}
              onChange={handleChange}
              placeholder="Enter First Name"
            />
           {isSubmitted && !inputs.first_name && <small className="input_error text-red-1 text-xs">*Required</small> }
          </div>
          <div className="form_group">
            <label htmlFor={`${id}-last_name`}>Last Name</label>
            <input
              disabled={isloading}
              className="seller_container_form_input"
              name="last_name"
              id={`${id}-last_name`}
              value={inputs.last_name}
              onChange={handleChange}
              placeholder="Enter Last Name"
            />
         {isSubmitted && !inputs.last_name && <small className="input_error text-red-1 text-xs">*Required</small> }
          </div>
          <div className="form_group">
            <label htmlFor={`${id}-email`}>Email Address</label>
            <input
              disabled={isloading}
              className="seller_container_form_input"
              name="email"
              id={`${id}-email`}
              value={inputs.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
            />
         {isSubmitted && !inputs.email && <small className="input_error text-red-1 text-xs">*Required</small> }
         {isSubmitted && !validateEmail(inputs.email) && <small className="input_error text-red-1 text-xs">  Please provide a valid email</small> }  
          </div>
          <div className="form_group">
            <label htmlFor={`${id}-password`}>Password</label>
            <div className="seller_container_form_input_container">
            <input      
              disabled={isloading}
              className="seller_container_form_input"
              name="password"
              id={`${id}-password`}
              value={inputs.password}
              onChange={handleChange}
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
            />
                <button
                type="button"
                onClick={handleShowPassword}
                className="seller_container_form_input_icon"
              >
                {!showPassword ? <BsEyeSlash /> : <BsEye />}
              </button>
              </div>
          {isSubmitted && !validatePassword(inputs.password) && <small className="input_error text-red-1 text-xs">Password must contain 1 capital , 1 small letter, 1 number, 1 special character and have a minimum length of 8</small> }
          </div>
          <div className="ts_con">
            <input
              disabled={isloading}
              type="checkbox"
              id={`${id}-signup_ta`}
              name="signupTAC"
              onChange={handleChange}
            />
            <label
              htmlFor={`${id}-signup_ta`}
              className={`${
                inputs.signupTAC ? "checked_label" : ""
              } signup_ta cursor-pointer`}
            >
              By creating an account I agree to the Terms & Conditions
            </label> <br />
            {isSubmitted && !inputs.signupTAC && <small className="input_error text-red-1 text-xs">*Required</small> }
          </div>
          <CustomButton
            className="signup_btn"
            disabled={isloading}
            type="submit"
            action={() => null}
            actionText="Create Account"
          />
        </div>
      </form>
    </div>
  );
};

export default BuyerForm;
