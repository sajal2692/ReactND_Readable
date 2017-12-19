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
    const { category } = this.props.match.params
    const posts = !this.props.loading ? this.filterPostsByCategory(category) : [];

    return (
      <div>
        <Navigation/>
        {this.props.loading
        ? (
          <div className="four-oh-four">
            Loading...
          </div>
        ) : (
          <div>

          { ((this.props.categories.length > 0 && this.props.categories.find(cat => cat.name === category)) || !category)
            ? (
              <div className="post-list">
                <PageHeader>
                  Posts
                  {category && (<small>{capitalize(category)}</small>)}
                </PageHeader>
                {posts.length > 0
                ? (
                  <div className="posts-container">
                    <Item.Group relaxed>
                      {posts.map((post) => (
                        <PostPreview key={post.id} post={post}/>
                      ))}
                    </Item.Group>
                  </div>
                )
                : (
                  <div className="four-oh-four">
                    There are no posts in this category.
                  </div>
                )}
              </div>
            )
            : (
              <div className="four-oh-four">
                There's nothing here.
              </div>
            )
          }
        </div>
        )}
      </div>
    )
  }

}

//Can use ownprops here for something
function mapStateToProps(state) {
  return {
    loading: state.posts.loading,
    categories: state.categories,
    posts: state.posts.posts
          ? Object.keys(state.posts.posts).map((post) => state.posts.posts[post])
          : {}
  }
}

export default connect(mapStateToProps)(Posts);
