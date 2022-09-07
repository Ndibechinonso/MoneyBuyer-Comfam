import React, { useEffect, useId, useState } from 'react'
import { BsInputCursor } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import CustomAlert from '../../../../common/components/CustomAlert';
import CustomButton from '../../../../common/components/customButtons'
import CustomForm from '../../../../common/components/customForms'
import InfoIcon from '../../../../common/components/customIcons/Info';
import { Alerts } from '../../../../common/components/redux/alert/alertActions'
import { loadingStop } from '../../../../common/components/redux/apploader';
import { useAppDispatch } from '../../../../common/components/redux/hooks';
import { NotificationProps } from '../../../../common/components/redux/types';
import auth from '../../../service/auth';


const initialFormState: NotificationProps = {
  sms: false,
  email: true,
  email_subcription: true,
  push_notifications: true
};

function Notification() {

  const id = useId();
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const [checks, setCheckes] = useState(initialFormState)
  const [isSubmitted, setIsSubmitted] = useState(false);

  const changeHandler = (e: any) => {
      const { name, checked } = e.target;
      setCheckes((checks) => ({ ...checks, [name]: e.target.checked }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    // if (!validate) return;
    const payload = localStorage.getItem("verification")
    
    if (typeof payload === 'string') {
       const payload2 = JSON.parse(payload)
       const sms = checks.sms  
       const email = checks.email
       const email_subcription = checks.email_subcription
       const push_notifications = checks.push_notifications
       const payload3 = {...payload2, notifcation: {
        sms, email, email_subcription, push_notifications } }
console.log(payload3)
        auth
        .completeBuyerProfile(payload3)
        .then((res) => { console.log(res, "res") })
        .catch((err) => {  console.log(err.message)})
        .finally(() => dispatch(loadingStop()));
    }
  };


  return (
    <div className ='feedback__container'>

    <form onSubmit={handleSubmit}>

          <div className="">
            <h4>Notification Settings</h4>
            <p>Set Up How You Want To Be Notified.</p>
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
                      <input type="checkbox" id="sms" name="sms"  checked={checks.sms ? true : false }
 onChange={changeHandler} />
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
                    {/* <div className="checkbox_div">
                      <input
                        type="checkbox"
                        id="sms&email"
                        name="sms&email"
                        value="sms&email"
                      />
                      <label htmlFor="sms&email">SMS and Email</label>
                    </div> */}
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
                    Discounts and special offers are fantastic. If you'd rather not get these,<br />
                      please let us know.
                  </label>
                  <p>
                    <span>
                      <InfoIcon />
                    </span>
                    <span>We guarantee not to spam you, and we believe you're awesome anyway.</span>
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

                <CustomButton
                  className="profile__cta"
                  type="submit"
                  action={() => null}
                  // action={() => dispatch(Alerts("progress"))}
                  actionText="Save"
                />
              </div>
          </div>
      </form>

    </div>
  )
}

export default Notification