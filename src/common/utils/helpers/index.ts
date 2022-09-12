// import { type } from "@testing-library/user-event/dist/type";
import { language } from "../language/en";

export const getFirstLevelPath = (value: string) => {
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

  // if (newUser === true) {
  //    return true
  // }

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
  //  if (path === "delivery") {
  //     value = language.delivery
  //  }
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
  parseInt(amount === "" ? "0" : amount)?.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });

interface IconfamFees {
  vat: number;
  transactionFee: number;
}

export const confamFeesCalc = (
  transactionPrice: number,
  quantity: number,
  insuranced?: boolean
): IconfamFees => {
  const totalPrice = transactionPrice * quantity;
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
    insurance = (1.0 * totalPrice) / 100;
  }
  const vat = (7.5 * totalPrice) / 100;
  const transactionFee = transactionCost + totalPrice + insurance + vat;
  return {
    vat,
    transactionFee,
  };
};

export const removeHypen = (text: string) =>
  text.split("-").join(" ").toLocaleLowerCase();

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
