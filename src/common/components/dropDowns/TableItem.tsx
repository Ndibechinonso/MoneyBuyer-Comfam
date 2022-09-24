import ThrashIcon from "../CustomIcons/DeleteIcon";
import EyeIcon from "../CustomIcons/EyeIcon";
import DropDownItem from "./primitive/DropDownItem";
import DropDownMenuContent from "./primitive/DropDownMenuContent";
import { useAppDispatch } from "../redux/hooks";
import { addItem } from "../redux/tableItem";
import { Alerts } from "../redux/alert/alertActions";
import { useLocation } from "react-router-dom";
import { updateSingleDispute } from "../redux/disputes/disputesSlice";
import { useEffect, useState } from "react";

type Props = {
  data: any;
};

function TableItem({ data }: Props) {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const [table, setTable] = useState("Transaction")

  useEffect(() =>{
    if(pathname.includes("dispute")){
      setTable("Dispute")
    }
  }, [pathname])


  const viewingItem = () => {
    console.log(data, "data");

    dispatch(addItem({ ...data }));
    if (pathname.includes("transaction")) {
      dispatch(Alerts("transactionitem", data.status));
    }
    if (pathname.includes("dispute")) {
      dispatch(Alerts("disputeitem", data.status));
      dispatch(updateSingleDispute(data))
    }
  };


  return (
    <DropDownMenuContent className="tableDropDown">
      <DropDownItem>
        <button onClick={viewingItem}>
          <EyeIcon />
          <span>View {table}</span>
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
