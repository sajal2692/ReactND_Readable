import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Navbar from './Navbar'

class PostPreview extends Component {


  render() {

    const { post } = this.props
    return (
      <div>
        {post.title}
      </div>
    )
  }

}

export default PostPreview;
