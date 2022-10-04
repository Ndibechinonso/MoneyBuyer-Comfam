import Signup from "../../../../modules/pages/Auth/Signup";
import SellerForm from "./SellerForm";

const Seller = () => {
  return (
    <Signup>
      <div className="seller_container">
        <SellerForm />
      </div>
    </Signup>
  );
};

export default Seller;
