import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./common/components/Layout";
import Dashboard from "./modules/pages/Dashboard";
import Delivery from "./modules/pages/Delivery";
import Dispute from "./modules/pages/Dispute";
import Settings from "./modules/pages/Settings";
import BankDetail from "./modules/pages/Settings/BankDetails";
import FeedBack from "./modules/pages/Settings/FeedBack";
import Notification from "./modules/pages/Settings/Notification";
import Profile from "./modules/pages/Settings/Profile";
import Verification from "./modules/pages/Settings/Verification";
import Transaction from "./modules/pages/Transaction";
import Notifications from "./modules/pages/Notifications";
import Wallet from "./modules/pages/Wallet";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="dispute" element={<Dispute />} />
        <Route path="notifications" element={<Notifications />} />
        <Route element={<Settings />}>
          <Route path="setting/profile" element={<Profile />} />
          <Route path="setting/verification" element={<Verification />} />
          <Route path="setting/bank_detail" element={<BankDetail />} />
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
