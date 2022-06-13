import dayjs from "dayjs";
import React from "react";
import { Ioptions } from "../dropDowns/StatusFilter";
import TableInfo from "./TableInfo";
import TableControls from "./TableControls";

type headerObj = {
  title: string;
  dataIndex?: string;
  key: string;
};
// type dataObj = {
//   id: string;
//   transactionId: string;
//   seller: string;
//   amount: string;
//   date: string;
//   status: string;
// };

type Props = {
  headers: Array<headerObj>;
  data: Array<any>;
};

type ifState = {
  search: string;
  date: dayjs.Dayjs;
  filter: string[];
};

function Table({ headers, data }: Props) {
  const [formState, setFormState] = React.useState<ifState>({
    search: "",
    date: dayjs(),
    filter: [],
  });

  // const onChangeHandler = React.useCallback(
  //   () => (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target;
  //     setFormState((prev) => ({ ...prev, search: value }));
  //   },
  //   []
  // );

  // const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormState((prev) => ({ ...prev, [name]: value }));
  // };

  const convertStatusFilter = (input: Array<any>): Ioptions[] => {
    const result: any = {};

    const data = input.map((val) => val["status"]);
    data.forEach((itm) => {
      if (!result[`${itm}`]) {
        result[`${itm}`] = {
          val: itm,
          checked: false,
        };
      }
    });
    return Object.values(result);
  };

  const [filter, setFilter] = React.useState(convertStatusFilter(data));

  const filteSelectHandler = (itm: Ioptions, id: number) => {
    const { checked, val } = itm;
    let oldArr = [...filter];
    oldArr[id] = { val: val, checked: !checked };
    setFilter(oldArr);
  };

  const resetFilterHandler = () => {
    setFilter(convertStatusFilter(data));
    setFormState((prev) => ({ ...prev, filter: [] }));
  };

  const filterSubmitHandler = () => {
    const filterd = filter.filter((itm) => itm.checked === true);
    const params = filterd.map((itm) => itm.val);
    setFormState((prev) => ({ ...prev, filter: params }));
  };

  const dateChangeHandler = (data: any) => {
    setFormState((prev) => ({ ...prev, date: data }));
  };

  const fill = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setFormState((prev) => ({ ...prev, search: e.target.value })),
    [formState.search] //eslint-disable-line
  );

  return (
    <div className="table">
      <span className="tableBgTop"></span>
      <span className="tableBgBtm"></span>
      <TableControls
        filterSubmitHandler={filterSubmitHandler}
        filteSelectHandler={filteSelectHandler}
        resetFilterHandler={resetFilterHandler}
        formState={formState}
        inputChange={fill}
        dateChange={dateChangeHandler}
        filterOptions={filter}
      />
      <TableInfo data={data} headers={headers} />
    </div>
  );
}

export default Table;
