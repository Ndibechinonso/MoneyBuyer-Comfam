import CustomButton from "../CustomButtons";
import CustomSelector from "../CustomSelector";
import DropDownItem from "./primitive/DropDownItem";
import DropDownMenuContent from "./primitive/DropDownMenuContent";

export type Ioptions = {
  val: string;
  checked: boolean;
};

type Props = {
  options: Ioptions[];
  onSelect: (itm: Ioptions, id: number) => void;
  onResetForm: () => void;
  onSubmitForm: () => void;
};

function StatusFilter({ options, onSelect, onResetForm, onSubmitForm }: Props) {
  return (
    <DropDownMenuContent className="statusFilter_container">
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
                  placeholder={val}
                  isChecked={checked}
                  onClickHandler={() => onSelect(opt, id)}
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
          />
        </DropDownItem>
      </form>
    </DropDownMenuContent>
  );
}

export default StatusFilter;
