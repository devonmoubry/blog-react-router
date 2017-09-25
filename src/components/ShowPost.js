import React, { Component } from "react";

class Post extends Component {
  render() {
    let post = this.props.postDetails;
    return (
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{post.blogTitle}</h2>
          <h4 className="card-subtitle">by: {post.authorName}</h4>
          <p className="card-text">{post.blogEntry}</p>
        </div>
      </div>
    );
  }
}

export default class ShowPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postDetails: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    let url = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
    fetch(url)
      .then(results => results.json())
      .then(responseData => {
        this.setState({ postDetails: responseData });
      })
      .catch(error => {
        console.log("Error with Fetching : ", error);
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="display-3">ShowPost</h1>
        <div className="container-fluid">
          <Post postDetails={this.state.postDetails} />
        </div>
      </div>
    );
  }
}
