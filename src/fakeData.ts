import img from './static/images/unsplash.png'
import dashboardCardImg_1 from "../src/static/images/dashboardCard_1.svg"
import dashboardCardImg_2 from "../src/static/images/dashboardCard_2.svg"
import dashboardCardImg_3 from "../src/static/images/dashboardCard_3.svg"

export const deliveryTable = {
  columns: [
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "Seller",
      dataIndex: "seller",
      key: "seller",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ],

  rows: [
    {
      transactionId: "85613390HL36",
      seller: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Completed",
    },
    {
      transactionId: "85613390HL36",
      seller: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Awaiting confirmation",
    },
    {
      transactionId: "85613390HL36",
      seller: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Pending confirmation",
    },
    {
      transactionId: "85613390HL36",
      seller: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Awaiting delivery",
    },
    {
      transactionId: "85613390HL36",
      seller: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Cancelled",
    },
    {
      transactionId: "85613390HL36",
      seller: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Awaiting Delivery",
    },
    {
      transactionId: "85613390HL36",
      seller: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Pending payment",
    },
    {
      transactionId: "85613390HL36",
      seller: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Awaiting Delivery",
    },
    {
      transactionId: "85613390HL36",
      seller: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Cancelled",
    },
    {
      transactionId: "85613390HL36",
      seller: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Completed",
    },
    {
      transactionId: "85613390HL36",
      seller: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Refunded",
    },
    {
      transactionId: "85613390HL36",
      seller: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Completed",
    },
    {
      transactionId: "85613390HL36",
      seller: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Awaiting Delivery",
    },
  ],
};

export const activeOrder = {
  columns: [
    {
      title: "Clients",
      dataIndex: "clients",
      key: "clients",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
    },
    
    {
      title: "End date",
      dataIndex: "end_date",
      key: "end_date",
    }
  ],

  rows: [
    {
      clients: "Luke Dane",
      price: "₦9,000",
      start_date: "22 March, 2022",
      end_date: "22 March, 2022",
    },
    {
      clients: "Luke Dane",
      price: "₦9,000",
      start_date: "22 March, 2022",
      end_date: "22 March, 2022",

    },
    {
      clients: "Luke Dane",
      price: "₦9,000",
      start_date: "22 March, 2022",
      end_date: "22 March, 2022",

    },
    {
      clients: "Luke Dane",
      price: "₦9,000",
      start_date: "22 March, 2022",
      end_date: "22 March, 2022",
    }
  ],
};



export const recentHistoryTable = {
  columns: [
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ],

  rows: [
    {
      transactionId: "85613390HL36",
      customer: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Completed",
    },
    {
      transactionId: "85613390HL36",
      customer: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Awaiting confirmation",
    },
    {
      transactionId: "85613390HL36",
      customer: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Pending confirmation",
    },
    {
      transactionId: "85613390HL36",
      customer: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Awaiting delivery",
    }
  ]
};


export const  cardArray = [{
  cardImg: dashboardCardImg_1,
    cardTitle: "Total Income",
    amount: 456605
},
{
  cardImg: dashboardCardImg_2,
    cardTitle: "Balance",
    amount: 10750
},
{
  cardImg: dashboardCardImg_3,
    cardTitle: "Pending Transactions",
    amount: 78605
}]

export const chartArray = [
  {name: "Nonso", price: 20},
  {name: "Peter", price: 30},
  {name: "Sam", price: 40},
  {name: "Kola", price: 50}
]






