import React from "react";
import "./App";
const BlogListItem = ({ blogs }) => {
  return (
    <article className="container">
      <div className="ui segment"> >
        <div className="ui medium dividing header">{blogs.title}</div>
        <div className="card-text">{blogs.description}</div>
      </div>
    </article>
  );
};
export default BlogListItem;
