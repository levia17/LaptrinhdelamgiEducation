import axios from "axios";
import { useEffect, useState } from "react";

import style from "./containerBlogs.module.scss";

import Blog from "./blog/blog";

function ContainerBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/blogs`)
      .then((data) => setBlogs(data.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(blogs);

  return (
    <div className={style.container}>
      {blogs.map((blog) => (
        <Blog
          key={blog.blogID}
          id={blog.blogID}
          author={blog.author}
          thumb={blog.thumb}
        />
      ))}
    </div>
  );
}

export default ContainerBlogs;
