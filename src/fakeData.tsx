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
      title: "Deadline",
      dataIndex: "deadline",
      key: "deadline",
    }
  ],

  rows: [
    {
      clients: "Luke Dane",
      price: "₦9,000",
      deadline: "22 March, 2022",
    },
    {
      clients: "Luke Dane",
      price: "₦9,000",
      deadline: "22 March, 2022",
    },
    {
      clients: "Luke Dane",
      price: "₦9,000",
      deadline: "22 March, 2022",
    },
    {
      clients: "Luke Dane",
      price: "₦9,000",
      deadline: "22 March, 2022",
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


