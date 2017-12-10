import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Navbar from './Navbar'

class Post extends Component {


  render() {
    return (
      <div>
        Single Post <br></br>
        {this.props.match.params.category && (` Category: ${this.props.match.params.category}`)}<br></br>
        {this.props.match.params.postid && (` Post: ${this.props.match.params.postid}`)}
      </div>
    )
  }

}

export default Post;
