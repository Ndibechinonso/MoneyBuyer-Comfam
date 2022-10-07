import React, { useEffect, useMemo, useState } from "react";
import CalenderIcon from "../CustomIcons/CalenderIcon";
import SearchIcon from "../CustomIcons/SearchIcon";
import { ifState, Ioptions, TControls } from "./types";
import StatusFilter from "../DropDowns/StatusFilter";
import CustomDate from "../CustomDate";
import { convertStatusFilter, removeHypen } from "../../utils/helpers";
import { updateDate, updateSearchParam } from "../redux/tableFilter/tableFilterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useLocation } from "react-router-dom";
import useScrollToView from "../../hooks/useScrollToView";

function TableControls(props: TControls) {
  const { data, setFilteredData, disabled } = props;
  const { pathname } = useLocation();
  const headerRef = useScrollToView()
  const transactionPage = useAppSelector(state => state.transactions.pagination.currentPage)
  const disputePage = useAppSelector(state => state.disputes.pagination.currentPage)

  const page = useMemo(() => pathname.includes("dispute")?disputePage:transactionPage, [pathname,disputePage,transactionPage])

  useEffect(() => {
    headerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [pathname, page])
  

  const dispatch = useAppDispatch();

  const [table, setTable] = useState("Transaction")

  useEffect(() =>{
    if(pathname.includes("dispute")){
      setTable("Dispute")
    }
  }, [pathname])
  
  const [formState, setFormState] = useState<ifState>({
    search: "",
    date: [],
    filter: [],
  });

  useEffect(() => {
    const search =  formState.search;
    console.log(search, "search");
    dispatch(updateSearchParam(search))
    const startDate = new Date(formState.date?.[0]).toJSON();
    if (formState.date?.[1] == null) return;
    const endDate = new Date(formState.date?.[1]).toJSON();
    dispatch(updateDate({ startDate, endDate }));
  }, [formState]);

  useEffect(() => {
    setFormState((prev) => ({ ...prev, filter: convertStatusFilter(data) }));
  }, [data]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, search: e.target.value }));
  };

  const dateChangeHandler = (data: any) => {
    setFormState((prev) => ({ ...prev, date: data }));
  };

  const handlerFliterUnfocus = (e: React.PointerEvent) => null;

  const HandlerfilterSubmit = (e: any) => {
    const filteredOptions = formState.filter.filter(
      (itm) => itm.checked === true
    );

    const temp = data.filter((itm) =>
      filteredOptions.find((item) => removeHypen(itm.status) === item.val)
    );

    setFilteredData([...temp]);
  };

  const resetFilterHandler = () => null;

  const filteSelectHandler = (itm: Ioptions, id: number) => {
    const { checked, val } = itm;

    const oldFiltered = formState.filter.map((item, idx) =>
      idx === id ? { val, checked: !checked } : item
    );

    setFormState((prev) => ({ ...prev, filter: oldFiltered }));
  };

  const resetAllFilters = () => {
    setFormState((prev) => ({
      ...prev,
      search: "",
      date: [],
      filter: [...convertStatusFilter(data)],
    }));
    setFilteredData([]);
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
          />
        </div>
      </form>
      <StatusFilter
        options={formState.filter}
        onSelect={filteSelectHandler}
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
