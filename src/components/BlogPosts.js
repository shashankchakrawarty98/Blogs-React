import React from "react";
import BlogListItem from "./BlogListItem";
import "./App";
const BlogPosts = ({ blogs }) => {
  const resultList = blogs.map(blogs => {
    return <BlogListItem key={blogs.id} blogs={blogs} />;
  });
  return <div>{resultList}</div>;
};

export default BlogPosts;
