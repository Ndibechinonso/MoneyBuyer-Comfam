import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../redux/hooks";
import CustomLoader from "../../CustomLoader";

const ClientContact = () => {
  const { loading, contactList } = useAppSelector(
    (state) => state.dashboardSummary
  );

  return (
    <div className="dashboard_sections">
      <h2>Your Client Contact</h2>
      <div className="dashboard_sections_content">
        {loading && <CustomLoader size={10} />}
        {(!loading && contactList && contactList.length > 0) ?
          contactList.map((contact, index) => {
            return (
              <div key={index} className="d-flex">
                <div className="d-flex user_container">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <div>
                    <div className="">
                      {/* <span className="smallTextMedium">From: </span> */}
                      <span className="normalTextMedium">
                        {contact.first_name} {contact.last_name}
                      </span>
                    </div>
                    <div className="smallTextMedium">{contact?.email}</div>
                  </div>
                </div>
                <div>
                  <a className="contact_btn" href={`mailto:${contact?.email}`}>
                    Contact Client
                  </a>
                </div>
              </div>
            );
          }) : <div>No Contact List</div>}
      </div>
    </div>
  );
};

export default ClientContact;
