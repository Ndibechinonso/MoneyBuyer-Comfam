import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../../common/components/CustomButtons";
import InfoIcon from "../../../../common/components/CustomIcons/Info";
import { loadingStart } from "../../../../common/components/redux/apploader";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../common/components/redux/hooks";
import { NotificationProps } from "../../../../common/components/redux/types";
import { checkObjectValues } from "../../../../common/utils";
import {
  completeProfile,
  updateNotification,
} from "../../../../common/components/redux/completeUserProfile/completeProfileThunk";
import Settings from "..";
import route from "../../../../common/routes/route";
import useScrollToView from "../../../../common/hooks/useScrollToView";

const initialFormState: NotificationProps = {
  sms: true,
  email: true,
  email_subcription: true,
  push_notifications: true,
};

const Notification = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [profilePayload, setprofilePayload] = useState<any>([]);
  const [checks, setChecks] = useState(initialFormState);
  const { isloading } = useAppSelector((state) => state.isloading);
  const { verified, notification } = useAppSelector((state) => state.user.user);
  const headerRef = useScrollToView();

  useEffect(() => {
    if (!verified) {
      const payload = localStorage.getItem("verification");
      if (typeof payload === "string") {
        const profilePayload = JSON.parse(payload);
        setprofilePayload(profilePayload);
        if (!checkObjectValues(profilePayload, 13)) {
          navigate(route.protected.setting_verification);
        }
      } else {
        navigate(route.protected.setting_verification);
      }
    } else {
      setChecks(notification);
    }
  }, []);

  const changeHandler = (e: any) => {
    const { name, checked } = e.target;
    setChecks((checks) => ({ ...checks, [name]: checked }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loadingStart("verifying_user"));
    const sms = checks.sms;
    const email = checks.email;
    const email_subcription = checks.email_subcription;
    const push_notifications = checks.push_notifications;

    if (verified) {
      dispatch(
        updateNotification({
          sms,
          email,
          email_subcription,
          push_notifications,
        })
      );
    } else {
      if (!checkObjectValues(profilePayload, 13)) return;
      profilePayload.notification = {
        sms,
        email,
        email_subcription,
        push_notifications,
      };
      dispatch(completeProfile(profilePayload));
    }
  };

  return (
    <Settings>
      <div className="feedback__container">
        <form onSubmit={handleSubmit}>
          <div className="">
            <h4 ref={headerRef}>Notification Settings</h4>
            <p>Set Up How You Want To Be Notified.</p>
            <div className="notification_form">
              <p className="intro">
                Spam is something that everyone despises. The kind that is sent
                by email. We do need to make sure you get the vital information,
                and you might enjoy the cool information as well. Don't worry,
                you'll be able to go back and make changes later.
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
                  </span>
                  <span>Not to worry, you can edit this later</span>
                </p>
                <div>
                  <input
                    type="checkbox"
                    id="push_notifications"
                    name="push_notifications"
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
                  Discounts and special offers are fantastic. If you'd rather
                  not get these,
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
                    checked={checks.email_subcription ? true : false}
                    onChange={changeHandler}
                  />
                  <label htmlFor="subscribe" className="answers">
                    Yes, please subscribe me.
                  </label>
                </div>
              </div>

              {!verified ? (
                <CustomButton
                  className="profile__cta"
                  type="submit"
                  disabled={isloading}
                  action={() => null}
                  actionText="Update Profile"
                />
              ) : (
                <CustomButton
                  className="profile__cta"
                  type="submit"
                  disabled={isloading}
                  action={() => null}
                  actionText="Update"
                />
              )}
            </div>
          </div>
        </form>
      </div>
    </Settings>
  );
};

export default Notification;
