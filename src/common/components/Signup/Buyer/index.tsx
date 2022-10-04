import Signup from "../../../../modules/pages/Auth/Signup";
import BuyerForm from "./BuyerForm";

const Buyer = () => {
  return (
    <Signup>
      <div className="seller_container">
        <BuyerForm />
      </div>
    </Signup>
  );
};

export default Buyer;
