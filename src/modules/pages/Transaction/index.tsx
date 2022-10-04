import Table from "../../../common/components/CustomTable/Table";
import { useAppSelector } from "../../../common/components/redux/hooks";
import { sellersTransactions } from "../../../fakeData";

function Transaction() {
  const { transactions } = useAppSelector((state) => state.transactions);

  return (
    <>
      <Table data={transactions} headers={sellersTransactions.columns} />
    </>
  );
}

export default Transaction;
