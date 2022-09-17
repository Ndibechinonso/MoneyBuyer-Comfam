type modalType =
  | "alert"
  | "transactionitem"
  | "newtransaction"
  | "disputeitem"
  | "disputeform";
type alertFormType = "feedback" | "payment" | "rating";
export type customAlertProps = {
  alertType: string;
};
export type modalContentProps = {
  type?: modalType;
  alertIcon?: any;
  header?: String;
  text?: String;
  progress?: any;
  confirmBtn?: any;
  actionLeft?: () => void;
  actionRight?: () => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  finishBtn?: any;
  opt?: any;
  alertForm?: alertFormType;
  // emojiForm?: any;
};
