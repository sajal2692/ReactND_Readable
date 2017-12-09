import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {


  render() {
    return (
      <div>
        Viewing Posts<br></br>
        {this.props.match.params.category && (` category: ${this.props.match.params.category}`)}
      </div>
    )
  }

}

export default Posts;