export const sellersTransactions = {
  columns: [
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "Buyer",
      dataIndex: "buyer",
      key: "buyer",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ],

  rows: [
    {
      transactionId: "85613390HL36",
      buyer: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Completed",
      transactionDetails: {
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      transactionId: "85613390HL36",
      buyer: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Awaiting confirmation",
      transactionDetails: {
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      transactionId: "85613390HL36",
      buyer: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Pending confirmation",
      transactionDetails: {
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      transactionId: "85613390HL36",
      buyer: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Awaiting delivery",
      transactionDetails: {
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      transactionId: "85613390HL36",
      buyer: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Cancelled",
      transactionDetails: {
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      transactionId: "85613390HL36",
      buyer: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Awaiting Delivery",
      transactionDetails: {
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      transactionId: "85613390HL36",
      buyer: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Pending payment",
      transactionDetails: {
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      transactionId: "85613390HL36",
      buyer: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Awaiting Delivery",
      transactionDetails: {
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      transactionId: "85613390HL36",
      buyer: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Cancelled",
      transactionDetails: {
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      transactionId: "85613390HL36",
      buyer: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Completed",
      transactionDetails: {
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      transactionId: "85613390HL36",
      buyer: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Refunded",
      transactionDetails: {
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      transactionId: "85613390HL36",
      buyer: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Completed",
      transactionDetails: {
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      transactionId: "85613390HL36",
      buyer: "Bryan Daniels",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Awaiting Delivery",
      transactionDetails: {
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
  ],
};

export const disputeTable = {
  columns: [
    {
      title: "Dispute ID",
      dataIndex: "disputeId",
      key: "disputeId",
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
    },
    {
      title: "Dispute Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ],

  rows:[
    {
      disputeId: "85613390HL36",
      reason: "Item received used or expired",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Closed",
      transactionDetails: {
        disputeInfo: {
          disputeReason:"Item received was broken or defective",
          dispInfomation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id consectetur adipiscing elit...........",
          dispImage: img
        },
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      disputeId: "85613390HL36",
      reason: "Item received used or expired",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Open",
      transactionDetails: {
        disputeInfo: {
          disputeReason:"Item received was broken or defective",
          dispInfomation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id consectetur adipiscing elit...........",
          dispImage: img
        },
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      disputeId: "85613390HL36",
      reason: "Item received used or expired",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Closed",
      transactionDetails: {
        disputeInfo: {
          disputeReason:"Item received was broken or defective",
          dispInfomation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id consectetur adipiscing elit...........",
          dispImage: img
        },
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      disputeId: "85613390HL36",
      reason: "Item seems to be fake/unauthentic",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Open",
      transactionDetails: {
        disputeInfo: {
          disputeReason:"Item received was broken or defective",
          dispInfomation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id consectetur adipiscing elit...........",
          dispImage: img
        },
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      disputeId: "85613390HL36",
      reason: "Item seems to be fake/unauthentic",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Closed",
      transactionDetails: {
        disputeInfo: {
          disputeReason:"Item received was broken or defective",
          dispInfomation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id consectetur adipiscing elit...........",
          dispImage: img
        },
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      disputeId: "85613390HL36",
      reason: "Item seems to be fake/unauthentic",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Open",
      transactionDetails: {
        disputeInfo: {
          disputeReason:"Item received was broken or defective",
          dispInfomation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id consectetur adipiscing elit...........",
          dispImage: img
        },
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      disputeId: "85613390HL36",
      reason: "Item stopped working",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Closed",
      transactionDetails: {
        disputeInfo: {
          disputeReason:"Item received was broken or defective",
          dispInfomation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id consectetur adipiscing elit...........",
          dispImage: img
        },
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      disputeId: "85613390HL36",
      reason: "Item stopped working",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Open",
      transactionDetails: {
        disputeInfo: {
          disputeReason:"Item received was broken or defective",
          dispInfomation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id consectetur adipiscing elit...........",
          dispImage: img
        },
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      disputeId: "85613390HL36",
      reason: "Item stopped working",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Closed",
      transactionDetails: {
        disputeInfo: {
          disputeReason:"Item received was broken or defective",
          dispInfomation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id consectetur adipiscing elit...........",
          dispImage: img
        },
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      disputeId: "85613390HL36",
      reason: "Item stopped working",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Open",
      transactionDetails: {
        disputeInfo: {
          disputeReason:"Item received was broken or defective",
          dispInfomation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id consectetur adipiscing elit...........",
          dispImage: img
        },
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      disputeId: "85613390HL36",
      reason: "Item stopped working",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Closed",
      transactionDetails: {
        disputeInfo: {
          disputeReason:"Item received was broken or defective",
          dispInfomation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id consectetur adipiscing elit...........",
          dispImage: img
        },
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      disputeId: "85613390HL36",
      reason: "Item stopped working",
      amount: "₦45,000",
      date: "3 Mar, 2022",
      status: "Open",
      transactionDetails: {
        disputeInfo: {
          disputeReason:"Item received was broken or defective",
          dispInfomation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id consectetur adipiscing elit...........",
          dispImage: img
        },
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
    {
      disputeId: "85613390HL36",
      reason: "Item stopped working",
      amount: "₦565,445,000",
      date: "3 Mar, 2022",
      status: "Closed",
      transactionDetails: {
        disputeInfo: {
          disputeReason:"Item received was broken or defective",
          dispInfomation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id consectetur adipiscing elit...........",
          dispImage: img
        },
        buyerInfo: {
          email: "Johnson@gmail.com",
          paymentDueDate: "24th Mar 2022",
          phoneNumber: "+234-704-5432-12",
          deliveryAddress: "16A Adebayo Street, Lagos",
        },
        productInfo: {
          productName: "Laptop",
          productImage: img,
          productQuantity: 1,
          productDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl dui at id.Fermentum non vitae pretium nibh congue nisi. Felis, at facilisi sed sit habitant pharetra velit.",
        },
        pricingAndPayment:{
          productCost:"₦12,500",
          transactionFee:"₦1,000",
          subTotal:"₦12,500 + ₦1,000 Transaction fee",
          totalCost:"₦13,500"
        }
      },
    },
  ],
};