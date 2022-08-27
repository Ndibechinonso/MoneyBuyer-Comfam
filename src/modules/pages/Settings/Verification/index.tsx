import React, { useEffect, useId, useState } from 'react'
import CustomButton from '../../../../common/components/customButtons'
import NaijaFlag from '../../../../common/components/customIcons/NaijaFlag'
import uploadImg from "../../../../static/images/uploadImg.svg";
import { Select } from 'react-select-states-and-lga-in-nigeria'
import 'react-select-states-and-lga-in-nigeria/dist/index.css'
import { VerificationProps } from '../../../../common/components/redux/types';
import { setItem } from '../../../../https/storage';
import { useNavigate } from 'react-router-dom';

const initialFormState: VerificationProps = {
  first_name: "",
  last_name: "",
  state: "",
  phone_number: "",
  street_name: "",
  city: "",
  local_gov: "",
};

function Verification() {
  const id = useId();
  const navigate = useNavigate();

  const [selectState, setSelectState] = useState('')
const [lga, setLga] = useState('')

  const [inputs, setInputs] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleStateChange = (e: any) => {
    setSelectState(e.target.value)
    console.log(e.target.value, "state")
  }
  
  const handleLgaChange = (e: any) => {
    setLga(e.target.value)
    console.log(e.target.value, "lga")
  }

  const validate =
  inputs.first_name &&
  inputs.last_name &&
  inputs.state &&
  inputs.phone_number &&
  inputs.street_name &&
  inputs.city &&
  inputs.local_gov

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const state = selectState
    const local_gov = lga
    const updatedPayload = {...inputs, state, local_gov}
    setInputs(updatedPayload)
    setIsSubmitted(true)
    if(!validate) return
    setItem("verification", JSON.stringify(inputs))
    navigate(`/setting/bank_detail`)
  };
  return (
    <div className ='profile__container'>
    <form onSubmit={handleSubmit}>

            <div className="profile__container_header">
              <div>
                <img
                  src={uploadImg}
                  alt="profile mugshot"
                  className="profile_picture"
                />
              </div>
            </div>

            <div className="profile__container_form">
              <div className="form_group">
                <label htmlFor={`${id}-firstName`}> First Name </label>
                <input
                  className="profile__container_form_input"
                  id={`${id}-firstName`}
                  type="text"
                  name="first_name"
                  value={inputs.first_name}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                {isSubmitted && !inputs.first_name && <small className="input_error text-red-1 text-xs">*Required</small> }
              </div>

              <div className="form_group">
                <label htmlFor={`${id}-lastName`}> Last Name </label>
                <input
                  className="profile__container_form_input"
                  id={`${id}-lastName`}
                  type="text"
                  name="last_name"
                  value={inputs.last_name}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
             {isSubmitted && !inputs.last_name && <small className="input_error text-red-1 text-xs">*Required</small> }
              </div>

              <div className="form_group">
                <label htmlFor={`${id}-email`}> Email Address </label>
                <input
                  className="profile__container_form_input"
                  id={`${id}-email`}
                  name="email"
                  // value={inputs.last_name}
                  type="email"
                  placeholder="Email Address"
                />
             {isSubmitted && !inputs.first_name && <small className="input_error text-red-1 text-xs">*Required</small> }
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
                    name="phone_number"
                    value={inputs.phone_number}
                    onChange={handleChange}
                    placeholder="0703-436-5367"
                  />
                </div>
                {isSubmitted && !inputs.phone_number && <small className="input_error text-red-1 text-xs">*Required</small> }
              </div>

                  <div className="form_group">
                    <label htmlFor={`${id}-password`}> Street Address</label>
                    <input
                      className="profile__container_form_input"
                      id={`${id}-street_add`}
                      type="text"
                      name='street_name'
                      value={inputs.street_name}
                      onChange={handleChange}
                      placeholder="Enter Address"
                    />
{isSubmitted && !inputs.street_name && <small className="input_error text-red-1 text-xs">*Required</small> }
                  </div>

                  <div className="form_group">
                    <label htmlFor={`${id}-password`}> City</label>
                    <input
                      className="profile__container_form_input"
                      id={`${id}-city`}
                      type="text"
                      name='city'
                      value={inputs.city}
                      onChange={handleChange}
                      placeholder="City"
                    />
{isSubmitted && !inputs.city && <small className="input_error text-red-1 text-xs">*Required</small> }
                  </div>

                  <div className="form_group">
                  <Select
    state={selectState}
    lga={lga}
    changeState={handleStateChange}
    changeLga={handleLgaChange}
  />
       {isSubmitted && (!selectState || !lga) && <small className="input_error text-red-1 text-xs">*Required</small> }
</div>
            </div>
              <CustomButton
                className="profile__cta"
                type="submit"
                action={() => null}
                actionText="Next"
              />    
      </form>
    </div>
  )
}

export default Verification

