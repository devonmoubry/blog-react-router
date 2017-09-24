import React, { Component } from "react";

export default class CreatePost extends Component {
  "use strict";
  constructor(props) {
    super(props);

    this.state = {
      authorName: "",
      blogTitle: "",
      blogEntry: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    console.log(e.target);
    this.setState({ [e.target.id]: e.target.value });
  };

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
      <div className="container-fluid jumbotron">
        <h1 className="display-3">Create Post</h1>
        <div className="container">
          <form onSubmit={this.addPost}>
            <div className="form-group form-row">
              <label className="col-form-label col-md-4" htmlFor="authorName">
                Author
              </label>
              <input
                className="form-control form-control-lg"
                type="text"
                id="authorName"
                placeholder="Author"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group form-row">
              <label className="col-form-label col-md-4" htmlFor="blogTitle">
                Title
              </label>
              <input
                className="form-control form-control-lg"
                type="text"
                id="blogTitle"
                placeholder="Title"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group form-row">
              <label className="col-form-label col-md-4" htmlFor="blogEntry">
                Write your blog...
              </label>
              <textarea
                className="form-control form-control-lg"
                id="blogEntry"
                placeholder="It was the best of times"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            <input
              className="btn btn-success"
              type="submit"
              value="Publish Post"
            />
          </form>
        </div>
      </div>
    );
  }
}
