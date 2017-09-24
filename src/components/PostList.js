import React, { Component } from 'react';
import { Link } from "react-router-dom";

class List extends Component {
  render() {
    let blogs = this.props.blogs;
    let List = blogs.map(blog => {
      return (
        <li key={blog._id}>
          <Link to={`/show/${blog._id}`}>{blog.blogTitle}</Link>
        </li>
      );
    });
    return (
      <div>
        {List}
      </div>
    )
  }
}

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    let url = "https://tiny-lasagna-server.herokuapp.com/collections/blogger/";
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({ blogs: data });
    })
    .catch(error => {
      console.log("Error with Fetching : ", error);
    })
  }

  render() {
    return (
      <div>
        <h1>PostList</h1>
        <div>
          <List blogs={this.state.blogs} />
        </div>
      </div>
    );
  }

}
