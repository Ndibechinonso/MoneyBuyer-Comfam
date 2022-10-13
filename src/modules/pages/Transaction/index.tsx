import { useEffect, useRef } from "react";
import Table from "../../../common/components/CustomTable/Table";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../common/components/redux/hooks";
import { fetchAllTransactions } from "../../../common/components/redux/transaction/transactionAsyncThunk";
import { sellersTransactions } from "../../../tableHeaders";

function Transaction() {
  const {
    transactions,
    pagination: { currentPage },
  } = useAppSelector((state) => state.transactions);
  const dispatch = useAppDispatch();

  const fetchUnmount = useRef(true);
  useEffect(() => {
    if (fetchUnmount.current) {
      fetchUnmount.current = false;
      return;
    }
    return () => {
      if (currentPage !== 1) {
        dispatch(fetchAllTransactions({ page: 1 }));
      }
    };
  }, []); // eslint-disable-line

  return (
    <>
      <Table data={transactions} headers={sellersTransactions.columns} />
    </>
  );
}

export default Transaction;
