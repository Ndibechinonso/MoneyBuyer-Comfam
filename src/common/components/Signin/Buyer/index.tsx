import React, { useId, useState } from "react";
import CustomButton from "../../CustomButtons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import auth from "../../../../modules/service/auth";
import { storeUserToken } from "../../../../https/storage";
import { useNavigate } from "react-router-dom";
import { loadingStart, loadingStop } from "../../redux/apploader";
import customtoast from "../../CustomToast";
import { updateUser } from "../../redux/getUser/getUserSlice";
import Signin from "../../../../modules/pages/Auth/Signin";
import route from "../../../routes/route";

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
    dispatch(loadingStart(""));
    auth
      .loginBuyer(inputs)
      .then((res) => {
        customtoast(res?.message);
        console.log(res, "res");
        
        setIsSubmitted(false);
        storeUserToken(res.tokens.accessToken);
        dispatch(
          updateUser({
            ...res.user.buyer,
            transaction_count: res.user.transactionCount,
          })
        );
        navigate(route.protected.dashboard);
      })
      .catch((err) => {
        setIsSubmitted(false);
        customtoast(err.message, true);
      })
      .finally(() => dispatch(loadingStop()));
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
    </Signin>
  );
};

export default Form;
