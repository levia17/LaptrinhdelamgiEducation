import clsx from "clsx";
import axios from "axios";

import style from "./button.module.scss";

function Button(info) {
  const id = info.id;

  const handleRemove = () => {
    axios
      .delete(`http://127.0.0.1:8000/api/blogs/${id}`)
      .then((data) => console.log("thanhcongxoabaiviet!"))
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.container}>
      <button
        className={clsx(style.btn, style.btnRemove)}
        onClick={handleRemove}
      >
        REMOVE
      </button>
    </div>
  );
}

export default Button;
