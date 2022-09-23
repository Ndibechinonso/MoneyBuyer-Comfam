import clientImg from "../../../../static/images/client_img.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'

const ActiveContracts = () => {
  return (
    <div className="dashboard_sections">
      <h2>Your Active Contract</h2>

      <div className="dashboard_sections_content">
        <div className="card_container">
          <div className="card_container_content">
            <div className="d-flex card_top">
              <div className="d-flex user_container">
                {/* <img src={clientImg} alt="" /> */}
                <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                <div>
                  <div className="normalTextMedium">Crosskenti Ltd.</div>
                  <div className="smallTextMedium">Nigeria</div>
                </div>
              </div>
              <div>
                <div className="smallTextMedium price">₦9,000</div>
                <div className="smallTextMedium">Fixed Rate</div>
              </div>
            </div>
          </div>
          <div className="card_container_content card_content_divider">
            <div className="d-flex">
              <div className="flexCol smallTextMedium">
                <div className="contract_info">Contract Period</div>
                <div className="date">Mar 8th, 2022 - Sep 30th, 2022</div>
              </div>

              <div className="flexCol smallTextMedium">
                <div className="contract_info">Name of client</div>
                <div className="date name">Kenneth King</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveContracts;
