/* eslint-disable  react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import CustomLoader from "../../../common/components/CustomLoader";
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

  // this calls when a new transaction is made in transaction route
  useEffect(() => {
    if (initiator === "created_new_transaction") {
      dispatch(loadStart("fetching_all_transactions"));
      admin
        .getAllTransaction()
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
        .finally(() => dispatch(loadStop()));
    }
  }, [initiator]);

  // this calls when component mounts
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
      {isloading && initiator === "fetching_all_transactions" ? (
        <div>
          <CustomLoader size={5} />
        </div>
      ) : (
        <Table data={data} headers={sellersTransactions.columns} />
      )}
    </>
  );
}

export default Transaction;
