import React, { useState, useEffect } from "react";
import BlogPosts from "./BlogPosts";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import BlogCommentList from "./BlogCommentList";
import UserDetails from './UserDetails';
const App = () => {
  const [blogPosts, setBlogsPosts] = useState([]);

  async function fetchBlogPosts() {
    const blogs = await fetch("http://localhost:3000/posts");
    blogs.json().then(blogs => {
      setBlogsPosts(blogs);
    });
  }
  useEffect(() => {
    {
      fetchBlogPosts();
    }
    // fetchBlogPosts();
  },[]);
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          component={() => blogPosts && <BlogPosts blogs={blogPosts} />}
        />
        <Route
          path="/comments/blog/:id"
          component={BlogCommentList}
           />
           <Route path="/post" component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
