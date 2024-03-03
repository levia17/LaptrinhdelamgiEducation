import clsx from "clsx";
import { Link } from "react-router-dom";

import style from "./blogsPage.module.scss";

import ContainerBlogs from "./components/containerBlogs/containerBlogs";

function BlogsPage() {

  return (
    <>
      <div className={clsx(style.page)}>
        <button className={style.createBlog}>
          <Link to={"/blogsPage/create-new-blog"}>CREATE NEW BLOG</Link>
        </button>

        <ContainerBlogs />
      </div>
    </>
  );
}

export default BlogsPage;
