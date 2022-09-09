import React, { useState } from "react";
import CustomButton from "../../../../common/components/customButtons";
import { useAppDispatch, useAppSelector } from "../../../../common/components/redux/hooks";
import { FeedbackProps } from "../../../../common/components/redux/types";
import { Alerts } from "../../../../common/components/redux/alert/alertActions";
import admin from "../../../service/admin";
import customtoast from "../../../../common/components/customToast";
import { loadingStart, loadingStop } from "../../../../common/components/redux/apploader";

const initialFormState: FeedbackProps = {
  likes: "",
  rating: "",
  feature_request: "",
  change_request: "",
};

const ratingsOptions = [
  { name: "none", value: "Not at all" },
  { name: "little", value: "Very little" },
  { name: "moderate", value: "Moderate" },
  { name: "likely", value: "Likely" },
  { name: "extremely_likely", value: "Extremely likely" },
];

function FeedBack() {
  const dispatch = useAppDispatch();
const {isloading} = useAppSelector((state) => state.isloading)
  const [inputs, setInputs] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const changeHandler = (e: any) => {
    // const name = e.target.name;
    console.log(e.target.type);
    if (e.target.type === "radio") {
      setInputs((inputs) => ({ ...inputs, rating: e.target.value }));
    } else {
      const name = e.target.name;
      const value = e.target.value;
      setInputs((inputs) => ({ ...inputs, [name]: value }));
    }
  };

  const validate =
  inputs.rating &&
  inputs.likes

  const onSubmit = (e: any) =>{
    e.preventDefault()
    dispatch(loadingStart(""))
    setIsSubmitted(true)
    if(!validate) return
    setIsSubmitted(false)
    admin
    .sendFeedback(inputs)
    .then((res) => {dispatch(Alerts("feedbackSent")) })
    .catch((err) => {  customtoast(err.message)})
    .finally(() => dispatch(loadingStop()));
    
    console.log(inputs)
  }

  return (
    <div className="feedback__container">
      <form onSubmit={onSubmit}>
        <div className="">
          <h4>Give Feedback</h4>
          <p>
            Our product depends on customer feedback to improve the overall
            experience!
          </p>
          <div className="textarea_div">
            <label>
              How likely would you recommend us to a friend or colleague?
            </label>
            <div className="form_group radio_container">
              {ratingsOptions.map((option) => {
                return (
                  <div className="radio_div" key={option.value}>
                    <div className="input_div">
                      <span
                        className={
                          option.name === "none"
                            ? "first_input_gap"
                            : "input_line"
                        }
                      ></span>
                      <input
                        type="radio"
                        className="cursor-pointer"
                        id="none"
                        name="recommend_level"
                        disabled={isloading}
                        value={option.value}
                        onChange={changeHandler}
                      />
                      <span
                        className={
                          option.name === "extremely_likely"
                            ? "first_input_gap"
                            : "input_line"
                        }
                      ></span>
                    </div>
                    <label>{option.value}</label>
                  </div>
                );
              })}
            </div>
            {isSubmitted && !inputs.rating && (
              <small className="input_error text-red-1 text-xs">
                *Required
              </small>
            )}
          </div>
          <div className="form_group textarea_div">
            <label>What do you like about our service?</label>
            <textarea placeholder="Let us know" name="likes" id="likes" value={inputs.likes} onChange={changeHandler} disabled={isloading} />
        
            {isSubmitted && !inputs.likes && (
              <small className="input_error text-red-1 text-xs">
                *Required
              </small>
            )}
          </div>

          <div className="textarea_div">
            <label>What can we change?</label>
            <textarea placeholder="Let us know" name="change_request" id="change_request" value={inputs.change_request} onChange={changeHandler} disabled={isloading} />
          </div>

          <div className="textarea_div">
            <label>What feature would you like to add?</label>
            <textarea placeholder="Let us know" name="feature_request" id="feature_request" value={inputs.feature_request} onChange={changeHandler} disabled={isloading} />
          </div>

          <CustomButton
            className="profile__cta"
            disabled={isloading}
            action={() => console.log("Send Feedback")}
            actionText="Send Feedback"
          />
        </div>
      </form>
    </div>
  );
}

export default FeedBack;
