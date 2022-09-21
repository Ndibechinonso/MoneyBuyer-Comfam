import clientImg from "../../../../static/images/client_img.svg";
import CustomButton from "../../CustomButtons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useAppSelector } from "../../redux/hooks";

const ClientContact = () => {

  const {loading, contactList} = useAppSelector((state) => state.dashboardSummary)

  return (
    <div className="dashboard_sections">
      <h2>Your Client Contact</h2>

      <div className="dashboard_sections_content">
        {contactList && contactList.map((contact, index) =>{
return     <div key={index} className="d-flex">
<div className="d-flex user_container">
  {/* <img src={clientImg} alt="" /> */}
  <FontAwesomeIcon icon={faEnvelope} />

  <div>
    <div className=""><span className="smallTextMedium">From: </span><span className="normalTextMedium">{contact.first_name} {contact.last_name}</span></div>
    <div className="smallTextMedium">{contact?.email}</div>
  </div>
</div>
<div>
<CustomButton  actionText="Contact Client" action={() => {}} className="contact_btn"/>
</div>

</div>

        })}
        
      </div>
    </div>
  );
};

export default ClientContact;
