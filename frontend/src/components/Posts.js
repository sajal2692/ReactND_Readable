import React, { Component } from 'react';
// import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Navigation from './Navigation'
import PostPreview from './PostPreview'



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
        Viewing Posts<br></br>
      {category && (` category: ${category}`)}
      <div className="post-list">
        {this.filterPostsByCategory(category).map((post) => (
          <PostPreview key={post.id} post={post}/>
        ))}
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
