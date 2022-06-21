import ThrashIcon from "../customIcons/DeleteIcon";
import EyeIcon from "../customIcons/EyeIcon";
import DropDownItem from "./primitive/DropDownItem";
import DropDownMenuContent from "./primitive/DropDownMenuContent";
import { useAppDispatch } from "../redux/hooks";
import { addItem } from "../redux/tableItem";
import { Alerts } from "../redux/alert/alertActions";

type Props = {
  data: any;
};

function TransactionItem({ data }: Props) {
  const dispatch = useAppDispatch();

  const viewingItem = () => {
    dispatch(addItem({ ...data }));
    dispatch(Alerts("transactionitem",data?.status));
  };

  return (
    <DropDownMenuContent className="tableDropDown">
      <DropDownItem>
        <button onClick={viewingItem}>
          <EyeIcon />
          <span>View Transaction</span>
        </button>
      </DropDownItem>
      <DropDownItem>
        <button onClick={() => console.log(data, "delete")}>
          <ThrashIcon />
          <span>Delete Transaction</span>
        </button>
      </DropDownItem>
    </DropDownMenuContent>
  );
}

export default TransactionItem;
