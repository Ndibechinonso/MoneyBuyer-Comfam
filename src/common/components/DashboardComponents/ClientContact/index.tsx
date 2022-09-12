import clientImg from "../../../../static/images/client_img.svg";
import CustomButton from "../../CustomButtons";

const ClientContact = () => {
  return (
    <div className="dashboard_sections">
      <h2>Your Client Contact</h2>

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
              <CustomButton  actionText="Contact Client" action={() => {}} className="contact_btn"/>
              </div>

            </div>

      </div>
    </div>
  );
};

export default ClientContact;
