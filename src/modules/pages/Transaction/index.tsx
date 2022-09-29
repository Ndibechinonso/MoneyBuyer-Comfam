import { useEffect } from "react";
import Table from "../../../common/components/CustomTable/Table";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../common/components/redux/hooks";
import { fetchAllTransactions } from "../../../common/components/redux/transaction/transactionAsyncThunk";
import { sellersTransactions } from "../../../fakeData";

function Transaction() {
  const { startDate, endDate } = useAppSelector((state) => state.tableFilter);
  const { transactions, page } = useAppSelector((state) => state.transactions);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllTransactions({ page, startDate, endDate }));
  }, [page, endDate]);  //eslint-disable-line

  return (
    <>
      <Table data={transactions} headers={sellersTransactions.columns} />
    </>
  );
}

export default Transaction;
