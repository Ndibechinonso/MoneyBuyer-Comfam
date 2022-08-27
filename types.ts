 
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