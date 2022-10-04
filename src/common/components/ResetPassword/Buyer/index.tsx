import React, { useId, useState } from "react";
import CustomButton from "../../CustomButtons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Alerts } from "../../redux/alert/alertActions";
import auth from "../../../../modules/service/auth";
import { loadingStart, loadingStop } from "../../redux/apploader";
import customtoast from "../../CustomToast";
import ResetPassword from "../../../../modules/pages/Auth/ResetPassword";

const Form = () => {
  const id = useId();
  const dispatch = useAppDispatch();
  const { isloading } = useAppSelector((state) => state.isloading);
  const initialFormState = {
    email: "",
  };
  const [inputs, setInputs] = useState(initialFormState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loadingStart(""));
    auth
      .resetPassword(inputs)
      .then((res) => dispatch(Alerts("resetpassword")))
      .catch((err) => customtoast(err.message, true))
      .finally(() => dispatch(loadingStop()));
  };

  const validate = inputs.email && true;

  return (
    <ResetPassword>
      <div className="biodata_container">
        <form onSubmit={handleSubmit}>
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

            <CustomButton
              className="signup_btn"
              disabled={!validate || isloading}
              type="submit"
              action={handleSubmit}
              actionText="Reset Password"
            />
          </div>
        </form>
      </div>
    </ResetPassword>
  );
};

export default Form;
