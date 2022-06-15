import React, { useId } from 'react'
import CustomButton from '../../../../common/components/customButtons'
import CustomForm from '../../../../common/components/customForms';
import NaijaFlag from '../../../../common/components/customIcons/NaijaFlag'
// import userImg from "../../../../static/images/userImage.jpeg";

type Props = {}

function Profile({ }: Props) {
  const id = useId()
  return (
    <div className ='profile__container'>
      <CustomForm formType="profile"/>
      {/* <div>
        <div className='profile__container_header'>
          <div>
            <img src ={userImg} alt='profile picture'  className='profile_picture'/>
          </div>
          <h4> Referral Code </h4>
          <div className='profile__container_header-copy'> 
            <h5 className='linkText'>www.referrallink</h5>
            <h5 className='copy'>Copy</h5>
          </div>
        </div>
        <div className='profile__container_form'>
          <form>
            <label htmlFor={`${id}-firstName`}> First Name </label>
            <input className='profile__container_form_input' id={`${id}-firstName`} type='text' placeholder='First Name'/>
          </form>
          <form>
            <label htmlFor={`${id}-lastName`}> Last Name </label>
            <input className='profile__container_form_input' id={`${id}-lastName`} type='text' placeholder='Last Name'/>
          </form>
          <form>
            <label htmlFor={`${id}-email`}> Email Address </label>
            <input className='profile__container_form_input' id={`${id}-email`} type='email' placeholder='Email Address'/>
          </form>
          <form>
            <label htmlFor={`${id}-phoneNumber`}> Phone Number </label>
            <div className='profile__container_form_input flex'>
              <div className='input_telephone'>
                <NaijaFlag />
                <span> +234 </span>
              </div>
              <input id={`${id}-phoneNumber`} type='tel' placeholder='0703-436-5367'/>
            </div>
          </form>
          <form>
            <label htmlFor={`${id}-password`}> Password </label>
            <input className='profile__container_form_input' id={`${id}-password`} type='password' placeholder='Password'/>
          </form>
          <form>
            <label htmlFor={`${id}-confirm_password`}> Confirm Password </label>
            <input className='profile__container_form_input' id={`${id}-confirm_password`} type='password' placeholder='Confirm Password'/>
          </form>
        </div>
        <CustomButton className="profile__cta"  action={() => console.log("profile updated")} actionText="Update Profile" />
      </div> */}
    </div>
  )
}

export default Profile