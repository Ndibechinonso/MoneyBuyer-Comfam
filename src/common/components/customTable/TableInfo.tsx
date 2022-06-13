import React from "react";
import ThreeDotIcon from "../customIcons/ThreeDot";
import Tag from "../customTags";
import TransactionDD from "../dropDowns/TransactionDD";
import { TObj } from "./types";

function TableInfo({ headers, data }: TObj) {
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
                  {col.key === "status" ? (
                    <Tag value={row[col.key]} />
                  ) : (
                    row[col.key]
                  )}
                </td>
              ))}
                <td onClick={() => console.log(row)}>
              <TransactionDD>
                  <ThreeDotIcon />
              </TransactionDD>
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
