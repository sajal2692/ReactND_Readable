import React, { Component } from 'react';
// import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Navigation from './Navigation'
import PostPreview from './PostPreview'
import { PageHeader } from 'react-bootstrap'
import { capitalize } from '../utils/helpers'
import { Item } from 'semantic-ui-react'

import '../styles/Posts.css'


class Posts extends Component {

  filterPostsByCategory= (category) => {
    return category
    ? this.props.posts.filter((post) => post.category === category)
    : this.props.posts
  }

  render() {
    // const { posts } = this.props
    const { category } = this.props.match.params
    return (
      <div>
        <Navigation/>
        <div classname="content-container">
          <div className="post-list">
            <PageHeader>
              Posts
              {category && (<small>{capitalize(category)}</small>)}
            </PageHeader>
            <div className="posts-container">
              <Item.Group relaxed>
                {this.filterPostsByCategory(category).map((post) => (
                  <PostPreview key={post.id} post={post}/>
                ))}
              </Item.Group>
            </div>
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

export default connect(mapStateToProps)(Posts);
