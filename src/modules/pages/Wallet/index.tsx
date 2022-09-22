import React, { useEffect, useRef, useState } from "react";
import customToast from "../../../common/components/CustomToast";
import {
  loadStart,
  loadStop,
} from "../../../common/components/redux/apploader";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../common/components/redux/hooks";
import { toNaira } from "../../../common/utils/helpers";
import admin from "../../service/admin";
import Deposit from "./forms/Deposit";
import Withdraw from "./forms/Withdraw";

function Wallet() {
  const [switchTabs, setSwitchTabs] = useState(false);
  const [wallet, setWallet] = useState<any>({});
  const callOnce = useRef(false);
  const dispatch = useAppDispatch();
  const { prevInitiator } = useAppSelector((state) => state.isloading);

  //  fetch balance after every transaction that affects the wallet balance
  useEffect(() => {
    if (prevInitiator === "wallet_transaction") {
      dispatch(loadStart(""));
      admin
        .getWalletBalance()
        .then((res) => setWallet(res.data))
        .catch((err) => customToast(err.message, true))
        .finally(() => dispatch(loadStop()));
    }
  }, [prevInitiator]);

  // fetch balance on component mount
  useEffect(() => {
    if (callOnce.current === true) {
      return;
    }
    dispatch(loadStart(""));
    admin
      .getWalletBalance()
      .then((res) => setWallet(res.data))
      .catch((err) => customToast(err.message, true))
      .finally(() => dispatch(loadStop()));

    callOnce.current = true;
  }, []);

  return (
    <>
      <div className="wallet__header">
        <h3 className="wallet__title">
          {wallet.balance ? toNaira(wallet.balance) : "₦ 0.00"}
        </h3>
        <p className="wallet__subtitle">Wallet Balance</p>
      </div>
      <div className="tabSwitch">
        <button
          className={`${switchTabs ? "" : "activeTab"}`}
          onClick={() => setSwitchTabs(false)}
        >
          Deposit
        </button>
        <button
          className={`${switchTabs ? "activeTab" : ""}`}
          onClick={() => setSwitchTabs(true)}
        >
          Withdraw
        </button>
      </div>
      <div className="wallet__container">
        {switchTabs ? <Withdraw /> : <Deposit />}
      </div>
    </>
  );
}

export default Wallet;
