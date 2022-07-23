import React, { useId, useState } from "react";
import CustomButton from "../../customButtons";
import { useAppDispatch } from "../../redux/hooks";
import { Alerts } from "../../redux/alert/alertActions";

const Form = () => {
  const id = useId();
  const dispatch = useAppDispatch();
  const initialFormState = {
    email: "",
  };
  const [inputs, setInputs] = useState(initialFormState as any);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputs((values: {}) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputs);
    setInputs(initialFormState);
    dispatch(Alerts("resetpassword"));
  };

  const validate = inputs.email && true;

  return (
    <div className="biodata_container">
      <form onSubmit={handleSubmit}>
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

          <CustomButton
            className="signup_btn"
            disabled={!validate}
            type="submit"
            action={handleSubmit}
            actionText="Reset Password"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
