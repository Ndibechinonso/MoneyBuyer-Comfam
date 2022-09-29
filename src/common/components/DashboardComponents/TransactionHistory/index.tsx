import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../redux/hooks";
import { formatCurrency, formatDate } from "../../../utils";
import CustomLoader from "../../CustomLoader";
import { useEffect, useState } from "react";
import admin from "../../../../modules/service/admin";
import CustomToast from "../../CustomToast";

const TransactionHistory = () => {
  const { loading, transactionHistory } = useAppSelector(
    (state) => state.dashboardSummary
  );
const [transactionArray, setTransactionArray] = useState([])

  useEffect(() =>{
//     transactionHistory.map((transaction) => {
// const files = transaction.images[0]
//       if (files.length) {
//      return admin
//       .uploadImage()
//       .then((res) => {
//         // setRawImage((prev) => [...prev, files.item(0)]);
//         transaction.refinedImage = res?.response.data.key;
//       })
//       .catch((err) => CustomToast(err.message, true))
//       .finally(() => {})
//     })
//   }
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
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                  <div>
                    <div className="">
                      <span className="smallTextMedium">From: </span>
                      <span className="normalTextMedium">
                        {/* {transaction?.seller} */}
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
