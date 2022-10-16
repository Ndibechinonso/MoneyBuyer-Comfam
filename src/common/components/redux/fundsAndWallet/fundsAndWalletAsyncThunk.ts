import { createAsyncThunk } from "@reduxjs/toolkit";
import admin from "../../../../modules/service/admin";
import { IfundTransaction } from "../../../../modules/service/admin/types";
import customToast from "../../CustomToast";
import { Alerts } from "../alert/alertActions";
import { store } from "../store";
import { IfundWallet, IverifyAccountNumber, Iwalletwithdraw } from "./types";

export const fetchAllBanks = createAsyncThunk(
  "wallet/fetchAllBanks",
  async () => {
    return admin
      .getAllBanks()
      .then((res) => res.data.data)
      .catch((err) => err);
  }
);
export const fetchWalletInfo = createAsyncThunk(
  "wallet/fetchWalletInfo",
  async () => {
    return admin
      .getWalletBalance()
      .then((res) => res.data)
      .catch((err) => {
        customToast(err.message, true);
        return err;
      });
  }
);
export const fundWallet = createAsyncThunk(
  "wallet/fundWallet",
  async (data: IfundWallet) => {
    return admin
      .fundWallet(data)
      .then((res) => {
        const response = res.data.buyerTransactionRecord;
        delete response.wallet;
        return response;
      })
      .catch((err) => {
        customToast(err.message, true);
        return err;
      });
  }
);
export const verifyAccount = createAsyncThunk(
  "wallet/verifyAccount",
  async (body: IverifyAccountNumber) => {
    return admin
      .verifyAccountNumber(body)
      .then((res) => res.data)
      .catch((err) => {
        customToast(err.message, true);
        return err;
      });
  }
);
export const withdrawfromwallet = createAsyncThunk(
  "wallet/withdrawfromwallet",
  async (body: Iwalletwithdraw) => {
    return admin
      .walletWithdraw(body)
      .then((res) => res.data)
      .catch((err) => {
        customToast(err.message, true);
        return err;
      });
  }
);
export const fundTransaction = createAsyncThunk(
  "wallet/fundTransaction",
  async (body: IfundTransaction) => {
    return admin
      .fundTransaction(body)
      .then((res) => res.data)
      .catch((err) => {
        customToast(err.message, true);
        store.dispatch(Alerts(""))
        return err;
      });
  }
);
