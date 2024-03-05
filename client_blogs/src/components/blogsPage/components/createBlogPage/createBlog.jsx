import clsx from "clsx";

import style from "./createBlogPage.module.scss";

function CreateBlogPage() {
  return (
    <div className={clsx("page")}>
      <div className={style.containerTools}></div>
      <div className={style.containerContent}>
      </div>
    </div>
  );
}

export default CreateBlogPage;
