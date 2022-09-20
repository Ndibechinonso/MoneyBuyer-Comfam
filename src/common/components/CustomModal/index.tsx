import { ReactNode } from "react";
import { Alerts } from "../../components/redux/alert/alertActions";
import { useAppDispatch } from "../redux/hooks";

type CustomModalProps = {
  children: ReactNode;
  progress?: boolean;
  className?: string;
};

const CustomModal = ({ children, progress, className }: CustomModalProps) => {
  const dispatch = useAppDispatch();

  const closeModal = () => dispatch(Alerts(""));

  return (
    <div className="modal_container">
      <div className={`child_div ${className}`}>{children}</div>
      <div
        className="modal_backdrop"
        onClick={() => !progress && closeModal()}
      />
    </div>
  );
};

export default CustomModal;
