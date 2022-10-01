import { useEffect, useRef } from "react";
import Table from "../../../common/components/CustomTable/Table";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../common/components/redux/hooks";
import { fetchAllTransactions } from "../../../common/components/redux/transaction/transactionAsyncThunk";
import { sellersTransactions } from "../../../fakeData";

function Transaction() {
  const mountOnce = useRef(false);
  const { startDate, endDate } = useAppSelector((state) => state.tableFilter);
  const { transactions, page } = useAppSelector((state) => state.transactions);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (page || startDate || endDate) {
      dispatch(fetchAllTransactions({ page, startDate, endDate }));
    }
  }, [page, endDate]); //eslint-disable-line

  useEffect(() => {
    if (mountOnce.current === true) {
      return;
    }
    if (transactions.length === 0) {
      dispatch(fetchAllTransactions({ page, startDate, endDate }));
    }
    mountOnce.current = true;
  }, []); //eslint-disable-line

  return (
    <>
      <Table data={transactions} headers={sellersTransactions.columns} />
    </>
  );
}

export default Transaction;
