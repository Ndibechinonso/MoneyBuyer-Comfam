import React from "react";
import DropDownWrapper from ".";
import ThrashIcon from "../customIcons/DeleteIcon";
import EyeIcon from "../customIcons/EyeIcon";

type Props = {
  children: React.ReactNode;
};

function TransactionDD({ children }: Props) {
  return (
    <DropDownWrapper trigger={children}>
      <div className="tableDropDown">
        <button>
          <EyeIcon />
          <span>View Transaction</span>
        </button>
        <button>
          <ThrashIcon />
          <span>Delete Transaction</span>
        </button>
      </div>
    </DropDownWrapper>
  );
}

export default TransactionDD;
