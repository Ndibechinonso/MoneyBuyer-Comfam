import clientImg from "../../../../static/images/client_img.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useAppSelector } from "../../redux/hooks";
import { formatCurrency, formatDate } from "../../../utils";

const TransactionHistory = () => {

  const {loading, transactionHistory} = useAppSelector((state) => state.dashboardSummary)
console.log(transactionHistory, "transactionHistory");

  return (
    <div className="dashboard_sections">
      <h2>Transaction History</h2>

      <div className="dashboard_sections_content">

{transactionHistory && transactionHistory.map((transaction, index) =>{
  return    <div key={index} className="d-flex">
  <div className="d-flex user_container">
    <FontAwesomeIcon icon={faArrowRightArrowLeft} />
    <div>
      <div className=""><span className="smallTextMedium">From: </span><span className="normalTextMedium">{transaction?.seller}</span></div>
      <div className="smallTextMedium">{formatDate(transaction?.createdAt, 2)}</div>
    </div>
  </div>
  <div>
    <div className="smallTextMedium price">{formatCurrency(transaction?.transactionFee)}</div>
    <div className="smallTextMedium">Amount</div>
  </div>

</div>
})}

      </div>
    </div>
  );
};

export default TransactionHistory;
