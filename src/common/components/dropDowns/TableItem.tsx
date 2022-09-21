import ThrashIcon from "../CustomIcons/DeleteIcon";
import EyeIcon from "../CustomIcons/EyeIcon";
import DropDownItem from "./primitive/DropDownItem";
import DropDownMenuContent from "./primitive/DropDownMenuContent";
import { useAppDispatch } from "../redux/hooks";
import { addItem } from "../redux/tableItem";
import { Alerts } from "../redux/alert/alertActions";
import { useLocation } from "react-router-dom";

type Props = {
  data: any;
};

function TableItem({ data }: Props) {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const viewingItem = () => {
    dispatch(addItem({ ...data }));
    if (pathname.includes("transaction")) {
      dispatch(Alerts("transactionitem", data.status));
    }
    if (pathname.includes("dispute")) {
      dispatch(Alerts("disputeitem", data.status));
    }
  };


  return (
    <DropDownMenuContent className="tableDropDown">
      <DropDownItem>
        <button onClick={viewingItem}>
          <EyeIcon />
          <span>View Transaction</span>
        </button>
      </DropDownItem>
      {pathname.includes("transaction") ? (
        <DropDownItem>
          <button
            onClick={() => dispatch(Alerts("deletetransaction", data.id))}
          >
            <ThrashIcon />
            <span>Delete Transaction</span>
          </button>
        </DropDownItem>
      ) : null}
    </DropDownMenuContent>
  );
}

export default TableItem;
