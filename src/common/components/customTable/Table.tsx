import React, { useState } from "react";
import TableInfo from "./TableInfo";
import TableControls from "./TableControls";
import { TObj } from "./types";
import { useAppSelector } from "../redux/hooks";

const Table = ({ headers, data, activeOrder, recentTransacionHistory }: TObj) => {

  const {loading} = useAppSelector((state) => state.disputes)

  const [filteredData, setFilterData] = useState<any[]>(data);

  return (
    <div className="table">
      <span className="tableBgTop"></span>
      <span className="tableBgBtm"></span>
      <TableControls data={data} setFilteredData={setFilterData} disabled={loading} />
      <TableInfo
        data={filteredData.length > 0 ? filteredData : data}
        headers={headers}
      />
    </div>
  );
}

export default Table;
