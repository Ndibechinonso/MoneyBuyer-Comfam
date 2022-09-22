export type IcreateDispute = {
  seller: string;
  buyer: string;
  transaction: string;
  dispute_reason: string;
  images: Array<string>;
  quantity: string;
};

export type ItransactionFeedback = {
  rating: string;
  transaction_id: string;
  feedback: string;
};
export type IcanceltransactionFeedback = {
  transaction_id: string;
  reason: string;
};
export type IfundWallet = {
  reference: string;
};
export type IfundTransaction = {
  transaction: string;
};


