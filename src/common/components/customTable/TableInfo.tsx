import React, { useEffect, useMemo, useState } from "react";
import ThreeDotIcon from "../CustomIcons/ThreeDot";
import Tag from "../CustomTags";
import DropDown from "../DropDowns/primitive";
import TableItem from "../DropDowns/TableItem";
import { TObj } from "./types";
import ArrowRight from "../CustomIcons/ArrowRight";
import clientImg from "../../../static/images/client_img.svg";
import { toNaira } from "../../utils/helpers";
import PaginationComponent from "../PaginationComponent";
import { changePageNumber } from "../redux/disputes/disputesSlice";
import { changePageNumber as trans_changePageNumber } from "../redux/transaction/transactionSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import CustomLoader from "../CustomLoader";
import { useLocation } from "react-router-dom";

function TableInfo({
  headers,
  data,
  activeOrder,
  recentTransacionHistory,
}: TObj) {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [neglectlimit, setLimit] = useState(5);
  const { pathname } = useLocation();

  const { loading: dispute_loading, count: dispute_count } = useAppSelector(
    (state) => state.disputes
  );
  const { loading: transaction_loading, count: transaction_count } =
    useAppSelector((state) => state.transactions);

  // const offset = (page - 1) * limit;
  // const endposition = page * limit;

  const loading = dispute_loading || transaction_loading;

  const totalPages = useMemo(
    () =>
      pathname.includes("dispute")
        ? Math.ceil((dispute_count || 0) / 10)
        : Math.ceil((transaction_count || 0) / 10),
    [dispute_count, transaction_count, pathname]
  );

  useEffect(() => {
    if (pathname.includes("dispute")) {
      dispatch(changePageNumber(currentPage - 1));
    }
    if (pathname.includes("transaction")) {
      dispatch(trans_changePageNumber(currentPage - 1));
    }
  }, [currentPage]); // eslint-disable-line

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
      case "seller":
        template = `${row[col.key]?.last_name} ${row[
          col.key
        ]?.first_name.substring(0, 1)}.`;
        break;
      case "_id":
        template = `${row[col.key]}`;
        break;
      case "dispute_reason":
        template = `${row[col.key]}`;
        break;
      default:
        template = row[col.key];
        break;
    }
    return template;
  };

  return (
    <div>
      <table className="table__display">
        <thead>
          <tr>
            {headers.map((itm) => {
              return (
                <th
                  key={itm.title}
                  className={`${itm.title === "Clients" ? "text-left" : ""}`}
                >
                  {itm.title}
                </th>
              );
            })}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr className="m-auto">
              <td colSpan={6}>
                <CustomLoader size={10} />
              </td>
            </tr>
          ) : data.length > 1 ? (
            data.map((row, idx) => {
              return (
                <tr key={idx}>
                  {headers.map((col, id) => (
                    <td key={id} className="">
                      {tableContentHandler(row, col)}{" "}
                    </td>
                  ))}
                  <td className="">
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
            })
          ) : (
            <tr>
              <td colSpan={6}>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
      <PaginationComponent
        loading={false}
        currentPage={currentPage}
        // totalPages={Math.ceil((count || 0) / limit)}
        totalPages={totalPages}
        // totalPages={12}
        setLimit={setLimit}
        setPage={setCurrentPage}
        limit={neglectlimit}
      />
    </div>
  );
}

const MemTable = React.memo(TableInfo);
export default MemTable;
