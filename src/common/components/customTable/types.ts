import { Ioptions } from "../DropDowns/StatusFilter";

export type TheaderObj = {
    title: string;
    dataIndex?: string;
    key: string;
  };
  export type dataObj = {
    id: string;
    transactionId: string;
    seller: string;
    amount: string;
    date: string;
    status: string;
  };
  
  export type TObj = {
    headers: Array<TheaderObj>;
    data: Array<any>;
    activeOrder?: any;
    recentTransacionHistory?: any
  };
  
  export type ifState = {
    search: string;
    date: Array<any>;
    filter: string[];
  };

  export type TControls = {
    formState: ifState;
    inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    dateChange: (data: any) => void;
    filterSubmitHandler: () => void;
    resetFilterHandler: () => void;
    filteSelectHandler: (itm: Ioptions, id: number) => void;
    filterOptions: Ioptions[];
  };