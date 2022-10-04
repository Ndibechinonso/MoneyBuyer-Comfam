import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useScrollToView from "../../hooks/useScrollToView";
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
  const headerRef = useScrollToView();

  useEffect(() => {
    headerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [pathname]);

  return (
    <div className={`newUserCard newUserCard__${pathname.substring(1)}`}>
      <p ref={headerRef}>{message}</p>
      {!["notifications", "messages", "dispute"].includes(
        getFirstLevelPath(pathname)
      ) && (
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
