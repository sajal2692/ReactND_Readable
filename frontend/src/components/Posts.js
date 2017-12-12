import React, { Component } from 'react';
// import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
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

//Can use ownprops here for something
function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Posts);
