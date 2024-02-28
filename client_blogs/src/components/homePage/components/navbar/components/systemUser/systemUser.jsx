import clsx from "clsx";
import { jwtDecode } from "jwt-decode";
import style from "./systemUser.module.scss";

import InformationUser from "./informationUser/informationUser";
import Button from "./button/button";

function SystemUser() {
  const token = localStorage.getItem("token");
  let decodeToken;

  if (token) {
    decodeToken = jwtDecode(token);
  } else {
    console.log("Khong tim thay token");
  }

  return (
    <div className={clsx(style.containerSystemUser, "d-flex-c_horizontal")}>
      {decodeToken && <InformationUser name={'Hungneemoi'}/>}
      {!decodeToken && <Button />}
    </div>
  );
}

export default SystemUser;
