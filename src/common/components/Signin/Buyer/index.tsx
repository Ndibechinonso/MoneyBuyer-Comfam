import React, { useId, useState } from "react";
import CustomButton from "../../customButtons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import auth from "../../../../modules/service/auth";
import { storeUserDetails, storeUserToken } from "../../../../https/storerage";
import { useNavigate } from "react-router-dom";
import { loadingStart, loadingStop } from "../../redux/apploader";
import customtoast from "../../customToast";

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
  const [inputs, setInputs] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (!validate) return;
    console.log(inputs);
    dispatch(loadingStart(""));
    auth
      .loginBuyer(inputs)
      .then((res) => {
        setIsSubmitted(false);
        storeUserToken(res.tokens.accessToken);
        storeUserDetails(res.user)
        navigate("/dashboard");
      })
      .catch((err) => {
        setIsSubmitted(false);
        customtoast(err.message, true);
        auth
          .resendVerifyBuyer({ email: inputs.email })
          .then((res) => customtoast(res.message))
          .catch((err) => console.log(err));
        navigate(`/verification?email=${inputs.email}`);
      })
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
            {isSubmitted && !inputs.email && (
              <small className="input_error text-red-1 text-xs">
                *Required
              </small>
            )}
          </div>
          <div className="form_group">
            <label htmlFor={`${id}-password`}>Password</label>
            <div className="seller_container_form_input_container">
              <input
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
              {isSubmitted && !inputs.password && (
                <small className="input_error text-red-1 text-xs">
                  *Required
                </small>
              )}
            </div>
          </div>

          <CustomButton
            className="signup_btn"
            disabled={isloading}
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
