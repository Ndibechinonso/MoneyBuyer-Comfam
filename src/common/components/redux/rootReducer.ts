import { combineReducers } from "redux";
import alertReducer from "./alert/alertReducer";
import signupReducer from "./signup/signupReducer";
import loadingReducer from "./apploader";
import userReducer from "./getUser/getUserSlice";
import dashboardReducer from "./dashboard/dashboardSlice";
import disputesReducer from "./disputes/disputesSlice";
import transactionReducer from "./transaction/transactionSlice";
import tableFilterReducer from "./tableFilter/tableFilterSlice";
import walletReducer from "./fundsAndWallet/fundsAndWalletSlice";
import completeProfileReducer from "./completeUserProfile/completeProfileSlice";
import messagesReducer from "./messages/messagesSlice"
import notificationsReducer from "./notifications/notificationsSlice"
import dashboardGraphReducer from "./dashboardGraph/dashboardGraphSlice"
import getAllbanksReducer from "./getAllBanks/getAllBanksSlice"

const appReducers = combineReducers({
  alert: alertReducer,
  signup: signupReducer,
  isloading: loadingReducer,
  user: userReducer,
  dashboardSummary: dashboardReducer,
  disputes: disputesReducer,
  tableFilter: tableFilterReducer,
  wallet: walletReducer,
  completeProfile: completeProfileReducer,
  transactions: transactionReducer,
  messages: messagesReducer,
  notification: notificationsReducer,
  dashboardGraph: dashboardGraphReducer,
  getAllBanks: getAllbanksReducer
});

// const rootReducer = (state, action) => {
//   if (action.type === 'user/resetUser') {
//     return appReducers(undefined, action)
//   }
//   return appReducers(state, action);
// };

export default appReducers;
