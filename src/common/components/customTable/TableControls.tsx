import React from "react";
import CalenderIcon from "../CustomIcons/CalenderIcon";
import CaretRight from "../CustomIcons/CaretRight";
import SearchIcon from "../CustomIcons/SearchIcon";
import SortIcon from "../CustomIcons/SortIcon";
import { DatePicker } from "../customInput/datePicker/DatePicker";
import { ifState } from "./types";
import StatusFilter, { Ioptions } from "../dropDowns/StatusFilter";
import DropDown from "../dropDowns/primitive";

type Props = {
  formState: ifState;
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dateChange: (data: any) => void;
  filterSubmitHandler: () => void;
  resetFilterHandler: () => void;
  filteSelectHandler: (itm: Ioptions, id: number) => void;
  filterOptions: Ioptions[];
};

function TableControls({
  filterOptions,
  formState,
  inputChange,
  dateChange,
  filterSubmitHandler,
  resetFilterHandler,
  filteSelectHandler,
}: Props) {
  return (
    <div className="table__control">
      <span className="table__control--btn">
        <button>Showing All</button>
      </span>
      <form autoComplete="off">
        <div className="table__input">
          <label htmlFor="searchBox"></label>
          <input
            id="searchBox"
            name="search"
            value={formState.search}
            onChange={inputChange}
            placeholder="Search Transaction"
          />
          <SearchIcon />
        </div>

        <DropDown
          content={
            <DatePicker selectedDate={formState.date} onChange={dateChange} />
          }
        >
          <div className="popup_date table__input">
            <div className="input__date">
              {formState.date.format("DD/MM/YYYY")}
            </div>

            <CalenderIcon className="calIcn" />
          </div>
        </DropDown>
      </form>
      <DropDown
        content={
          <StatusFilter
            options={filterOptions}
            onSelect={filteSelectHandler}
            onResetForm={resetFilterHandler}
            onSubmitForm={filterSubmitHandler}
          />
        }
      >
        <div className="table__control__sort">
          <SortIcon />
          <h3 className="table__control__sort-text">
            Filter by:
            <span> Recent </span>
          </h3>
          <CaretRight className="table__control__sort-drop" />
        </div>
      </DropDown>
    </div>
  );
}

const MemControls = React.memo(TableControls);
export default MemControls;
