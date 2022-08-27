import React, { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../../common/components/customButtons";
import CustomForm from "../../../../common/components/customForms";
import { useAppDispatch } from "../../../../common/components/redux/hooks";
import { BankDetails } from "../../../../common/components/redux/types";
import { setItem } from "../../../../https/storage";

function BankDetail() {
  const id = useId();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialFormState: any = {
    bvn: "",
    bankDetails: {
      bank_name: "",
      account_number: "",
      account_name: "",
    },
  };

  const [inputs, setInputs] = useState(initialFormState);
  const [bvnumber, setBvn] = useState("")
  const [bankName, setBankName] = useState("")
  const [accountName, setAccountName] = useState("")
  const [accountNumber, setAccountNumber] = useState("")



  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate =
    bvnumber 
    &&
    accountNumber &&
    bankName &&
    accountName;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    // setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (!validate) return;
    const payload = localStorage.getItem("verification")
    console.log(payload, "payload")
    
    if (typeof payload === 'string') {
       const payload2 = JSON.parse(payload)
       const bvn = bvnumber  
       const bank_name = bankName
       const account_number = accountNumber
       const account_name = accountName
       const payload3 = {...payload2, bvn, bankDetails: {
         bank_name, account_number, account_name
       }  }

       setItem("verification", JSON.stringify(payload3));
       console.log(payload3, "payload2")

       navigate(`/setting/notification`)

    }



    // if(payload){
    //   const payload2 = JSON.parse(payload)
    //   const bvn = inputs.bvn
    //   const updatedPayload = { {}, payload2, bvn }

    // }
    // setItem("verification", JSON.stringify(inputs));
  };

  return (
    <div className="profile__container bank_container">
      {/* <CustomForm formType="bank" /> */}

      <form onSubmit={handleSubmit}>
        <div className="profile__container_form">
          <div className="form_group">
            <label htmlFor={`${id}-bankName`}>Bank Name</label>
            <input
              className="profile__container_form_input"
              id={`${id}-bankName`}
              type="text"
              name="bank_name"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              placeholder="eg. First Bank"
            />
            {isSubmitted && !bankName && (
              <small className="input_error text-red-1 text-xs">
                *Required
              </small>
            )}
          </div>
          <div className="form_group">
            <label htmlFor={`${id}-acctName`}> Account Name </label>
            <input
              className="profile__container_form_input"
              id={`${id}-acctName`}
              type="text"
              name="account_name]"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder="e.g. Bryan Daniels"
            />
            {isSubmitted && !accountName && (
              <small className="input_error text-red-1 text-xs">
                *Required
              </small>
            )}
          </div>
          <div className="form_group">
            <label htmlFor={`${id}-acctNumber`}>Account Number</label>
            <input
              className="profile__container_form_input"
              id={`${id}-acctNumber`}
              type="number"
              name="account_number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="e.g. 221034521"
            />
            {isSubmitted && !accountNumber && (
              <small className="input_error text-red-1 text-xs">
                *Required
              </small>
            )}
          </div>
          <div className="form_group">
            <label htmlFor={`${id}-bvn`}>Bank Verification Number</label>
            <input
              className="profile__container_form_input"
              id={`${id}-bvn`}
              type="number"
              name="bvn"
              value={bvnumber}
              onChange={(e) => setBvn(e.target.value)}
              placeholder="e.g. 12123456789"
            />
            {isSubmitted && !bvnumber && (
              <small className="input_error text-red-1 text-xs">
                *Required
              </small>
            )}
          </div>
          <CustomButton
            className="profile__cta"
            type="submit"
            action={() => null}
            actionText="Verify"
          />
        </div>
      </form>
    </div>
  );
}

export default BankDetail;
