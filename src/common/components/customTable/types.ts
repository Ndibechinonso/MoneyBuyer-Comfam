export type Ioptions = {
  val: string;
  checked: boolean;
};

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
  recentTransacionHistory?: any;
};

export type ifState = {
  search: string;
  date: Array<any>;
  filter: Ioptions[];
};

export type TControls = {
  data?: any[];
  setFilteredData?: React.Dispatch<React.SetStateAction<any[]>>;
  disabled?: boolean;
};
