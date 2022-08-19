import React from "react";
import ThreeDotIcon from "../customIcons/ThreeDot";
import Tag from "../customTags";
import DropDown from "../dropDowns/primitive";
import TableItem from "../dropDowns/TableItem";
import { TObj } from "./types";
import ArrowRight from "../customIcons/ArrowRight";
import clientImg from "../../../static/images/client_img.svg"
import { formatMoney } from "../../utils";
function TableInfo({ headers, data, activeOrder, recentTransacionHistory }: TObj) {
  return (
    <table className="table__display">
      <thead>
        <tr>
          {headers.map((itm) => {
            return <th key={itm.title} className={`${itm.title === "Clients" ? "text-left" : null}`}>{itm.title}</th>;
          })}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => {
          return (
            <tr key={idx}>
              {headers.map((col, id) => (
                <td key={id}>
                  <span className="client_div">
                  {col.key ==="clients" ?  <span className="client_img"> <img src={clientImg} alt="alt image" /></span> : null}
                   {col.key === "status" ? (
                   <Tag value={row[col.key]} />
                  )  : (
                    row[col.key]
                  )}
               </span> </td>
              ))}
              <td>
         { (!activeOrder || recentTransacionHistory) ? <DropDown content={<TableItem data={row} />}>
                  <button>
                    <ThreeDotIcon />
                  </button>
                </DropDown> : null }
                {(activeOrder && !recentTransacionHistory) ? <ArrowRight />  : null}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const MemTable = React.memo(TableInfo);
export default MemTable;
