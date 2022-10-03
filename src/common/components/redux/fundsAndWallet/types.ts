type IwalletTransaction = {
  id: string;
  txn_type: "DEBIT" | "CREDIT";
  purpose: "WITHDRAWAL" | "DEPOSIT";
  amount: number;
  reference: string;
  external_reference?: null;
  last_response?: null;
  balance_before: number;
  balance_after: number;
  meta?: null;
  created_at: string;
  updated_at: string;
};

type Iwallet = {
  id: string;
  user_id: string;
  type: "USER-WALLET";
  transaction_id?: any;
  lean: boolean;
  balance: number;
  created_at: string;
  updated_at: string;
  transactions: IwalletTransaction[];
};

type Ibank = {
  id: number;
  name: string;
  slug: string;
  code: string;
  longcode: string;
  gateway: string;
  pay_with_bank: boolean;
  active: boolean;
  country: string;
  currency: string;
  type: string;
  is_deleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type IwalletWithdrawalform = {
  account_number: string,
  bank_code: string,
  amount: string,
  bank_name: string,
  recipients_available: boolean,
  use_new_recipients: boolean,
  confirm_amount_to_pay: boolean,
  account_name: string,
  selected_recipient: string,
  account_number_verified: boolean,
}

export type IfundsAndWallet = {
  loading: boolean;
  error: any;
  banks: Ibank[];
  wallet: Iwallet;
  withdrawalform: IwalletWithdrawalform;
};

export type IfundWallet = {
  reference: string;
};

export type IverifyAccountNumber = {
  account_number: string;
  bank_code: string;
};

export type Iwalletwithdraw = {
  account_number: string;
  bank_code: string;
  amount: string;
};