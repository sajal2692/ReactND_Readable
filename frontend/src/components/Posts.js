import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation'

class Posts extends Component {

  // {this.props.match.params.category && (` category: ${this.props.match.params.category}`)}

  render() {
    return (
      <div>
        <Navigation/>
        Viewing Posts<br></br>
      </div>
    )
  }

}

export default Posts;
