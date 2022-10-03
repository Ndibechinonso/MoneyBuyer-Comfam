import React from "react";
import { useLocation } from "react-router-dom";
import { getFirstLevelPath } from "../../utils/helpers";
import CustomButton from "../CustomButtons";
import { Alerts } from "../redux/alert/alertActions";
import { useAppDispatch } from "../redux/hooks";

type NewUserCardProps = {
  message: string;
  completedRegistration: boolean;
};

function NewUserCard({ message, completedRegistration }: NewUserCardProps) {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  
  return (
    <div className={`newUserCard newUserCard__${pathname.substring(1)}`}>
      <p>{message}</p>
      {!['notifications','messages',"dispute"].includes(getFirstLevelPath(pathname)) && (
        <CustomButton
          disabled={completedRegistration}
          action={() => dispatch(Alerts("newtransaction"))}
          actionText={"New Transaction"}
        />
      )}
    </div>
  );
}

export default NewUserCard;
