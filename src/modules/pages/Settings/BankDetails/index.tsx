import React, { useId, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../common/components/redux/hooks";
import useScrollToView from "../../../../common/hooks/useScrollToView";
import CustomButton from "../../../../common/components/CustomButtons";
import { setItem } from "../../../../https/storage";
import { checkObjectValues } from "../../../../common/utils";
import Settings from "..";
import route from "../../../../common/routes/route";
import { Select, SelectItem } from "../../../../common/components/CustomSelect";
import { fetchAllBanks } from "../../../../common/components/redux/getAllBanks/getAllBanksAsyncThunk";
import { selectABank } from "../../../../common/components/redux/getAllBanks/getAllBanksSlice";

const BankDetail = () => {
  const id = useId();
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const {
    banks: allbanks,
    loading,
    bankInfo
  } = useAppSelector((state) => state.getAllBanks);

  const { verified } = useAppSelector((state) => state.user.user);
  const [bvnumber, setBvn] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [profilePayload, setprofilePayload] = useState<any>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const headerRef = useScrollToView();

  useEffect(() => {
    if (verified) {
      navigate(route.protected.setting_profile);
    }
  }, []);

  useEffect(() => {
    const payload = localStorage.getItem("verification");
    if (typeof payload === "string") {
      const profilePayload = JSON.parse(payload);
      setprofilePayload(profilePayload);
      if (!checkObjectValues(profilePayload, 9)) {
        navigate(route.protected.setting_verification);
      }
    } else {
      navigate(route.protected.setting_verification);
    }
    if (allbanks?.length === 0) {
      dispatch(fetchAllBanks());
    }
  }, []);

  const selectHandler = (e: any) => {
    const data = JSON.parse(e);
      dispatch(selectABank(data));
      setBankCode(data.code)
      setBankName(data.name)
  };

  const validate = bvnumber && accountNumber && bankName && accountName;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (!validate) return;
    if (!checkObjectValues(profilePayload, 9)) return;

    const bank_name = bankName;
    const bank_code = bankCode;
    const account_number = accountNumber;
    const account_name = accountName;
    profilePayload.bvn = bvnumber;
    profilePayload.bankDetails = {
      bank_name,
      bank_code,
      account_number,
      account_name,
    };
    setItem("verification", JSON.stringify(profilePayload));
    navigate(route.protected.setting_notification);
  };

  return (
    <Settings>
      <div className="profile__container bank_container">
        <form onSubmit={handleSubmit}>
          <div className="profile__container_form">
            <div ref={headerRef} className="form_group">
              <label htmlFor={`${id}-bankName`}>Bank Name</label>
              <Select
              placeholder="Select Bank"
              className="verification-select"
              name="banks"
              id="banks"
              disabled={loading}
              value={bankInfo.bank_name}
              onChange={(e) => selectHandler(e)}
              // disabled={!state.use_new_recipients}
              // onFocus={verifyAccountNumber}
            >
              {allbanks?.map((bank) => (
                <SelectItem key={bank.id} value={JSON.stringify(bank)}>
                  {bank.name}
                </SelectItem>
              ))}
            </Select>
              {/* <input
                className="profile__container_form_input"
                id={`${id}-bankName`}
                type="text"
                name="bank_name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                placeholder="eg. First Bank"
              /> */}
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
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
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
              disabled={loading}
              actionText="Update Bank Details"
            />
          </div>
        </form>
      </div>
    </Settings>
  );
}

export default BankDetail;
