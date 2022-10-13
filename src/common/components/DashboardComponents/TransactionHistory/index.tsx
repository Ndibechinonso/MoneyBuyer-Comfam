import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../redux/hooks";
import { formatCurrency, formatDate } from "../../../utils";
import CustomLoader from "../../CustomLoader";
import Avatar from "../Avatar";

const TransactionHistory = () => {
  const { loading, transactionHistory } = useAppSelector(
    (state) => state.dashboardSummary
  );
  useEffect(() =>{
  }, [transactionHistory])

  return (
    <div className="dashboard_sections">
      <h2>Transaction History</h2>
      <div className="dashboard_sections_content">
        {loading && <CustomLoader size={10} />}
        {(!loading && transactionHistory && transactionHistory.length > 0) ?
          transactionHistory.map((transaction, index) => {
            return (
              <div key={index} className="d-flex">
                <div className="d-flex user_container">
                  <Avatar sellerImage={transaction?.seller?.image} />
                  <div>
                    <div className="">
                      <span className="smallTextMedium">From: </span>
                      <span className="normalTextMedium">
                        {transaction?.seller?.first_name} {transaction?.seller?.last_name}
                      </span>
                    </div>
                    <div className="smallTextMedium">
                      {formatDate(transaction?.createdAt, 2)}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="smallTextMedium price">
                    {formatCurrency(transaction?.transactionFee)}
                  </div>
                  <div className="smallTextMedium text-right">Amount</div>
                </div>
              </div>
            );
          })  : <div>No Transaction History</div>}
      </div>
    </div>
  );
};

export default TransactionHistory;
