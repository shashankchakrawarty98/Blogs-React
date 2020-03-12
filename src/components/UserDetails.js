import React from "react";
import Axios from "axios";

class UserDetails extends React.Component {
  state = {
    user: null,
    userPosts: []
  };

  async fetchUserPosts() {
    const user = window.location.search;
    console.log(user, ">>>>>>>>>>>>>");
    debugger;
    const userPosts = await Axios.get("http://localhost:3000/posts" + user);
    console.log(user, ">>>>>>>>>>>>>");
    this.setState({
      userPosts: userPosts.data,
      user: userPosts.data[0].author
    });
  }

  componentDidMount() {
    console.log(">>>>>>>>>>>>>");
    this.fetchUserPosts();
  }

  render() {
    const renderList = this.state.userPosts.map(post => {
      return (
        <article key={post.id} className="container">
          <div className="ui segment" >
          
            <div className="ui medium dividing header">{post.title}</div>
            
            <div className="description">{post.description}</div>
          </div>
         
        </article>
      );
    });
    return (
      <div >
        <center className="ui large dividing header">
          <h4> Posts written by {this.state.user} </h4>
        </center>
        {renderList}
      </div>
    );
  }
}

export default UserDetails;
