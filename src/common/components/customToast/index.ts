import { toast } from "react-toastify";

const CustomToast = (res?: string, iserror?: true) => {
  const code = iserror === undefined ? "success" : "error";
  return toast(res, {
    position: "top-right",
    draggable: false,
    bodyClassName: "toast__body",
    className: "toast",
    type: code,
  });
};

export default CustomToast;
