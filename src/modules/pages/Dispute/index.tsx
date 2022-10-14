import { useEffect, useRef } from "react";
import Table from "../../../common/components/CustomTable/Table";
import { fetchAllDisputes } from "../../../common/components/redux/disputes/disputesAsyncThunk";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../common/components/redux/hooks";
import { disputeTable } from "../../../fakeData";

const Dispute = () => {
  const {
    disputes,
    pagination: { currentPage },
  } = useAppSelector((state) => state.disputes);
  const { type, startDate, search, endDate, filter } = useAppSelector(
    (state) => state.tableFilter
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (type === "Dispute") {
      dispatch(
        fetchAllDisputes({ page: 1, endDate, search, startDate, filter })
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
