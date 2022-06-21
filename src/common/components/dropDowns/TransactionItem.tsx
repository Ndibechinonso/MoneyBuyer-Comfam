import ThrashIcon from "../customIcons/DeleteIcon";
import EyeIcon from "../customIcons/EyeIcon";
import DropDownItem from "./primitive/DropDownItem";
import DropDownMenuContent from "./primitive/DropDownMenuContent";

type Props = {
  data: Object
};

function TransactionItem({data}: Props) {
  return (
    <DropDownMenuContent className="tableDropDown">
      <DropDownItem>
        <button onClick={() => console.log(data, "view")} >
          <EyeIcon />
          <span>View Transaction</span>
        </button>
      </DropDownItem>
      <DropDownItem>
        <button onClick={() => console.log(data, "delete")} >
          <ThrashIcon />
          <span>Delete Transaction</span>
        </button>
      </DropDownItem>
    </DropDownMenuContent>
  );
}

export default TransactionItem;
