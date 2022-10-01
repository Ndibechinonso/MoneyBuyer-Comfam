import React, { useEffect, useRef, useState } from "react";
import { fetchWalletInfo } from "../../../common/components/redux/fundsAndWallet/fundsAndWalletAsyncThunk";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../common/components/redux/hooks";
import useScrollToView from "../../../common/hooks/useScrollToView";
import { toNaira } from "../../../common/utils/helpers";
import Deposit from "./forms/Deposit";
import Withdraw from "./forms/Withdraw";

function Wallet() {
  const [switchTabs, setSwitchTabs] = useState(false);
  const callOnce = useRef(false);
  const dispatch = useAppDispatch();
  const balance = useAppSelector((state) => state.wallet.wallet.balance);
  const headerRef = useScrollToView();

  // fetch balance on component mount
  useEffect(() => {
    if (callOnce.current === true) {
      return;
    }

    if (!balance) {
      dispatch(fetchWalletInfo());
    }

    callOnce.current = true;
  }, []); // eslint-disable-line

  return (
    <>
      <div ref={headerRef} className="wallet__header">
        <h3 className="wallet__title">
          {balance ? toNaira(balance.toString()) : "₦ 0.00"}
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
