import clsx from "clsx";
import style from "./informationUser.module.scss";

function InformationUser(info) {
  const handleLogout = () => {
    window.location.reload();
    localStorage.removeItem("token");
  };

  return (
    <div className={clsx(style.containerInfoUser, "d-flex-c")}>
      <p className={style.name}>{info.name}</p>
      <button className={style.btnLogout} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default InformationUser;
