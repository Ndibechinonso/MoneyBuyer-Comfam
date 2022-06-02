import React from "react";
import Deposit from "./forms/deposit";
import Withdraw from "./forms/Withdraw";

function Wallet() {
  const [switchTabs, setSwitchTabs] = React.useState(true);

  return (
    <>
      <div className="wallet__header">
        <h3 className="wallet__title">₦0.00</h3>
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
