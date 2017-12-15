import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { PageHeader } from 'react-bootstrap'
import Navigation from './Navigation'

import '../styles/Post.css'

class Post extends Component {


  filterPost = (postId) => { return this.props.posts.filter((post) => post.id === postId)[0]}

  render() {
    const post = this.filterPost(this.props.match.params.postid)
    console.log(post)
    return (
      <div>
      <Navigation/>
      <div className="content-container">
        <div className="post-container">
          <PageHeader>
            {post && post.title}
          </PageHeader>
        </div>
      </div>
      </div>
    )
  }

}

//Can use ownprops here for something
function mapStateToProps(state) {
  return {
    posts: Object.keys(state.posts).map((post) => state.posts[post])
  }
}

export default connect(mapStateToProps)(Post);
