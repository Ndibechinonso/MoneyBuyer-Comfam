import { useEffect, useRef, useState } from "react";
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
  const { isloading, initiator, prevInitiator } = useAppSelector(
    (state) => state.isloading
  );
  const [data, setData] = useState([]);
  const runOnce = useRef(false);
  const dispatch = useAppDispatch();

  // this calls when a new transaction is made in transaction route
  useEffect(() => {
    if (
      prevInitiator === "created_new_transaction" ||
      prevInitiator === "changed_a_transaction"
    ) {
      dispatch(loadStart("fetching_all_transactions"));
      admin
        .getAllTransaction()
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
        .finally(() => dispatch(loadStop()));
    }
  }, [prevInitiator, dispatch]);

  // this calls when component mounts
  useEffect(() => {
    if (runOnce.current) {
      return;
    }
    dispatch(loadStart("fetching_all_transactions"));
    admin
      .getAllTransaction()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => dispatch(loadStop()));
    runOnce.current = true;
  }, [dispatch]);

  return (
    <>
      {isloading &&
      initiator === "fetching_all_transactions" &&
      prevInitiator !== "changed_a_transaction" ? (
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
