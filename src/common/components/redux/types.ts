export type AppDispatchProps<T = any> = {
    type: string;
    payload?: T;
  }

   
 export type SellerDetails = {
  email: string;
  phone_number: string
}

export type NewTransaction = {
  type: "SERVICE" | "PRODUCT";
  sellerDetails: SellerDetails;
  ProductName: string;
  quantity: number;
  description: string;
  productModel: string;
  images: string[];
  completionDueDate: string;
  price: number;
  deliveryAddress: string
  transactionFee: number
}

export type VerificationProps ={
 last_name: string;
 first_name: string;
 state: string;
 phone_number: string;
 street_name: string;
 city: string;
 local_gov: string;
}
export type BankDetails = {
 bvn: string;
 bankDetails: {
    bank_name: string;
    account_number: string;
    account_name: string
 }
}

export type NotificationProps = {
 sms: boolean;
 email: boolean;
 email_subcription: boolean;
 push_notifications: boolean;
}

export interface ProfileProps{
    last_name: string;
    first_name: string;
    state: string;
    phone_number: string;
    street_name: string;
    city: string;
    local_gov: string;
    bankDetails: BankDetails
    notifcation: NotificationProps
}