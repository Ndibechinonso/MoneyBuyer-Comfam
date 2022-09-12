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
