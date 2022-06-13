import React from "react";
import DropDownWrapper from ".";
import CustomButton from "../customButtons";
import CustomSelector from "../customSelector";

export type Ioptions = {
  val: string;
  checked: boolean;
};

type Props = {
  options: Ioptions[];
  onSelect: (itm: Ioptions, id: number) => void;
  onResetForm: () => void;
  onSubmitForm: () => void;
  children: React.ReactNode;
};

function StatusFilter({
  options,
  onSelect,
  onResetForm,
  onSubmitForm,
  children,
}: Props) {
  return (
    <DropDownWrapper trigger={children}>
      <div className="statusFilter_container">
        <form onSubmit={(e) => e.preventDefault()} className="statusFilter">
          <div className="statusFilter__head">
            <h5>FILTER BY</h5>
            <button onClick={onResetForm}>
              <span>Close</span>
            </button>
          </div>
          <div className="statusFilter__body">
            {options.map((opt, id) => {
              const { val, checked } = opt;
              return (
                <div key={val} className="statusFilter__itm">
                  <CustomSelector
                    variant="checkBox"
                    placeholder={val}
                    isChecked={checked}
                    onClickHandler={() => onSelect(opt, id)}
                  />
                </div>
              );
            })}
            <div className="statusFilter__btn">
              <CustomButton
                type="submit"
                action={onSubmitForm}
                actionText="Apply"
              />
            </div>
          </div>
        </form>
      </div>
    </DropDownWrapper>
  );
}

export default StatusFilter;
