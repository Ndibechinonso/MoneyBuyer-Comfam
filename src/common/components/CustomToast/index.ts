import { toast } from "react-toastify";

const customToast = (res?: string | string[], iserror?: true) => {
  const code = iserror === undefined ? "success" : "error";
  const data = typeof res === "object" ? res[0]: res
  return toast(data, {
    position: "top-right",
    draggable: false,
    bodyClassName: "toast__body",
    className: "toast",
    type: code,
    autoClose: 2000,
  });
};

export default customToast;
