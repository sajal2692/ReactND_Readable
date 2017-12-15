import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { PageHeader } from 'react-bootstrap'
import Navigation from './Navigation'
import { capitalize } from '../utils/helpers'
import { Icon } from 'semantic-ui-react'

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
            <Link className="back-arrow" to={`/${post.category}`}>
              <Icon size="large" link name='arrow left' />
            </Link>
            <PageHeader className="post-header">
              {post.title}
              <small> by {capitalize(post.author)}</small>
            </PageHeader>
            <div className="post-body">
                {post.body}
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
