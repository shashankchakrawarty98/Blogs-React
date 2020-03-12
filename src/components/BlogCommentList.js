import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const BlogCommentList = props => {
  const { id } = useParams();
  const [blogComments, setBlogsComments] = useState([]);

  const fetchBlogComments = async () => {
    const urlComments = "http://localhost:3000/posts/" + id + "/comments";
    const comments = await fetch(urlComments);
    console.log({ comments });
    comments.json().then(comments => {
      console.log(comments, ">>>>>>>>>>>.");
      setBlogsComments(comments);
    });
  };

  useEffect(() => {
    fetchBlogComments();
  }, []);

  const showUserInfo = event => {
    console.log("called");
    const userName = event.currentTarget.attributes.name.value;
    window.location.href = "/post?author=" + userName;
  };

  const list = blogComments.map(comments => {
    return (
      <div className="ui segment" key={comments.id}>
      
        <div >{comments.body}</div>
        <div onClick={showUserInfo} name={comments.author}>
          
          <div>
            <p>User : {comments.author}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <center>
        <h4> Comments on blog </h4>
      </center>
      {list}
    </div>
  );
};
export default BlogCommentList;



