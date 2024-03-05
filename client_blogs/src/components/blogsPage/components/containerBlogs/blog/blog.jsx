import style from "./blog.module.scss";

import Button from "../button/button";

function Blog(info) {
  const id = info.id;
  const author = info.author;
  const thumb = info.thumb;

  return (
    <div className={style.blog}>
      <img src={thumb} alt={`thumb${id}`} />
      <div className={style.content}>
        {id}
        <br />
        <p className={style.author}>{author}</p>
      </div>
      <Button id={id} />
    </div>
  );
}

export default Blog;
