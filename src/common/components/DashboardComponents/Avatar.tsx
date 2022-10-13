import { useEffect, useState } from "react";
import admin from "../../../modules/service/admin";
import { capitalizeFirstLetter } from "../../utils";
import { loadingStart, loadingStop } from "../redux/apploader";
import { useAppDispatch } from "../redux/hooks";

type Imesssagecard = {
  sellerImage: string;
};

const Avatar = ({
  sellerImage,
}: Imesssagecard) => {

  const dispatch = useAppDispatch();
  
  const [userAvatar, setUserAvartar] = useState("");

useEffect(() => {
  dispatch(loadingStart(""));
  admin
  .getImage(sellerImage)
  .then((res) => {    
    setUserAvartar(res);
  })
  .catch((err) => console.log(err, "error"))
  .finally(() => dispatch(loadingStop()))
}, [sellerImage])
    
  return (
    <div
    className="avatar"
    style={{ backgroundImage: `url(${userAvatar})` }}
  ></div>
  );
}

export default Avatar;
