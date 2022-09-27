const ENDPOINTS = {
  auth: {
    register: {
      method: "POST",
      url: "auth/register",
    },
    login: {
      method: "POST",
      url: "auth/login",
    },
    verify_user: {
      method: "POST",
      url: "auth/verify-code",
    },
    resend_code: {
      method: "POST",
      url: "auth/resend-code",
    },
    reset_password: {
      method: "POST",
      url: "auth/reset-password",
    },
    change_password: {
      method: "POST",
      url: "auth/change-password",
    },
    verify_bvn: {
      method: "POST",
      url: "auth/verify-bvn",
    },
    complete_profile: {
      method: "POST",
      url: "auth/complete-profile",
    },
    update_password: {
      method: "PUT",
      url: "auth/update-password",
    },
    update_profile_image: {
      method: "PUT",
      url: "auth/update-image",
    },
    update_notification_settings: {
      method: "PUT",
      url: "auth/update-notification",
    },
    get_user_info: {
      method: "GET",
      url: "/auth/user",
    },
  },
  transaction: {
    new_transaction: {
      method: "POST",
      url: "transaction/new",
    },
    accept_transaction: {
      method: "PATCH",
      url: (id: string) => `/transaction/accept?transaction_id=${id}`,
    },
    reject_transaction: {
      method: "POST",
      url: (id: string) => `/transaction/reject?transaction_id=${id}`,
    },
    delete_transaction: {
      method: "DELETE",
      url: (id: string) => `/transaction?transaction_id=${id}`,
    },
    all_transaction: {
      method: "GET",
      url: "transaction",
    },
    confirm_delivery: {
      method: "PATCH",
      url: (id: string) => `/transaction/confirm-delivery?transaction_id=${id}`,
    },
    search_transactions: {
      method: "GET",
      url: (id: string) => `/transaction/search?search=${id}`,
    },
    feedback_transactions: {
      method: "POST",
      url: "/transaction-feedback",
    },
    cancel_transaction: {
      method: "POST",
      url: "/transaction/cancel",
    },
    get_wallet:{
      method:"GET",
      url:"/transaction/wallet"
    },
    fund_buyer_wallet:{
      method:"POST",
      url:"/transaction/credit-wallet"
    },
    fund_transaction:{
      method:"POST",
      url:"/transaction/fund"
    },
    get_all_banks:{
      method:"GET",
      url:"/transaction/banks"
    },
    withdraw_from_wallet:{
      method:"POST",
      url:"/transaction/withdraw"
    },
    verify_account_number:{
      method:"POST",
      url:"/transaction/verify-account"
    }
  },
  disputes: {
    create_dispute: {
      method: "POST",
      url: "/dispute",
    },
    get_disputes: {
      method: "GET",
      url: (skips: number, limit: number, startDate: string, endDate: string) =>
      startDate  ? `/dispute?skip=${skips}&limit=${limit}&startDate=${startDate}&endDate=${endDate}` : `/dispute?skip=${skips}&limit=${limit}`
    },
    get_a_dispute: {
      method: "GET",
      url: (id: string) => `/dispute?id=${id}`,
    },
  },
  dashboard:{
    dashboard_summary: {
      method: "GET",
      url: "transaction/summary",
    },
  },
  file_handling: {
    upload_s3_image: {
      method: "GET",
      url: (fileName: string) => `/file/upload-url?key=${fileName}`,
    },
    download_s3_image: {
      method: "GET",
      url: (key: string) => `/file/download-url?key=${key}`,
    },
  },
  send_feedback: {
    method: "POST",
    url: "feedback",
  },
};

export default ENDPOINTS;
