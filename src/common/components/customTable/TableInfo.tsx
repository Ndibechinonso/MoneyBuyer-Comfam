import React from "react";
import ThreeDotIcon from "../CustomIcons/ThreeDot";
import Tag from "../CustomTags";
import DropDown from "../DropDowns/primitive";
import TableItem from "../DropDowns/TableItem";
import { TObj } from "./types";
import ArrowRight from "../CustomIcons/ArrowRight";
import clientImg from "../../../static/images/client_img.svg";
import { toNaira } from "../../utils/helpers";

function TableInfo({
  headers,
  data,
  activeOrder,
  recentTransacionHistory,
}: TObj) {
  const tableContentHandler = (row: any, col: any) => {
    let template: any;

    switch (col.key) {
      case "clients":
        template = (
          <span className="client_div">
            <span className="client_img">
              <img src={clientImg} alt="client" />
            </span>
          </span>
        );
        break;
      case "status":
        template = <Tag value={row[col.key]} />;
        break;
      case "createdAt":
        template = new Date(row[col.key]).toDateString();
        break;
      case "transactionFee":
        template = toNaira(row[col.key]);
        break;

      default:
        template = row[col.key];
        break;
    }

    return template;
  };

  return (
    <table className="table__display">
      <thead>
        <tr>
          {headers.map((itm) => {
            return (
              <th
                key={itm.title}
                className={`${itm.title === "Clients" ? "text-left" : null}`}
              >
                {itm.title}
              </th>
            );
          })}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => {
          return (
            <tr key={idx}>
              {headers.map((col, id) => (
                <td key={id}>{tableContentHandler(row, col)}</td>
              ))}
              <td>
                {!activeOrder || recentTransacionHistory ? (
                  <DropDown content={<TableItem data={row} />}>
                    <button>
                      <ThreeDotIcon />
                    </button>
                  </DropDown>
                ) : null}
                {activeOrder && !recentTransacionHistory ? (
                  <ArrowRight />
                ) : null}
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
