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

};


export const sellersTransactions = {
  columns: [
    {
      title: "Transaction ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Seller",
      dataIndex: "seller",
      key: "seller",
    },
    {
      title: "Amount",
      dataIndex: "transactionFee",
      key: "transactionFee",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ]
};

export const disputeTable = {
  columns: [
    {
      title: "Dispute ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Reason",
      dataIndex: "dispute_reason",
      key: "dispute_reason",
    },
    {
      title: "Dispute Amount",
      dataIndex: "transaction",
      key: "transaction",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ]
};
