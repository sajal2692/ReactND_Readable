import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation'


class Post extends Component {


  render() {
    return (
      <div>
        <Navigation/>
        Adding or Editing Post <br></br>
        {this.props.match.params.category && (` Category: ${this.props.match.params.category}`)}<br></br>
      </div>
    )
  }

}

export default Post;
