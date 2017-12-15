import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { PageHeader } from 'react-bootstrap'
import Navigation from './Navigation'
import { capitalize } from '../utils/helpers'

import '../styles/Post.css'

class Post extends Component {


  render() {
    const { post } = this.props

    return (
      <div>
      <Navigation/>
      <div className="content-container">
        {post && (
          <div className="post-container">
            <PageHeader className="post-header">
              {post.title}
              <small>{capitalize(post.author)}</small>
            </PageHeader>
            <div className="post-body">
              <p>
                {post.body}
              </p>
            </div>
          </div>
        )}
      </div>
      </div>
    )
  }

}

//Can use ownprops here for something
function mapStateToProps(state, ownProps) {
  return {
    post: state.posts[ownProps.match.params.postid]
  }
}

export default connect(mapStateToProps)(Post);
