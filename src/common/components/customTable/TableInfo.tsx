import React from "react";
import ThreeDotIcon from "../customIcons/ThreeDot";
import Tag from "../customTags";
import DropDown from "../dropDowns/primitive";
import TableItem from "../dropDowns/TableItem";
import { TObj } from "./types";
import ArrowRight from "../customIcons/ArrowRight";
import clientImg from "../../../static/images/client_img.svg";
import { toNaira } from "../../utils/helpers";

function TableInfo({
  headers,
  data,
  activeOrder,
  recentTransacionHistory,
}: TObj) {
  const tableContentHandler = (row, col) => {
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
                <td key={id}>
                  {tableContentHandler(row, col)}
                  {/* <span className="client_div">
                    {col.key === "clients" ? (
                      <span className="client_img">
                        <img src={clientImg} alt="alt image" />
                      </span>
                    ) : null}
                    {col.key === "status" ? (
                      <Tag value={row[col.key]} />
                    ) : col.key === "createdAt" ? (
                      new Date(row[col.key]).toDateString()
                    ) : (
                      row[col.key]
                    )}
                  </span> */}
                </td>
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
