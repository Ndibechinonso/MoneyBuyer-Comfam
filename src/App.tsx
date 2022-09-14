import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./common/components/Layout";
import Settings from "./modules/pages/Settings";
import Auth from "./modules/pages/Auth";
import Signup from "./modules/pages/Auth/Signup";
import Dashboard from "./modules/pages/Dashboard";
// import Delivery from "./modules/pages/Delivery";
import Dispute from "./modules/pages/Dispute";
import BankDetail from "./modules/pages/Settings/BankDetails";
import FeedBack from "./modules/pages/Settings/FeedBack";
import Notification from "./modules/pages/Settings/Notification";
import Profile from "./modules/pages/Settings/Profile";
import Verification from "./modules/pages/Settings/Verification";
import Transaction from "./modules/pages/Transaction";
import Notifications from "./modules/pages/Notifications";
import Wallet from "./modules/pages/Wallet";
import Messages from "./modules/pages/Messages";
import Seller from "./common/components/Signup/Seller";
import Buyer from "./common/components/Signup/Buyer";
import Signin from "./modules/pages/Auth/Signin";
import Bsignin from "./common/components/Signin/Buyer";
import Ssignin from "./common/components/Signin/Seller";
import ResetPassword from "./modules/pages/Auth/ResetPassword";
import Breset from "./common/components/ResetPassword/Buyer";
import Sreset from "./common/components/ResetPassword/Seller";
import SignupVerification from "./modules/pages/Auth/SignupVerification";
import { fetchUserDetails } from "./https/storage";

function App() {
  return (
    <Routes>
      <Route element={<Auth />}>
        <Route element={<Signup />}>
          <Route path="/signup/seller" element={<Seller />} />
          <Route path="/signup/buyer" element={<Buyer />} />
          
          {/* <Route
            path="/signup"
            element={<Navigate replace to="/signup/seller" />}
          /> */}
        </Route>
        <Route element={<Signin />}>
          <Route path="/signin/seller" element={<Ssignin />} />
          <Route path="/signin/buyer" element={<Bsignin />} />
          {/* <Route
            path="/signin"
            element={<Navigate replace to="/signin/seller" />}
          /> */}
        </Route>
        <Route element={<ResetPassword />}>
          <Route path="/forgotpassword/seller" element={<Sreset />} />
          <Route path="/forgotpassword/buyer" element={<Breset />} />
        </Route>
        <Route path="/verification" element={<SignupVerification />}/>
      </Route>

      <Route element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="messages" element={<Messages />} />
        {/* <Route path="delivery" element={<Delivery />} /> */}
        <Route path="dispute" element={<Dispute />} />
        <Route path="notifications" element={<Notifications />} />
        <Route element={<Settings />}>
          <Route path="setting/profile" element={<Profile />} />

      {!fetchUserDetails().verified &&
         <Route path="setting/bank_detail" element={<BankDetail />} />
    }
        {!fetchUserDetails().verified &&
         <Route path="setting/verification" element={<Verification />} />
    }
        <Route path="setting/notification" element={<Notification />} />
          <Route path="setting/give_feedback" element={<FeedBack />} />
        </Route>
      </Route>
      {/* if no route is matched redirects back to dashboard */}
      <Route path="*" element={<Navigate replace to="dashboard" />} />
    </Routes>
  );
}

export default App;
