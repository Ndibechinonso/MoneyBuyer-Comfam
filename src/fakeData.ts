import img from './static/images/unsplash.png'
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
