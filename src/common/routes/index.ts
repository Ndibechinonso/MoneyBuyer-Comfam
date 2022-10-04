import { lazy } from "react";
import route from "./route";
import { RouteConfig } from "./types";

const loadModules = (link:string) => lazy(() => import(`../../modules/pages/${link}`));

const routes:RouteConfig[] = [
  {
    path: route.nonprotected.login,
    Component: loadModules("Auth/Login"),
    access: "guest-only",
  },
  {
    path: route.nonprotected.register,
    Component: loadModules("Auth/Signup"),
    access: "guest-only",
  },
  {
    path: route.nonprotected.reset_password,
    Component: loadModules("auth/ForgotPassword"),
    access: "guest-only",
  },
  {
    path: route.nonprotected.verify,
    Component: loadModules("auth/EnterOtp"),
    access: "guest-only",
  },
  {
    path: route.protected.dashboard,
    Component: loadModules("Dashboard"),
    access: "loggedin-user",
  },
  {
    path: route.protected.wallet,
    Component: loadModules("Wallet"),
    access: "loggedin-user",
  },
  {
    path: route.protected.transaction,
    Component: loadModules("Transaction"),
    access: "loggedin-user",
  },
  {
    path: route.protected.messages,
    Component: loadModules("Messages"),
    access: "loggedin-user",
  },
  {
    path: route.protected.dispute,
    Component: loadModules("Dispute"),
    access: "loggedin-user",
  },
  {
    path: route.protected.notifications,
    Component: loadModules("Notifications"),
    access: "loggedin-user",
  },
  {
    path: route.protected.setting_bank_details,
    Component: loadModules("Settings/BankDetails"),
    access: "loggedin-user",
  },
  {
    path: route.protected.setting_feedback,
    Component: loadModules("Settings/FeedBack"),
    access: "loggedin-user",
  },
  {
    path: route.protected.setting_notification,
    Component: loadModules("Settings/Notification"),
    access: "loggedin-user",
  },
  {
    path: route.protected.setting_profile,
    Component: loadModules("Settings/Profile"),
    access: "loggedin-user",
  },
  {
    path: route.protected.setting_verification,
    Component: loadModules("Settings/Verification"),
    access: "loggedin-user",
  },
  
];

export default routes;