export type AppDispatchProps<T = any> = {
  type: string;
  payload?: T;
};

export type SellerDetails = {
  email: string;
  phone_number: string;
};

export type fullSellerDetails = {
  bvn: string;
  city: string;
  cognito_id: string;
  createdAt: string;
  date_of_birth: string;
  email: string;
  emailValidated: true;
  first_name: string;
  gender: string;
  id: string;
  last_name: string;
  local_gov: string;
  phone_number: string;
  residential_address: string;
  state: string;
  state_of_origin: string;
  street_number: number;
  updatedAt: string;
  user_type: "SELLER";
  verified: true;
  verifiedBvn: true;
  wallet_id: string;
  __v: number;
  _id: string;
  notification: INotification;
  bank_details: IBank[];
};

export type NewTransaction = {
  type: string;
  sellerDetails: SellerDetails;
  productName: string;
  quantity: string;
  description: string;
  productModel: string;
  images: string[];
  completionDueDate: string;
  price: string;
  deliveryAddress: string;
  transactionFee: string;
  insuranceRequested: boolean;
};

export type VerificationProps = {
  image: string;
  last_name: string;
  first_name: string;
  state: string;
  phone_number: string;
  street_number: string;
  street_name: string;
  city: string;
  local_gov: string;
};

export type NotificationProps = {
  sms: boolean;
  email: boolean;
  email_subcription: boolean;
  push_notifications: boolean;
};

export type FeedbackProps = {
  likes: string;
  rating: string;
  feature_request: string;
  change_request: string;
};

export interface IBank {
  account_name: string;
  account_number: string;
  bank_name: string;
}

export interface INotification {
  email: boolean;
  email_subcription: boolean;
  push_notifications: boolean;
  sms: boolean;
}

export type UserProps = {
  bank_details: IBank[];
  bvn: string;
  city: string;
  email: string;
  emailValidated: boolean;
  first_name: string;
  image: string;
  last_name: string;
  local_gov: string;
  notification: INotification;
  residential_address: string;
  state: string;
  state_of_origin: string;
  street_name: string;
  street_number: string;
  user_type: string;
  verified: boolean;
  verifiedBvn: boolean;
  wallet_id: string;
  transaction_count: number;
  id: string;
  phone_number: string;
};

export const initialUser = {
  bank_details: [],
  bvn: "",
  city: "",
  email: "",
  emailValidated: false,
  first_name: "",
  image: "",
  last_name: "",
  local_gov: "",
  notification: {
    email: false,
    email_subcription: false,
    push_notifications: false,
    sms: false,
  },
  residential_address: "",
  transaction_count: 0,
  state: "",
  state_of_origin: "",
  street_name: "",
  street_number: "",
  user_type: "",
  verified: false,
  verifiedBvn: false,
  wallet_id: "",
  id: "",
  phone_number: "",
};

export type TransactionProps = {
  canceled: boolean;
  completed: boolean;
  deleted: boolean;
  _id: string;
  seller: SellerProps;
  buyer: string;
  price: 0;
  createdBy: string;
  transactionFee: number;
  paymentTransactions: [];
  completionDueDate: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};

export type ContactListType = {
  email: string;
  first_name: string;
  user_type: string;
  last_name: string;
  phone_number: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  image: string;
};

export type ActiveContractTypes = {
  _id: string;
  completionDueDate: string;
  createdAt: string;
  productName: string;
  transactionFee: number;
  seller: SellerProps;
  status: string;
};

export type DashboardGraphProps = {
  loading: boolean;
  error: string;
  graphData: {};
  startDate: string;
  endDate: string;
};

export type DashboardProps = {
  loading: boolean;
  error: string;
  totalTransactions: number;
  openTransactions: number;
  settledTransactions: number;
  transactionHistory: TransactionProps[];
  activeContracts?: ActiveContractTypes[];
  contactList: ContactListType[];
};

export type Disputes = {
  _id: string;
  seller: {
    _id: string;
    city: string;
    street_number: number;
    residential_address: string;
    phone_number: string;
    last_name: string;
    user_type: string;
    first_name: string;
    email: string;
    bank_details: [];
    createdAt: string;
    updatedAt: string;
  };
  buyer: {
    _id: string;
    email: string;
    first_name: string;
    user_type: string;
    last_name: string;
    createdAt: string;
    updatedAt: string;
    wallet_id: string;
  };
  transaction: {
    price: number;
    transactionFee: number;
    deliveryAddress: string;
    completionDueDate: string;
    description: string;
    productName: string;
    images: string[];
    quantity: number;
  };
  dispute_reason: string;
  quantity: number;
  images: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
};

export interface PaginationProps {
  currentPage: number;
  dataCount: number;
  totalPages: number;
}

export interface NotificationPaginationProps extends PaginationProps {
  readNotification: number;
  unReadNotification: number;
}

export type DisputesDataType = {
  loading: boolean;
  error: string;
  disputes: Disputes[];
  singleDispute: Disputes;
  singleDisputeImages: string[];
  pagination: PaginationProps;
  page: number;
};
export type SellerProps = {
  business_name: string;
  first_name: string;
  id: string;
  image: string;
  loadedImage: string;
  last_name: string;
};
export type ChatProps = {
  createdAt: string;
  id: string;
  message: string;
  message_id: string;
  sender: string;
  updatedAt: string;
  date?: any;
};
export type MessageProps = {
  _id: string;
  seller: SellerProps;
  chats: ChatProps[];
};

export type MessagesProps = {
  loading: boolean;
  error: string;
  messageList: MessageProps[];
  activeMessage: MessageProps[];
  activeChats: ChatProps[];
  activeSeller: SellerProps;
};

export type Transaction = {
  buyer: string;
  canceled: boolean;
  completed: boolean;
  completionDueDate: string;
  createdAt: string;
  createdBy: "BUYER" | "SELLER";
  deleted: boolean;
  deliveryAddress: string;
  description: string;
  id: string;
  images: string[];
  insuranceRequested: true;
  paymentTransactions: any[];
  price: number;
  productName: string;
  quantity: number;
  reason: string;
  refundDate: string;
  status: string;
  transactionFee: number;
  transaction_wallet: string;
  type: "SERVICE" | "PRODUCT";
  updatedAt: string;
  seller: fullSellerDetails;
  vat: number;
  __v: number;
  _id: string;
};

export type TransactionDataType = {
  loading: boolean;
  error: string;
  transactions: Transaction[];
  singleTransaction: Transaction;
  singleTransactionImages: string[];
  pagination: PaginationProps;
  page: number;
};

export interface INotifications {
  action_id: string;
  createdAt: string;
  notification: string;
  notification_action: string;
  read: boolean;
  _id: string;
}
export type NotificationsProps = {
  loading: boolean;
  notifications: INotifications[];
  notification: { loading: boolean; item: any };
  pagination: NotificationPaginationProps;
  page: number;
};
