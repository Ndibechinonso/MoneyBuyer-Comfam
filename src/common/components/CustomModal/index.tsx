import { ReactNode } from "react";
import { Alerts } from "../../components/redux/alert/alertActions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

type CustomModalProps = {
  children: ReactNode;
  progress?: boolean;
  className?: string;
};

const CustomModal = ({ children, progress, className }: CustomModalProps) => {
  const dispatch = useAppDispatch();
  const { isloading } = useAppSelector((state) => state.isloading);

  const closeModal = () => dispatch(Alerts(""));
  const disableBackDrop = progress || isloading;

  return (
    <div className="modal_container">
      <div className={`child_div ${className}`}>{children}</div>
      <div
        className="modal_backdrop"
        onClick={() => !disableBackDrop && closeModal()}
      ></div>
    </div>
  );
};

export default CustomModal;
