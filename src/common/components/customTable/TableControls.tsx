import React from "react";
import CalenderIcon from "../CustomIcons/CalenderIcon";
import CaretRight from "../CustomIcons/CaretRight";
import SearchIcon from "../CustomIcons/SearchIcon";
import SortIcon from "../CustomIcons/SortIcon";
import { TControls } from "./types";
import StatusFilter from "../DropDowns/StatusFilter";
import DropDown from "../DropDowns/primitive";
import CustomDate from "../CustomDate";

function TableControls({
  filterOptions,
  formState,
  inputChange,
  dateChange,
  filterSubmitHandler,
  resetFilterHandler,
  filteSelectHandler,
}: TControls) {
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

        <div className="table__input">
          <CalenderIcon className="calIcn" />
          <CustomDate
            type="range"
            startDate={formState.date[0]}
            endDate={formState.date[1]}
            onChange={dateChange}
            placeholder="Select Date"
          />
        </div>
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
