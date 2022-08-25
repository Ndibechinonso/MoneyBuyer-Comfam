import React, { useId, useState } from "react";
import CustomButton from "../../customButtons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import auth from "../../../../modules/service/auth";
import { storeUserDetails, storeUserToken } from "../../../../https/storerage";
import { useNavigate } from "react-router-dom";
import { loadingStart, loadingStop } from "../../redux/apploader";

const Form = () => {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);
  const { isloading } = useAppSelector((state) => state.isloading);
  const navigate = useNavigate();
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
    dispatch(loadingStart(""));
    auth
      .loginBuyer(inputs)
      .then((res) => {
        console.log(res, "res")
        storeUserDetails(res.user);
        storeUserToken(res.tokens.accessToken);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(loadingStop()));
  };

  const validate = inputs.email && inputs.password;

  return (
    <div className="biodata_container">
      <form>
        <div className="seller_container_form">
          <div className="form_group">
            <label htmlFor={`${id}-email`}>Email Address</label>
            <input
              type="email"
              disabled={isloading}
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
                required
                disabled={isloading}
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
            disabled={!validate || isloading}
            type="submit"
            action={handleSubmit}
            actionText="Sign In"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
