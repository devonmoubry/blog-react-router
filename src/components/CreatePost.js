import React, { Component } from 'react';

export default class CreatePost extends Component {
  "use strict";
  constructor(props) {
    super(props);

    this.state={
      authorName: "",
      blogTitle: "",
      blogEntry: ""
    }

  }

  handleChange = e => {
    e.preventDefault();
    console.log(e.target);
    this.setState({ [e.target.id]: e.target.value });
  }

  addPost = e => {
    e.preventDefault();
    this.setState({
      authorName: e.target.value,
      blogTitle: e.target.value,
      blogEntry: e.target.value
    });
    let blogPost = JSON.stringify(this.state);
    let url = "https://tiny-lasagna-server.herokuapp.com/collections/blogger/";

    fetch(url, {
      method: "POST",
      body: blogPost,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      console.log(response, "yay");
      this.props.history.push("/show");
    })
    .catch(err => {
      console.log(err, "boo!");
    });
    this.setState({
      authorName: "",
      blogTitle: "",
      blogEntry: ""
    });
  };

  render() {
    return (
      <div>
        <h1>CreatePost</h1>
        <div>
          <form onSubmit={this.addPost}>
            <label htmlFor="authorName">Author</label>
            <input type="text" id="authorName" placeholder="Author" value={this.state.value} onChange={this.handleChange} />
            <label htmlFor="blogTitle">Title</label>
            <input type="text" id="blogTitle" placeholder="Title" value={this.state.value} onChange={this.handleChange} />
            <label htmlFor="blogEntry">Write your blog...</label>
            <textarea id="blogEntry" placeholder="It was the best of times" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}
