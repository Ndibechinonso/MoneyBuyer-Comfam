import { toast } from "react-toastify";

const customtoast = (res: string) =>
  toast(res, {
    position: "top-right",
    draggable: false,
    bodyClassName: "toast__body",
    className: "toast",
  });

export default customtoast;
