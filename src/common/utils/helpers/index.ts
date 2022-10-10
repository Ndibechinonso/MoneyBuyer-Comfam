import { Ioptions } from "../../components/CustomTable/types";
import { language } from "../language/en";

type firstLevelPath =
  | "dashboard"
  | "notifications"
  | "wallet"
  | "messages"
  | "transaction"
  | "dispute"
  | "setting";
export const getFirstLevelPath = (value: any): firstLevelPath => {
  return value.substring(1).split("/")[0];
};

export type GetObjReturn = {
  title: string;
  subtitle: string;
  newUser?: object | any;
  existingUser?: object | any;
} | null;

export const displayHeaderBtn = (
  path: string,
  newUser?: boolean,
  incompletereg?: boolean
) => {
  if (incompletereg === true && newUser === true) {
    return false;
  }
  if (
    newUser === true &&
    !["notifications"].includes(getFirstLevelPath(path))
  ) {
    return true;
  }
  if (
    newUser === false &&
    !["notifications", "messages"].includes(getFirstLevelPath(path))
  ) {
    return true;
  }
};
export const displayPageInfo = (
  path: string,
  newUser?: boolean,
  incompletereg?: boolean
) => {
  if (incompletereg === true || newUser === true) {
    return true;
  }
  if (newUser === false && !["messages"].includes(getFirstLevelPath(path))) {
    return true;
  }
};

export const getObject = (path: string): GetObjReturn => {
  let value = null;
  if (path === "dashboard") {
    value = language.dashboard;
  }
  if (path === "wallet") {
    value = language.wallet;
  }
  if (path === "transaction") {
    value = language.transaction;
  }
  if (path === "messages") {
    value = language.messages;
  }
  if (path === "dispute") {
    value = language.dispute;
  }
  if (path === "setting") {
    value = language.setting;
  }
  if (path === "notifications") {
    value = language.notifications;
  }

  return value;
};

export const toNaira = (amount: string) =>
  parseInt(amount === "" ? "0" : amount)
    ?.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    })
    .split(".")[0];

interface IconfamFees {
  vat: number;
  totalPrice: number;
  transactionCost: number;
}

export const confamFeesCalc = (
  transactionPrice: string,
  quantity: string,
  insuranced?: boolean
): IconfamFees => {
  const totalPrice =
    parseInt(transactionPrice === "" ? "0" : transactionPrice) *
    parseInt(quantity === "" ? "0" : quantity);
  let markeupPercent = 0;
  switch (true) {
    case totalPrice <= 1999999:
      markeupPercent = 2.0;
      break;
    case totalPrice <= 9999999:
      markeupPercent = 1.5;
      break;
    case totalPrice > 9999999:
      markeupPercent = 1.0;
      break;
  }
  const transactionCost = (markeupPercent * totalPrice) / 100;

  let insurance = 0;
  if (insuranced) {
    insurance = (1.0 * totalPrice) / 100; // eslint-disable-line
  }
  const vat = (7.5 * totalPrice) / 100;
  return {
    vat,
    totalPrice,
    transactionCost,
  };
};

export const removeHypen = (text: string) =>
  text?.split("-")?.join(" ")?.toLocaleLowerCase();

export const transactionModalTitleHandler = (data: any) => {
  let template: any;

  switch (removeHypen(data?.status)) {
    case "awaiting confirmation":
      template = "Awaiting sellers confirmation";
      break;
    case "pending payment":
      template = `Transaction has been accepted, You have a pending payment of ${toNaira(
        data?.amount
      )}`;
      break;
    case "awaiting delivery":
      template = `This product is Awaiting delivery`;
      break;
    case "pending confirmation":
      template = `This is a new transaction pending your confirmation`;
      break;
    case "completed":
      template = `This Transaction has been completed`;
      break;
    case "cancelled":
      template = `This transaction has been cancelled`;
      break;
    case "refunded":
      template = `This Transaction was disputed and money has been  refunded`;
      break;

    default:
      break;
  }

  return template;
};

export const convertStatusFilter = (input: any[]): Ioptions[] => {
  const result: any = {};

  // const temp = input?.map((val) => val["status"]);
  input?.forEach((itm) => {
    if (!result[`${removeHypen(itm)}`]) {
      result[`${removeHypen(itm)}`] = {
        val: removeHypen(itm),
        checked: false,
      };
    }
  });
  return Object.values(result);
};

export const modalClassName = (type: string) => {
  let className: string;

  switch (type) {
    case "transactionitem":
    case "disputeform":
      className = "transactionModal__wrapper";
      break;
    case "alert":
      className = "alertModal__wrapper";
      break;
    case "disputeitem":
      className = "dispute__wrapper";
      break;
    case "newtransaction":
      className = "newtransaction__wrapper";
      break;

    default:
      className = "";
      break;
  }

  return className;
};

export const renderEmptyPageState = (
  newUser: boolean,
  path: string,
  notificationCount: number,
  messageCount: number
  // transactionCount: number,
  // disputeCount: number
) => {
  if (getFirstLevelPath(path) === "notifications" && notificationCount === 0) {
    return true;
  }
  if (getFirstLevelPath(path) === "messages" && messageCount === 0) {
    return true;
  }
  // if (
  //   newUser === false &&
  //   getFirstLevelPath(path) === "transaction" &&
  //   transactionCount === 0
  // ) {
  //   return true;
  // }
  // if (
  //   newUser === false &&
  //   getFirstLevelPath(path) === "dispute" &&
  //   disputeCount === 0
  // ) {
  //   return true;
  // }
  if (newUser && getFirstLevelPath(path) !== "setting") {
    return true;
  }
  return false;
};

export const querySwitch = (
  path: "transaction" | "dispute",
  skips: number,
  limit: number,
  startDate?: string,
  endDate?: string,
  search?: string,
  filter?: string
): string => {
  const searchParams: string = search ? `&search=${search}` : "";
  const dateParams: string = startDate
    ? `&startDate=${startDate}&endDate=${endDate}`
    : "";
  const filterParams: string = filter ? `&filter=${filter}` : "";
  return `/${path}?limit=${limit}&skip=${skips}${searchParams}${dateParams}${filterParams}`;
};
