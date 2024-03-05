import clsx from "clsx";
import { Link } from "react-router-dom";

import style from "./button.module.scss";

function Button() {
  return (
    <>
      <button className={clsx("d-flex-c", style.Btn, style.login)}>
        <p>LOGIN</p>
        <Link to={"/login"}> </Link>
      </button>
      <button className={clsx("d-flex-c", style.Btn, style.register)}>
        <p>REGISTER</p>
        <Link to={"/register"}> </Link>
      </button>
    </>
  );
}

export default Button;
