import clientImg from "../../../../static/images/client_img.svg";

const TransactionHistory = () => {
  return (
    <div className="dashboard_sections">
      <h2>Transaction History</h2>

      <div className="dashboard_sections_content">
            <div className="d-flex">
              <div className="d-flex user_container">
                <img src={clientImg} alt="" />
                <div>
                  <div className=""><span className="smallTextMedium">From: </span><span className="normalTextMedium">Crosskenti Ltd.</span></div>
                  <div className="smallTextMedium">Mar 8th, 2022</div>
                </div>
              </div>
              <div>
                <div className="smallTextMedium price">+₦ 10,000</div>
                <div className="smallTextMedium">Amount Sent</div>
              </div>

            </div>

      </div>
    </div>
  );
};

export default TransactionHistory;
