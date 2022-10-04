import React, { useId, useState } from "react";
import CustomButton from "../../CustomButtons";
import { Signup } from "../../redux/signup/signupActions";
import { useAppDispatch } from "../../redux/hooks";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import Signin from "../../../../modules/pages/Auth/Signin";

const Form = () => {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const initialFormState = {
    email: "",
    password: "",
  };
  const [inputs, setInputs] = useState(initialFormState as any);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputs((values: {}) => ({ ...values, [name]: value }));
  };
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputs(initialFormState);
    dispatch(Signup("verification"));
  };

  const validate = inputs.email && inputs.password;

  return (
    <Signin>
      <div className="biodata_container">
        <form>
          <div className="seller_container_form">
            <div className="form_group">
              <label htmlFor={`${id}-email`}>Email Address</label>
              <input
                type="email"
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
              <div className="seller_container_form_input_container">
                <input
                  autoComplete="off"
                  className="seller_container_form_input"
                  name="password"
                  id={`${id}-password`}
                  value={inputs.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  type={`${showPassword ? "text" : "password"}`}
                />
                <button
                  type="button"
                  onClick={handleShowPassword}
                  className="seller_container_form_input_icon"
                >
                  {!showPassword ? <BsEyeSlash /> : <BsEye />}
                </button>
              </div>
            </div>

            <CustomButton
              className="signup_btn"
              disabled={!validate}
              type="submit"
              action={handleSubmit}
              actionText="Sign In"
            />
          </div>
        </form>
      </div>
    </Signin>
  );
};

export default Form;
