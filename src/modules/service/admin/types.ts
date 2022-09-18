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
