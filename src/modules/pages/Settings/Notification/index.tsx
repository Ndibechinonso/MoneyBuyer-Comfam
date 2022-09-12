import React, { useEffect, useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../../common/components/CustomButtons";
import InfoIcon from "../../../../common/components/CustomIcons/Info";
import { Alerts } from "../../../../common/components/redux/alert/alertActions";
import {
  loadingStart,
  loadingStop,
} from "../../../../common/components/redux/apploader";
import { useAppDispatch, useAppSelector } from "../../../../common/components/redux/hooks";
import { NotificationProps } from "../../../../common/components/redux/types";
import auth from "../../../service/auth";
import { fetchUserDetails, storeUserDetails } from "../../../../https/storage";
import CustomToast from "../../../../common/components/CustomToast";

const initialFormState: NotificationProps = {
  sms: false,
  email: true,
  email_subcription: true,
  push_notifications: true,
};

function Notification() {
  const id = useId();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [profilePayload, setprofilePayload] = useState<any>([])
  const [checks, setCheckes] = useState(initialFormState);
  const {isloading} = useAppSelector((state) => state.isloading)


  useEffect(() => {
    if(!fetchUserDetails().verified){
    const payload = localStorage.getItem("verification");
    if (typeof payload === "string") {
      const profilePayload = JSON.parse(payload);
      setprofilePayload(profilePayload)
      if (( !profilePayload.image ||
        !profilePayload.first_name ||
        !profilePayload.last_name ||
        !profilePayload.state ||
        !profilePayload.phone_number ||
        !profilePayload.street_number ||
        !profilePayload.street_name ||
        !profilePayload.city ||
        !profilePayload.local_gov ||
        !profilePayload.bankDetails?.bank_name ||
        !profilePayload.bankDetails?.account_number ||
        !profilePayload.bankDetails?.account_name)
      ) {
        navigate("/setting/verification");
      }
    }else{
      navigate("/setting/verification");
    }
  }

  }, []);

  const changeHandler = (e: any) => {
    const { name, checked } = e.target;
    setCheckes((checks) => ({ ...checks, [name]: e.target.checked }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (fetchUserDetails().verified) {
      CustomToast("verified");
    } else {
      // const payload = localStorage.getItem("verification");
      // if (typeof payload === "string") {
      //   const completePayload = JSON.parse(payload);

        if (
          !profilePayload.image ||
          !profilePayload.first_name ||
          !profilePayload.last_name ||
          !profilePayload.state ||
          !profilePayload.phone_number ||
          !profilePayload.street_number ||
          !profilePayload.street_name ||
          !profilePayload.city ||
          !profilePayload.local_gov ||
          !profilePayload.bankDetails?.bank_name ||
          !profilePayload.bankDetails?.account_number ||
          !profilePayload.bankDetails?.account_name
        ) return;

        const sms = checks.sms;
        const email = checks.email;
        const email_subcription = checks.email_subcription;
        const push_notifications = checks.push_notifications;

        profilePayload.notifcation = {
          sms,
          email,
          email_subcription,
          push_notifications,
        };
        dispatch(loadingStart(""))
        console.log(profilePayload);
        auth
          .completeBuyerProfile(profilePayload)
          .then((res) => {
            dispatch(Alerts("profileupdated"))
            storeUserDetails(res?.data)
            console.log(res, "res")
          })
          .catch((err) => {
            CustomToast(err.message);
          })
          .finally(() => dispatch(loadingStop()));
      }
    // }
  };

  return (
    <div className="feedback__container">
      <form onSubmit={handleSubmit}>
        <div className="">
          <h4>Notification Settings</h4>
          <p>Set Up How You Want To Be Notified.</p>
          <div className="notification_form">
            <p className="intro">
              Spam is something that everyone despises. The kind that is sent by
              email. We do need to make sure you get the vital information, and
              you might enjoy the cool information as well. Don't worry, you'll
              be able to go back and make changes later.
            </p>

            <div className="form_group">
              <label className="questions">
                How Should we notify you about your account activity?
              </label>
              <p>
                <span></span> <span>Not to worry, you can edit this later</span>
              </p>
              <div className="first_checkbox_group">
                <div className="checkbox_div">
                  <input
                    type="checkbox"
                    id="sms"
                    name="sms"
                    checked={checks.sms ? true : false}
                    onChange={changeHandler}
                  />
                  <label htmlFor="sms">SMS</label>
                </div>
                <div className="checkbox_div">
                  <input
                    type="checkbox"
                    id="email"
                    name="email"
                    checked={checks.email ? true : false}
                    onChange={changeHandler}
                  />
                  <label htmlFor="email">EMAIL</label>
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
                  id="push_notifications"
                  name="push_notifications"
                  // value="pushnote"
                  checked={checks.push_notifications ? true : false}
                  onChange={changeHandler}
                />
                <label htmlFor="pushnote" className="answers">
                  Yes, please do
                </label>
              </div>
            </div>

            <div className="form_group">
              <label className="questions">
                Discounts and special offers are fantastic. If you'd rather not
                get these,
                <br />
                please let us know.
              </label>
              <p>
                <span>
                  <InfoIcon />
                </span>
                <span>
                  We guarantee not to spam you, and we believe you're awesome
                  anyway.
                </span>
              </p>
              <div>
                <input
                  type="checkbox"
                  id="email_subcription"
                  name="email_subcription"
                  // value="subscribe"
                  checked={checks.email_subcription ? true : false}
                  onChange={changeHandler}
                />
                <label htmlFor="subscribe" className="answers">
                  Yes, please subscribe me.
                </label>
              </div>
            </div>

            {!fetchUserDetails().verified  ? <CustomButton
              className="profile__cta"
              type="submit"
              disabled={isloading}
              action={() => null}
              // action={() => dispatch(Alerts("progress"))}
              actionText="Update Profile"
            /> : <CustomButton
            className="profile__cta"
            type="submit"
            disabled={isloading}
            action={() => null}
            // action={() => dispatch(Alerts("progress"))}
            actionText="Update"
          /> }
          </div>
        </div>
      </form>
    </div>
  );
}

export default Notification;
