import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { Alerts } from "../alert/alertActions";
import { store } from "../store";
import {
  fetchAllBanks,
  fetchWalletInfo,
  fundTransaction,
  fundWallet,
  verifyAccount,
  withdrawfromwallet,
} from "./fundsAndWalletAsyncThunk";
import { IfundsAndWallet } from "./types";

const initialState: IfundsAndWallet = {
  loading: false,
  error: "",
  banks: [],
  wallet: {
    id: "",
    user_id: "",
    type: "USER-WALLET",
    transaction_id: null,
    lean: false,
    balance: 0,
    created_at: "",
    updated_at: "",
    transactions: [],
  },
  withdrawalform: {
    account_number: "",
    bank_code: "",
    amount: "",
    bank_name: "",
    recipients_available: true,
    use_new_recipients: false,
    confirm_amount_to_pay: false,
    account_name: "",
    selected_recipient: "",
    account_number_verified: false,
  },
};

const slice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    resetWallet: (state) => {
      state.wallet = initialState.wallet;
      state.loading = initialState.loading;
      state.error = initialState.error;
      state.banks = initialState.banks;
    },
    resetWithdrawalform: (state) => {
      state.withdrawalform.account_number =
        initialState.withdrawalform.account_number;
      state.withdrawalform.bank_code = initialState.withdrawalform.bank_code;
      state.withdrawalform.amount = initialState.withdrawalform.amount;
      state.withdrawalform.bank_name = initialState.withdrawalform.bank_name;
      state.withdrawalform.recipients_available =
        initialState.withdrawalform.recipients_available;
      state.withdrawalform.use_new_recipients =
        initialState.withdrawalform.use_new_recipients;
      state.withdrawalform.confirm_amount_to_pay =
        initialState.withdrawalform.confirm_amount_to_pay;
      state.withdrawalform.account_name =
        initialState.withdrawalform.account_name;
      state.withdrawalform.selected_recipient =
        initialState.withdrawalform.selected_recipient;
      state.withdrawalform.account_number_verified =
        initialState.withdrawalform.account_number_verified;
    },
    updateNewRecipients: (state) => {
      state.withdrawalform.account_number =
        initialState.withdrawalform.account_number;
      state.withdrawalform.bank_code = initialState.withdrawalform.bank_code;
      state.withdrawalform.bank_name = initialState.withdrawalform.bank_name;
      state.withdrawalform.account_name =
        initialState.withdrawalform.account_name;
      state.withdrawalform.selected_recipient =
        initialState.withdrawalform.selected_recipient;
      state.withdrawalform.account_number_verified =
        initialState.withdrawalform.account_number_verified;
    },
    updateWithdrawalCheckBox: (
      state,
      action: PayloadAction<{ name: string }>
    ) => {
      state.withdrawalform[action.payload.name] =
        !state.withdrawalform[action.payload.name];
    },
    updateWithdrawalFormData: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      state.withdrawalform[action.payload.name] = action.payload.value;
    },
    selectABank: (state, action: PayloadAction<any>) => {
      state.withdrawalform.bank_code = action.payload.code;
      state.withdrawalform.bank_name = action.payload.name;
    },
    selectARecipient: (state, action: PayloadAction<any>) => {
      state.withdrawalform.bank_name = action.payload.bank_name;
      state.withdrawalform.account_name = action.payload.account_name;
      state.withdrawalform.account_number = action.payload.account_number;
      state.withdrawalform.selected_recipient = `${state.withdrawalform.account_name} - ${state.withdrawalform.account_number} - ${state.withdrawalform.bank_name}`;
    },
    recipientsAvailable: (state) => {
      state.withdrawalform.recipients_available = true;
      state.withdrawalform.account_number_verified = true;
    },
    recipientsNotAvailable: (state) => {
      state.withdrawalform.recipients_available = false;
      state.withdrawalform.account_number_verified = false;
      state.withdrawalform.use_new_recipients = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllBanks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllBanks.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.banks = action.payload;
      })
      .addCase(fetchAllBanks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "something went wrong";
      })
      .addCase(fetchWalletInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchWalletInfo.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.wallet = action.payload;
        }
      )
      .addCase(fetchWalletInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "something went wrong";
      })
      .addCase(verifyAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyAccount.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        if (!action.payload.error) {
          state.withdrawalform.account_name = action.payload.account_name;
          state.withdrawalform.account_number_verified = true;
        }
      })
      .addCase(verifyAccount.rejected, (state) => {
        state.loading = false;
        state.withdrawalform.account_number_verified = false;
      })
      .addCase(withdrawfromwallet.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        withdrawfromwallet.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          if (!action.payload.error) {
            state.wallet.balance = action.payload.wallet.balance;
            state.wallet.updated_at = action.payload.wallet.updated_at;
            state.wallet.transactions = action.payload.wallet.transactions;
          }
        }
      )
      .addCase(withdrawfromwallet.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fundWallet.pending, (state) => {
        state.loading = true;
      })
      .addCase(fundWallet.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.wallet.balance = action.payload.balance_after;
        state.wallet.updated_at = action.payload.updated_at;
        state.wallet.transactions = [
          ...state.wallet.transactions,
          { ...action.payload },
        ];
      })
      .addCase(fundWallet.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fundTransaction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fundTransaction.fulfilled, (state, action) => {
        Object.keys(state.wallet).forEach((key) => {
          state.wallet[key] = action.payload.buyerTransactionReport.wallet[key];
        });
      })
      .addMatcher(
        isAnyOf(fundTransaction.fulfilled, fundTransaction.rejected),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const {
  resetWallet,
  resetWithdrawalform,
  updateNewRecipients,
  updateWithdrawalFormData,
  selectABank,
  selectARecipient,
  recipientsAvailable,
  recipientsNotAvailable,
  updateWithdrawalCheckBox,
} = slice.actions;
export default slice.reducer;
