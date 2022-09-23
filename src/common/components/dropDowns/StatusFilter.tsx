import React from "react";
import CustomButton from "../CustomButtons";
import CaretRight from "../CustomIcons/CaretRight";
import SortIcon from "../CustomIcons/SortIcon";
import CustomSelector from "../CustomSelector";
import { Ioptions } from "../CustomTable/types";
import DropDownItem from "./primitive/DropDownItem";
import DropDownMenuContent, {
  DropdownMenu,
  DropdownMenuTrigger,
} from "./primitive/DropDownMenuContent";

type Props = {
  options: Ioptions[];
  onSelect: (itm: Ioptions, id: number) => void;
  onResetForm: () => void;
  onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
  onClickOutside: (e: any) => void;
  disabled?: boolean
};

function StatusFilter(props: Props) {
  const { options, onSelect, onResetForm } = props;
  const { onSubmitForm, onClickOutside, disabled} = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="dropdownTrigger">
        <div className="table__control__sort">
          <SortIcon />
          <h3 className="table__control__sort-text">
            Filter by:
            <span> Recent </span>
          </h3>
          <CaretRight className="table__control__sort-drop" />
        </div>
      </DropdownMenuTrigger>

      <DropDownMenuContent
        onPointerDownOutside={onClickOutside}
        className="statusFilter_container"
      >
        <form onSubmit={(e) => e.preventDefault()} className="statusFilter">
          <div className="statusFilter__head">
            <h5>FILTER BY</h5>
            <DropDownItem onClick={onResetForm}>
              <span>Close</span>
            </DropDownItem>
          </div>
          <div className="statusFilter__body">
            {options.map((opt, id) => {
              const { val, checked } = opt;
              return (
                <div key={val} className="statusFilter__itm">
                  <CustomSelector
                    variant="checkBox"
                    name={val}
                    placeholder={val}
                    isChecked={checked}
                    onClickHandler={() => onSelect(opt, id)}
                    disabled={disabled}
                  />
                </div>
              );
            })}
          </div>
          <DropDownItem className="statusFilter__btn">
            <CustomButton
              type="submit"
              action={onSubmitForm}
              actionText="Apply"
              disabled={disabled}
            />
          </DropDownItem>
        </form>
      </DropDownMenuContent>
    </DropdownMenu>
  );
}

export default StatusFilter;
