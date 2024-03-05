import clsx from "clsx";
import style from "./systemUser.module.scss";

import InformationUser from "./informationUser/informationUser";
import Button from "./button/button";

function SystemUser() {
  const token = localStorage.getItem("token");

  return (
    <div className={clsx(style.containerSystemUser, "d-flex-c_horizontal")}>
      {token && <InformationUser idUser={token}/>}
      {!token && <Button />}
    </div>
  );
}

export default SystemUser;
