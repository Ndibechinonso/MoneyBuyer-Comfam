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
  is_deleted: false;
  createdAt: string;
  updatedAt: string;
};

export type IfundsAndWallet = {
  loading: boolean;
  error: any;
  banks: Ibank[];
  wallet: Iwallet;
};
