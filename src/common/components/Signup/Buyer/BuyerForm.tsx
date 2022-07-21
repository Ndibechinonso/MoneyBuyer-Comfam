import React, { useId, useState } from "react";
import CustomButton from "../../customButtons";
import { Signup } from "../../redux/signup/signupActions";
import { useAppDispatch } from "../../redux/hooks";

const BuyerForm = () => {
  const id = useId();
  const dispatch = useAppDispatch();
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
    inputs.signupTAC;

  return (
    <div className="biodata_container">
      <form>
        <div className="seller_container_form">
          <div className="form_group">
            <label htmlFor={`${id}-firstName`}>First Name</label>
            <input
              className="seller_container_form_input"
              name="firstName"
              id={`${id}-firstName`}
              value={inputs.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
            />
          </div>

          <div className="form_group">
            <label htmlFor={`${id}-lastName`}>Last Name</label>
            <input
              className="seller_container_form_input"
              name="lastName"
              id={`${id}-lastName`}
              value={inputs.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
            />
          </div>
          <div className="form_group">
            <label htmlFor={`${id}-email`}>Email Address</label>
            <input
              className="seller_container_form_input"
              name="email"
              id={`${id}-email`}
              value={inputs.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
            />
          </div>
          <div className="form_group">
            <label htmlFor={`${id}-password`}>Password</label>
            <input
              className="seller_container_form_input"
              name="password"
              id={`${id}-password`}
              value={inputs.password}
              onChange={handleChange}
              placeholder="Enter First Name"
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

export default BuyerForm;
