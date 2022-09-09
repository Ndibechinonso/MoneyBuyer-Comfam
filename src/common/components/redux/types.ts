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
  image: string;
 last_name: string;
 first_name: string;
 state: string;
 phone_number: string;
 street_number: string;
 street_name: string;
 city: string;
 local_gov: string;
}


export type NotificationProps = {
 sms: boolean;
 email: boolean;
 email_subcription: boolean;
 push_notifications: boolean;
}
export type FeedbackProps ={
  likes: string;
    rating: string;
    feature_request: string;
    change_request: string;
}
