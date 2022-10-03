import { useEffect, useRef } from "react";
import Table from "../../../common/components/CustomTable/Table";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../common/components/redux/hooks";
import { disputeTable } from "../../../fakeData";
import { fetchAllDisputes } from "../../../common/components/redux/disputes/disputesAsyncThunk";

const  Dispute = () => {
  const mountOnce = useRef(false);
  const dispatch = useAppDispatch();
  const { startDate, endDate } = useAppSelector((state) => state.tableFilter);
  const { disputes, page } = useAppSelector((state) => state.disputes);

  // useEffect(() => {
  //   if (page || startDate || endDate) {
  //     dispatch(fetchAllDisputes({ page, startDate, endDate }));
  //   }
  // }, [page, endDate]); // eslint-disable-line

  useEffect(() => {
    if (mountOnce.current === true) {
      return;
    }
    if (disputes.length === 0) {
      dispatch(fetchAllDisputes({ page, startDate, endDate }));
    }
    mountOnce.current = true;
  }, [page, endDate]); 

  return (
    <>
      <Table data={disputes} headers={disputeTable.columns} />
    </>
  );
}

export default Dispute;
