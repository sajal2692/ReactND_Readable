import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation'

class Posts extends Component {


  render() {
    return (
      <div>
        <Navigation/>
        Viewing Posts<br></br>
      {this.props.match.params.category && (` category: ${this.props.match.params.category}`)}
      </div>
    )
  }

}

export default Posts;
