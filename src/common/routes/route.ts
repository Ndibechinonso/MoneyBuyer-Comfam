const route = {
  nonprotected: {
    buyer:{
      login: "/signin",
      register: "/signup",
      reset_password: "/forgotpassword",
    },
    verify: "/verification",
  },
  protected: {
    dashboard: "/dashboard",
    wallet: "/wallet",
    transaction: "/transaction",
    messages: "/messages",
    dispute: "/dispute",
    notifications: "/notifications",
    setting_profile: "/setting/profile",
    setting_bank_details: "/setting/bank_detail",
    setting_verification: "/setting/verification",
    setting_notification: "/setting/notification",
    setting_feedback: "/setting/give_feedback",
  },
};

export default route;
