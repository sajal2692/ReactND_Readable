import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { PageHeader } from 'react-bootstrap'
import Navigation from './Navigation'
import { capitalize } from '../utils/helpers'
import { Icon } from 'semantic-ui-react'

import '../styles/Post.css'

class Post extends Component {

  //TODO: Implement LOADING
  render() {
    const { post, loading  } = this.props

    return (
      <div>
      <Navigation/>
      {loading
      ? (
        <div class="four-oh-four">
          Loading...
        </div>
      ) : (
        <div className="content-container">
          {post
            ? (
              <div className="post-container">
                <div>
                  <Link className="back-arrow" to={`/${post.category}`}>
                    <Icon size="large" link name='arrow left' />
                  </Link>
                  <div className="edit-delete-container">
                    <Icon size="large" link name="edit"/>
                    <Icon size="large" link name="trash outline"/>
                  </div>
                </div>
                <PageHeader className="post-header">
                  {post.title}
                  <small> by {capitalize(post.author)}</small>
                </PageHeader>
                <div className="post-body">
                  {post.body}
                </div>
              </div>
            )
            : (
              <div className="four-oh-four">
                There's nothing here.
              </div>
            )}
          </div>
      )}
      </div>
    )
  }

}

//Can use ownprops here for something
function mapStateToProps(state, ownProps) {
  return {
    loading: state.posts.loading,
    post: state.posts.posts
          ? state.posts.posts[ownProps.match.params.postid]
          : {}
  }
}

export default connect(mapStateToProps)(Post);
