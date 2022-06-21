import React from "react";
import ThreeDotIcon from "../customIcons/ThreeDot";
import Tag from "../customTags";
import DropDown from "../dropDowns/primitive";
import TransactionItem from "../dropDowns/TransactionItem";
import { TObj } from "./types";
import arrowRight from "../../../static/images/arrow_right.svg"
import clientImg from "../../../static/images/client_img.svg"
import { formatMoney } from "../../utils";
function TableInfo({ headers, data, activeOrder, recentTransacionHistory }: TObj) {
  return (
    <table className="table__display">
      <thead>
        <tr>
          {headers.map((itm) => {
            return <th key={itm.title}>{itm.title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => {
          return (
            <tr key={idx}>
              {headers.map((col, id) => (
                <td key={id}>
                  <span className="client_div">
                  {col.key ==="clients" ?  <span> <img src={clientImg} alt="alt image"/></span> : null}
                  <span> {col.key === "status" ? (
                   <Tag value={row[col.key]} />
                  )  : (
                    row[col.key]
                  )}</span> 
               </span> </td>
              ))}
              <td>
         { (!activeOrder || recentTransacionHistory) ? <DropDown content={<TransactionItem data={row} />}>
                  <button>
                    <ThreeDotIcon />
                  </button>
                </DropDown> : null }
                {(activeOrder && !recentTransacionHistory) ? <img src={arrowRight} alt="open order details" /> : null}
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
