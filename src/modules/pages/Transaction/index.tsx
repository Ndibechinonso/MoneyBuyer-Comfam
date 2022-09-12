import { useEffect, useState } from "react";
import Table from "../../../common/components/CustomTable/Table";
import {
  loadStart,
  loadStop,
} from "../../../common/components/redux/apploader";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../common/components/redux/hooks";
import { sellersTransactions } from "../../../fakeData";
import admin from "../../service/admin";

function Transaction() {
  const { isloading, initiator } = useAppSelector((state) => state.isloading);
  const [data, setData] = useState([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadStart("fetching_all_transactions"));
    admin
      .getAllTransaction()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => dispatch(loadStop()));
  }, []);

  return (
    <>
      {!isloading && (
        <Table data={data} headers={sellersTransactions.columns} />
      )}
    </>
  );
}

export default Transaction;
