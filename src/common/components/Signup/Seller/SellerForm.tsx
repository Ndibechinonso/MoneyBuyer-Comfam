import React, { useId, useState } from "react";
import CustomButton from "../../CustomButtons";
import bvnInfo from "../../../../static/images/bvn_info.png";
import { Signup } from "../../redux/signup/signupActions";
import { useAppDispatch } from "../../redux/hooks";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const SellerForm = () => {
  const id = useId();
  const dispatch = useAppDispatch();

  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    state: "",
    city: "",
    street: "",
    lga: "",
    bvn: "",
    businessName: "",
    serviceIndustry: "",
    signupTAC: false,
  };
  const [inputs, setInputs] = useState(initialFormState as any);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    if (name !== "signupTAC") {
      const value = event.target.value;
      setInputs((values: {}) => ({ ...values, [name]: value }));
    } else {
      setInputs((values: {}) => ({ ...values, [name]: event.target.checked }));
    }
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputs);
    setInputs(initialFormState);
    dispatch(Signup("verification"));
  };

  const validate =
    inputs.firstName &&
    inputs.lastName &&
    inputs.email &&
    inputs.password &&
    inputs.state &&
    inputs.city &&
    inputs.street &&
    inputs.lga &&
    inputs.bvn &&
    inputs.businessName &&
    inputs.serviceIndustry &&
    inputs.signupTAC;

  return (
    <div className="biodata_container">
      <form onSubmit={handleSubmit}>
        <div className="seller_container_form">
          <div className="form_group">
            <label htmlFor={`${id}-firstName`}> First Name </label>
            <input
              className="seller_container_form_input"
              id={`${id}-firstName`}
              type="text"
              name="firstName"
              value={inputs.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
            />
          </div>
          <div className="form_group">
            <label htmlFor={`${id}-lastName`}> Last Name </label>
            <input
              className="seller_container_form_input"
              id={`${id}-lastName`}
              type="text"
              name="lastName"
              value={inputs.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
            />
          </div>
          <div className="form_group">
            <label htmlFor={`${id}-email`}> Email Address </label>
            <input
              className="seller_container_form_input"
              id={`${id}-email`}
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
            />
          </div>

          <div className="form_group">
            <label htmlFor={`${id}-password`}> Password </label>
            <input
              className="seller_container_form_input"
              id={`${id}-password`}
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>

          <div className="state_div">
            <div className="form_group">
              <label htmlFor={`${id}-state`}> State </label>
              <input
                className="seller_container_form_input"
                id={`${id}-state`}
                type="text"
                name="state"
                value={inputs.state}
                onChange={handleChange}
                placeholder="Select State"
              />
            </div>
            <div className="form_group">
              <label htmlFor={`${id}-city`}> City </label>
              <input
                className="seller_container_form_input"
                id={`${id}-city`}
                type="text"
                name="city"
                value={inputs.city}
                onChange={handleChange}
                placeholder="Select City"
              />
            </div>
          </div>
          <div className="form_group">
            <label htmlFor={`${id}-street_add`}> Street Address</label>
            <input
              className="seller_container_form_input"
              id={`${id}-street_add`}
              type="text"
              name="street"
              value={inputs.street}
              onChange={handleChange}
              placeholder="Enter Address"
            />
          </div>
          <div className="form_group">
            <label htmlFor={`${id}-lga`}> Local Government </label>
            <input
              className="seller_container_form_input"
              id={`${id}-lga`}
              type="text"
              name="lga"
              value={inputs.lga}
              onChange={handleChange}
              placeholder="Select Local Government"
            />
          </div>

          <div className="form_group bvn_div">
            <label htmlFor={`${id}-bvn`}>
              <span>BVN</span>
              <Tippy
                content={
                  <>
                    <>Bank verification number is an</>
                    <br />
                    <>11 digit number that is unique to each</>
                    <br />
                    <>individual, but the same across all</>
                    <br />
                    <>bank institutions for the same</>
                    <br />
                    <>individual</>
                  </>
                }
              >
                <img src={bvnInfo} alt="bvn info" className="cursor-pointer" />
              </Tippy>
            </label>
            <input
              className="seller_container_form_input"
              id={`${id}-bvn`}
              type="number"
              name="bvn"
              value={inputs.bvn}
              onChange={handleChange}
              placeholder="Enter Bank Verification Number"
            />
          </div>
          <div className="form_group">
            <label htmlFor={`${id}-business_name`}> Business Name </label>
            <input
              className="seller_container_form_input"
              id={`${id}-business_name`}
              type="text"
              name="businessName"
              value={inputs.businessName}
              onChange={handleChange}
              placeholder="Enter Business Name"
            />
          </div>
          <div className="form_group">
            <label htmlFor={`${id}-service_industry`}> Service Industry </label>
            <input
              className="seller_container_form_input"
              id={`${id}-service_industry`}
              type="text"
              name="serviceIndustry"
              value={inputs.serviceIndustry}
              onChange={handleChange}
              placeholder="Select Service Industry"
            />
          </div>

          <div className="ts_con">
            <input
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
            </label>
          </div>

          <CustomButton
            className="signup_btn"
            disabled={!validate}
            type="submit"
            action={handleSubmit}
            actionText="Create Account"
          />
        </div>
      </form>
    </div>
  );
};

export default SellerForm;
