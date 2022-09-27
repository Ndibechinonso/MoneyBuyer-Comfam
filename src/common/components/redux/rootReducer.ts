import { combineReducers } from "redux";
import alertReducer from "./alert/alertReducer";
import tableItmReducer from "./tableItem";
import signupReducer from "./signup/signupReducer";
import loadingReducer from "./apploader";
import userReducer from "./getUser/getUserSlice"
import dashboardReducer from "./dashboard/dashboardSlice"
import disputesReducer from "./disputes/disputesSlice"
import tableFilterReducer from "./tableFilter/tableFilterSlice"
import walletReducer from "./fundsAndWallet/fundsAndWalletSlice";
import completeProfileReducer from "./completeUserProfile/completeProfileSlice";


export default combineReducers({
  alert: alertReducer,
  tableItem: tableItmReducer,
  signup: signupReducer,
  isloading: loadingReducer,
  user: userReducer,
  dashboardSummary: dashboardReducer,
  disputes: disputesReducer,
  tableFilter: tableFilterReducer,
  wallet: walletReducer,
  completeProfile: completeProfileReducer
});
