import React, { useId, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../../common/components/CustomButtons";
import { useAppDispatch } from "../../../../common/components/redux/hooks";
import { setItem } from "../../../../https/storage";

function BankDetail() {
  const id = useId();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [bvnumber, setBvn] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [profilePayload, setprofilePayload] = useState<any>([])
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const payload = localStorage.getItem("verification");
    if (typeof payload === "string") {
      const profilePayload = JSON.parse(payload);
      setprofilePayload(profilePayload)
      if (
        !profilePayload.image ||
        !profilePayload.first_name ||
        !profilePayload.last_name ||
        !profilePayload.state ||
        !profilePayload.phone_number ||
        !profilePayload.street_number ||
        !profilePayload.street_name ||
        !profilePayload.city ||
        !profilePayload.local_gov
      ) {
        navigate("/setting/verification");
      }
    }else{
      navigate("/setting/verification");  
    }
  }, []);

  const validate = bvnumber && accountNumber && bankName && accountName;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (!validate) return;
    // const payload = localStorage.getItem("verification");

    // if (typeof payload === "string") {
    //   const profilePayload = JSON.parse(payload);

      if (
        !profilePayload.image ||
        !profilePayload.first_name ||
        !profilePayload.last_name ||
        !profilePayload.state ||
        !profilePayload.phone_number ||
        !profilePayload.street_number ||
        !profilePayload.street_name ||
        !profilePayload.city ||
        !profilePayload.local_gov
      ) return;

      const bank_name = bankName;
      const account_number = accountNumber;
      const account_name = accountName;
      profilePayload.bvn = bvnumber;
      profilePayload.bankDetails = {
        bank_name,
        account_number,
        account_name,
      };

      setItem("verification", JSON.stringify(profilePayload));
      navigate(`/setting/notification`);
    // }
  };

  return (
    <div className="profile__container bank_container">
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
            actionText="Update Bank Details"
          />
        </div>
      </form>
    </div>
  );
}

export default BankDetail;
