import { useEffect, useRef } from "react";
import Table from "../../../common/components/CustomTable/Table";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../common/components/redux/hooks";
import { fetchAllTransactions } from "../../../common/components/redux/transaction/transactionAsyncThunk";
import { sellersTransactions } from "../../../fakeData";

function Transaction() {
  const {
    transactions,
    pagination: { currentPage },
  } = useAppSelector((state) => state.transactions);
  const { type, startDate, search, endDate, filter } = useAppSelector(
    (state) => state.tableFilter
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (type === "Transaction") {
      dispatch(
        fetchAllTransactions({ page: 1, endDate, search, startDate, filter })
      );
    }
  }, [search, startDate, filter]);


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
