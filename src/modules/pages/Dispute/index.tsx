import { useEffect, useRef } from "react";
import Table from "../../../common/components/CustomTable/Table";
import { fetchAllDisputes } from "../../../common/components/redux/disputes/disputesAsyncThunk";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../common/components/redux/hooks";
import { disputeTable } from "../../../tableHeaders";

const Dispute = () => {
  const {
    disputes,
    pagination: { currentPage },
  } = useAppSelector((state) => state.disputes);
  const dispatch = useAppDispatch();

  const fetchUnmount = useRef(true);
  useEffect(() => {
    if (fetchUnmount.current) {
      fetchUnmount.current = false;
      return;
    }
    return () => {
      if (currentPage !== 1) {
        dispatch(fetchAllDisputes({ page: 1 }));
      }
    };
  }, []); // eslint-disable-line

  return (
    <>
      <Table data={disputes} headers={disputeTable.columns} />
    </>
  );
};

export default Dispute;
