import { useAppSelector } from "../../redux/hooks";
import CustomLoader from "../../CustomLoader";
import Avatar from "../Avatar";

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
                  <Avatar sellerImage={contact?.image} />
                  <div>
                    <div className="">
                      <span className="normalTextMedium">
                        {contact.first_name} {contact.last_name}
                      </span>
                    </div>
                    <div className="smallTextMedium">{contact?.email}</div>
                  </div>
                </div>
                <div className="contact_btn_div">
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
