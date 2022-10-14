import { useAppSelector } from "../../redux/hooks";
import { formatCurrency, formatDate } from "../../../utils";
import CustomLoader from "../../CustomLoader";
import Avatar from "../Avatar";

const ActiveContracts = () => {
  const {loading, activeContracts} = useAppSelector((state) => state.dashboardSummary)
  return (
    <div className="dashboard_sections">
      <h2>Your Active Contract</h2>

      <div className="dashboard_sections_content">

      {loading && <CustomLoader size={10} />}

      {(!loading && activeContracts && activeContracts.length > 0) ? 
      activeContracts.filter((item, index) => index < 2).map((contract, index) =>{
        return  <div key={contract._id} className="card_container">
        <div className="card_container_content">
          <div className="d-flex card_top">
            <div className="d-flex user_container">
              <Avatar sellerImage={contract?.seller?.image} />
              <div>
                <div className="normalTextMedium">{contract?.productName}</div>
                <div className="smallTextMedium">Nigeria</div>
              </div>
            </div>
            <div>
              <div className="smallTextMedium price">{formatCurrency(contract?.transactionFee)}</div>
              <div className="smallTextMedium">{contract?.status}</div>
            </div>
          </div>
        </div>
        <div className="card_container_content card_content_divider">
          <div className="d-flex">
            <div className="flexCol smallTextMedium">
              <div className="contract_info">Contract Period</div>
              <div className="date">{formatDate(contract?.createdAt, 2)} - {formatDate(contract.completionDueDate, 2)}</div>
            </div>

            <div className="flexCol smallTextMedium text-right">
              <div className="contract_info">Name of Seller</div>
              <div className="date name">{contract?.seller?.first_name} {contract?.seller?.last_name}</div>
            </div>
          </div>
        </div>
      </div> 
      }) : <div>No Active Contracts</div>}
    
      </div>
    </div>
  );
};

export default ActiveContracts;
