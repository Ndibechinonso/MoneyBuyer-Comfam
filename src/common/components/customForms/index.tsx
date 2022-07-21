import React, { useId } from "react";
import CustomButton from "../customButtons";
import NaijaFlag from "../../../common/components/customIcons/NaijaFlag";
import uploadImg from "../../../static/images/uploadImg.svg";
import InfoIcon from "../customIcons/Info";
import {Alerts} from '../../components/redux/alert/alertActions' 
import { useAppDispatch } from "../redux/hooks";

type CustomFormProps = {
  formType: "profile" | "verification" | "bank" | "Notification Settings" | "Give Feedback";
  intro?: String;
};
const CustomForm = ({ formType, intro }: CustomFormProps) => {
  const id = useId();

  const dispatch = useAppDispatch()
  return (
    <div>
      {/* <button onClick={() => dispatch(Alerts("cancelTransaction"))}>test</button> */}
      <form onSubmit={(e) => e.preventDefault()}>
        {formType === "profile" || formType === "verification" ? (
          <>
            <div className="profile__container_header">
              <div>
                <img
                  src={uploadImg}
                  alt="profile mugshot"
                  className="profile_picture"
                />
              </div>

              {formType === "profile" ? (
                <>
                  <h4> Referral Code </h4>
                  <div className="profile__container_header-copy">
                    <h5 className="linkText">www.referrallink</h5>
                    <h5 className="copy">Copy</h5>
                  </div>
                </>
              ) : null}
            </div>
            <div className="profile__container_form">
              <div className="form_group">
                <label htmlFor={`${id}-firstName`}> First Name </label>
                <input
                  className="profile__container_form_input"
                  id={`${id}-firstName`}
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="form_group">
                <label htmlFor={`${id}-lastName`}> Last Name </label>
                <input
                  className="profile__container_form_input"
                  id={`${id}-lastName`}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="form_group">
                <label htmlFor={`${id}-email`}> Email Address </label>
                <input
                  className="profile__container_form_input"
                  id={`${id}-email`}
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="form_group">
                <label htmlFor={`${id}-phoneNumber`}> Phone Number </label>
                <div className="profile__container_form_input flex">
                  <div className="input_telephone">
                    <NaijaFlag />
                    <span> +234 </span>
                  </div>
                  <input
                    id={`${id}-phoneNumber`}
                    type="tel"
                    placeholder="0703-436-5367"
                  />
                </div>
              </div>
              {formType === "profile" ? (
                <>
                  <div className="form_group">
                    <label htmlFor={`${id}-password`}> Password </label>
                    <input
                      className="profile__container_form_input"
                      id={`${id}-password`}
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form_group">
                    <label htmlFor={`${id}-confirm_password`}>
                      {" "}
                      Confirm Password{" "}
                    </label>
                    <input
                      className="profile__container_form_input"
                      id={`${id}-confirm_password`}
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </div>
                </>
              ) : null}

              {formType === "verification" ? (
                <>
                  <div className="form_group">
                    <label htmlFor={`${id}-password`}> Street Address</label>
                    <input
                      className="profile__container_form_input"
                      id={`${id}-street_add`}
                      type="text"
                      placeholder="Enter Address"
                    />
                  </div>
                  <div className="form_group">
                    <label htmlFor={`${id}-confirm_password`}>
                      {" "}
                      Local Government{" "}
                    </label>
                    <input
                      className="profile__container_form_input"
                      id={`${id}-lga`}
                      type="text"
                      placeholder="Select Local Government"
                    />
                  </div>
                </>
              ) : null}
            </div>
            {formType === "profile" ? (
              <CustomButton
                className="profile__cta"
                action={() => console.log("profile updated")}
                actionText="Update Profile"
              />
            ) : null}

            {formType === "verification" ? (
              <CustomButton
                className="profile__cta"
                action={() => console.log("got to bank details")}
                actionText="Next"
              />
            ) : null}
          </>
        ) : null}

        {formType === "bank" ? (
          <div className="profile__container_form">
            <div className="form_group">
              <label htmlFor={`${id}-bankName`}>Bank Name</label>
              <input
                className="profile__container_form_input"
                id={`${id}-bankName`}
                type="text"
                placeholder="eg. First Bank"
              />
            </div>
            <div className="form_group">
              <label htmlFor={`${id}-acctName`}> Account Name </label>
              <input
                className="profile__container_form_input"
                id={`${id}-acctName`}
                type="text"
                placeholder="e.g. Bryan Daniels"
              />
            </div>
            <div className="form_group">
              <label htmlFor={`${id}-acctNumber`}>Account Number</label>
              <input
                className="profile__container_form_input"
                id={`${id}-acctNumber`}
                type="number"
                placeholder="e.g. 221034521"
              />
            </div>
            <div className="form_group">
              <label htmlFor={`${id}-bvn`}>Bank Verification Number</label>
              <input
                className="profile__container_form_input"
                id={`${id}-bvn`}
                type="number"
                placeholder="e.g. 12123456789"
              />
            </div>
            <CustomButton
              className="profile__cta"
              action={() => console.log("Verify bank details")}
              actionText="Verify"
            />
          </div>
        ) : null}

        {formType === "Notification Settings" ||
        formType === "Give Feedback" ? (
          <div className="">
            <h4>{formType}</h4>
            <p>{intro}</p>

            {formType === "Give Feedback" ? (
              <>
                <div className="textarea_div">
                  <label>
                    How likely would you recommend us to a friend or colleague?
                  </label>
                  <div className="radio_container">
                    <div className="radio_div">
                      <div className="input_div">
                        <span className="first_input_gap"></span>
                        <input
                          type="radio"
                          id="none"
                          name="recommend_level"
                          value="0"
                        />
                        <span className="input_line"></span>
                      </div>
                      <label>Not at all</label>
                    </div>

                    <div className="radio_div">
                      <div className="input_div">
                        <span className="input_line"></span>
                        <input
                          type="radio"
                          id="litle"
                          name="recommend_level"
                          value="1"
                        />
                        <span className="input_line"></span>
                      </div>
                      <label>Very little</label>
                    </div>

                    <div className="radio_div">
                      <div className="input_div">
                        <span className="input_line"></span>
                        <input
                          type="radio"
                          id="moderate"
                          name="recommend_level"
                          value="2"
                        />
                        <span className="input_line"></span>
                      </div>
                      <label>Moderate</label>
                    </div>

                    <div className="radio_div">
                      <div className="input_div">
                        <span className="input_line"></span>
                        <input
                          type="radio"
                          id="likely"
                          name="recommend_level"
                          value="3"
                        />
                        <span className="input_line"></span>
                      </div>
                      <label>likely</label>
                    </div>

                    <div className="radio_div">
                      <div className="input_div">
                        <span className="input_line"></span>
                        <input
                          type="radio"
                          id="extremely_likely"
                          name="recommend_level"
                          value="4"
                        />
                        <span className="first_input_gap"></span>
                      </div>
                      <label>Extremely likely</label>
                    </div>
                  </div>
                </div>
                <div className="textarea_div">
                  <label>What do you like about our service?</label>
                  <textarea placeholder="Let us know" />
                </div>

                <div className="textarea_div">
                  <label>What can we change?</label>
                  <textarea placeholder="Let us know" />
                </div>

                <div className="textarea_div">
                  <label>What feature would you like to add?</label>
                  <textarea placeholder="Let us know" />
                </div>

                <CustomButton
                  className="profile__cta"
                  action={() => console.log("Send Feedback")}
                  actionText="Send Feedback"
                />
              </>
            ) : null}

            {formType === "Notification Settings" ? (
              <div className="notification_form">
                <p className="intro">
                  Spam is something that everyone despises. The kind that is
                  sent by email. We do need to make sure you get the vital
                  information, and you might enjoy the cool information as well.
                  Don't worry, you'll be able to go back and make changes later.
                </p>

                <div className="form_group">
                  <label className="questions">
                    How Should we notify you about your account activity?
                  </label>
                  <p>
                    <span></span>{" "}
                    <span>Not to worry, you can edit this later</span>
                  </p>
                  <div className="first_checkbox_group">
                    <div className="checkbox_div">
                      <input type="checkbox" id="sms" name="sms" value="sms" />
                      <label htmlFor="sms">SMS</label>
                    </div>
                    <div className="checkbox_div">
                      <input
                        type="checkbox"
                        id="email"
                        name="email"
                        value="email"
                      />
                      <label htmlFor="email">EMAIL</label>
                    </div>
                    <div className="checkbox_div">
                      <input
                        type="checkbox"
                        id="sms&email"
                        name="sms&email"
                        value="sms&email"
                      />
                      <label htmlFor="sms&email">SMS and Email</label>
                    </div>
                  </div>
                </div>

                <div className="form_group ">
                  <label className="questions">
                    How Should we notify you about your account activity?
                  </label>
                  <p>
                    <span>
                      <InfoIcon />
                    </span>{" "}
                    <span>Not to worry, you can edit this later</span>
                  </p>
                  <div>
                    <input
                      type="checkbox"
                      id="pushnote"
                      name="pushnote"
                      value="pushnote"
                    />
                    <label htmlFor="pushnote" className="answers">
                      Yes, please do
                    </label>
                  </div>
                </div>

                <div className="form_group">
                  <label className="questions">
                    How Should we notify you about your account activity?
                  </label>
                  <p>
                    <span>
                      <InfoIcon />
                    </span>{" "}
                    <span>Not to worry, you can edit this later</span>
                  </p>
                  <div>
                    <input
                      type="checkbox"
                      id="subscribe"
                      name="subscribe"
                      value="subscribe"
                    />
                    <label htmlFor="subscribe" className="answers">
                      Yes, please subscribe me.
                    </label>
                  </div>
                </div>

                <CustomButton
                  className="profile__cta"
                  action={() => dispatch(Alerts("progress"))}
                  actionText="Update"
                />
              </div>
            ) : null}
          </div>
        ) : null}
      </form>
    </div>
  );
};
export default CustomForm;
