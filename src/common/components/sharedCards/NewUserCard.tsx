import React from "react";
import { useLocation } from "react-router-dom";
import CustomButton from "../customButtons";

type NewUserCardProps = {
  message: string;
  completedRegistration: boolean;
};

function NewUserCard({ message, completedRegistration }: NewUserCardProps) {
    const {pathname} =useLocation()
  return (
    <div className={`newUserCard newUserCard__${pathname.substring(1)}`} >
      <p>{message}</p>
      <CustomButton
        disabled={!completedRegistration}
        action={() => console.log(message)}
        actionText={"New Transaction"}
      />
    </div>
  );
}

export default NewUserCard;
