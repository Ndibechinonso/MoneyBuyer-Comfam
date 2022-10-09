import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import CalenderIcon from "../CustomIcons/CalenderIcon";
import SearchIcon from "../CustomIcons/SearchIcon";
import { ifState, Ioptions, TControls } from "./types";
import StatusFilter from "../DropDowns/StatusFilter";
import CustomDate from "../CustomDate";
import { convertStatusFilter, removeHypen } from "../../utils/helpers";
import {
  resetAllParams,
  setTableType,
  updateDate,
  updateFilterParam,
  updateSearchParam,
} from "../redux/tableFilter/tableFilterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useLocation } from "react-router-dom";
import useScrollToView from "../../hooks/useScrollToView";
import useDebounce from "../../hooks/useDebounce";
import { fetchAllTransactions } from "../redux/transaction/transactionAsyncThunk";
import { fetchAllDisputes } from "../redux/disputes/disputesAsyncThunk";

const transaction_status = [
  "COMPLETED",
  "AWAITING-CONFIRMATION",
  "AWAITING-DELIVERY",
  "PENDING-CONFIRMATION",
  "PENDING-PAYMENT",
  "REFUNDED",
  "CANCELLED",
  "REJECTED",
];
const dispute_status = ["OPEN", "IN-PROGRESS", "RESOLVED"];

const initialState = {
  search: "",
  date: [],
  filter: { options: [], query: "" },
};

function TableControls({ data, disabled }: TControls) {
  const { pathname } = useLocation();
  const headerRef = useScrollToView();
  const transactionPage = useAppSelector(
    (state) => state.transactions.pagination.currentPage
  );
  const disputePage = useAppSelector(
    (state) => state.disputes.pagination.currentPage
  );
  const table = useAppSelector((state) => state.tableFilter.type);

  const dispatch = useAppDispatch();
  const page = useMemo(
    () => (pathname.includes("dispute") ? disputePage : transactionPage),
    [pathname, disputePage, transactionPage]
  );
  const {startDate, endDate, filter, search} = useAppSelector((state) => state.tableFilter)

  const [formState, setFormState] = useState<ifState>(initialState);
  const debouncedSearch = useDebounce<string>(formState.search, 500);

  const resetFilter = useCallback(() => {
    if (pathname.includes("dispute")) {
      setFormState({
        ...initialState,
        filter: {
          ...initialState.filter,
          options: convertStatusFilter(dispute_status),
        },
      });
    }
    if (pathname.includes("transaction")) {
      setFormState({
        ...initialState,
        filter: {
          ...initialState.filter,
          options: convertStatusFilter(transaction_status),
        },
      });
    }
  }, [pathname]);

  // this cets the formstate to the initial state since the component is unmounting
  const willUnmountOnce = useRef(true);
  useEffect(() => {
    if (willUnmountOnce.current) {
      willUnmountOnce.current = false;
      return;
    }

    return () => {
      setFormState(initialState);
    };
  }, []);

  useEffect(() => {
    headerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [pathname, page]);

  useEffect(() => {
    if (pathname.includes("dispute")) {
      dispatch(setTableType("Dispute"));
      setFormState((prev) => ({
        ...prev,
        filter: {
          ...prev.filter,
          options: convertStatusFilter(dispute_status),
        },
      }));
    }
    if (pathname.includes("transaction")) {
      dispatch(setTableType("Transaction"));
      setFormState((prev) => ({
        ...prev,
        filter: {
          ...prev.filter,
          options: convertStatusFilter(transaction_status),
        },
      }));
    }
  }, [pathname]);

  useEffect(() => {
    const startDate = new Date(formState.date?.[0]).toJSON();
    if (formState.date?.[1] == null) return;
    const endDate = new Date(formState.date?.[1]).toJSON();
    if (formState.date[0]) {
      dispatch(updateDate({ startDate, endDate }));
    }
  }, [JSON.stringify(formState.date)]);

  useEffect(() => {
    if (formState.search) {
      dispatch(updateSearchParam(formState.search));
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (formState.filter.query) {
      dispatch(updateFilterParam(formState.filter.query));
    }
  }, [JSON.stringify(formState.filter.query)]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, search: e.target.value }));
  };

  const dateChangeHandler = (data: any) => {
    setFormState((prev) => ({ ...prev, date: data }));
  };

  const handlerFliterUnfocus = (e: React.PointerEvent) => null;

  const HandlerfilterSubmit = (e: any) => {
    const filteredOptions = formState.filter.options.filter(
      (itm) => itm.checked === true
    );
    let temp: any[];
    if (pathname.includes("transaction")) {
      temp = transaction_status.filter((itm) =>
        filteredOptions.find((item) => removeHypen(itm) === item.val)
      );
    }
    if (pathname.includes("dispute")) {
      temp = dispute_status.filter((itm) =>
        filteredOptions.find((item) => removeHypen(itm) === item.val)
      );
    }
    setFormState((prev) => ({
      ...prev,
      filter: { ...prev.filter, query: temp[0] },
    }));
  };

  const resetFilterHandler = () => null;

  const filterSelectHandler = (itm: Ioptions, id: number) => {
    const { checked, val } = itm;
    const oldFiltered = formState.filter.options.map((item, idx) =>
      idx === id ? { val, checked: !checked } : item
    );
    setFormState((prev) => ({
      ...prev,
      filter: { ...prev.filter, options: [...oldFiltered] },
    }));
  };

  const resetAllFilters = () => {
    resetFilter();
    dispatch(resetAllParams());
    if (pathname.includes("transaction")) {
      dispatch(fetchAllTransactions({ page: 1 }));
    }
    if (pathname.includes("dispute")) {
      dispatch(fetchAllDisputes({ page: 1, startDate, endDate, filter, search }));
    }
  };

  return (
    <div ref={headerRef} className="table__control">
      <span className="table__control--btn">
        <button onClick={resetAllFilters}>Showing All</button>
      </span>
      <form autoComplete="off">
        <div className="table__input">
          <label htmlFor="searchBox"></label>
          <input
            id="searchBox"
            name="search"
            value={formState.search}
            onChange={changeHandler}
            placeholder={`Search ${table}`}
            disabled={disabled}
          />
          <SearchIcon />
        </div>

        <div className="table__input">
          <CalenderIcon className="calIcn" />
          <CustomDate
            type="range"
            startDate={formState.date[0]}
            endDate={formState.date[1]}
            onChange={dateChangeHandler}
            placeholder="Select Date"
            disable={disabled}
            maxDate
          />
        </div>
      </form>
      <StatusFilter
        options={formState.filter.options}
        onSelect={filterSelectHandler}
        onResetForm={resetFilterHandler}
        onSubmitForm={HandlerfilterSubmit}
        onClickOutside={handlerFliterUnfocus}
        disabled={disabled}
      />
    </div>
  );
}

const MemControls = React.memo(TableControls);
export default MemControls;
