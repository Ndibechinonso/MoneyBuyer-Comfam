import { useEffect, useState } from "react";
import Table from "../../../common/components/customTable/Table";
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
  // sellersTransactions

  const { isloading } = useAppSelector((state) => state.isloading);
  const [data, setData] = useState([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadStart());
    admin
      .getAllTransaction()
      // .then((res) => console.log(res.data))
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => dispatch(loadStop()));
  }, []);

  return (
    <>
      {/* <NewUserCard
        completedRegistration={false}
        message={"You currently don’t have any active Transaction."}
      /> */}
      <Table data={data} headers={sellersTransactions.columns} />
    </>
  );
}

export default Transaction;
