import React, { Component } from 'react';

class Post extends Component {
  render() {
    let post = this.props.postDetails;
    return(
      <div>
        <h2>{post.blogTitle}</h2>
        <h4>{post.authorName}</h4>
        <p>{post.blogEntry}</p>
      </div>
    )
  }
}

export default class ShowPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postDetails: {},
      id: ""
    };
  }

  componentDidMount() {
    console.log('HELLO');
    const id = this.props.match.params.id;
    let url = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
    fetch(url)
    .then(results => results.json())
    .then(responseData => {
      console.log('What are YOU',responseData);
      this.setState({postDetails: responseData, id: id});
    })
    .catch(error => {
      console.log("Error with Fetching : ", error);
    });
  }

  render() {
    return (
      <div>
        <h1>ShowPost</h1>
        <Post postDetails={this.state.postDetails} id={this.state.id} />

      </div>
    );
  }
}
