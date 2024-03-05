import clsx from "clsx";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useEffect, useState } from "react";

import style from "./informationUser.module.scss";

import AvatarUser from "./avatar/avatar";

function InformationUser(info) {
  const [user, setUser] = useState();
  const decodeToken = jwtDecode(info.idUser);
  const id = decodeToken._id;

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/account/${id}`)
      .then((data) => setUser(data.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleLogout = () => {
    window.location.reload();
    localStorage.removeItem("token");
  };

  return (
    <>
      {user ? (
        <div className={clsx(style.containerInfoUser, "d-flex-c")}>
          <AvatarUser />
          <p className={style.name}>{user.username}</p>
          <button className={style.btnLogout} onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </>
  );
}

export default InformationUser;
