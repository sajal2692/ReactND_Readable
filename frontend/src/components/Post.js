import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { PageHeader } from 'react-bootstrap'
import Navigation from './Navigation'
import { capitalize } from '../utils/helpers'
import { Icon, Statistic, Grid } from 'semantic-ui-react'
import { fetchVotePost } from '../actions/postsAction'
import moment from 'moment'

import Comments from './Comments'

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
        <div className="four-oh-four">
          Loading...
        </div>
      ) : (
        <div>
          {post
            ? (
              <div className="post-container">
                <div className="post-handlers">
                  <Grid columns={3}>
                    <Grid.Column>
                      <Link className="back-arrow" to={`/${post.category}`}>
                        <Icon size="large" link name='arrow left' />
                      </Link>
                    </Grid.Column>
                    <Grid.Column>
                      <div className="post-vote-box">
                        <Icon size="large" onClick={()=>this.props.dispatch(fetchVotePost(post.id, "upVote"))} link name='chevron up' />
                          <Statistic horizontal className="post-vote-score" size='mini'>
                            <Statistic.Label>Score:</Statistic.Label>
                            <Statistic.Value>{post.voteScore}</Statistic.Value>
                          </Statistic>
                        <Icon size='large' onClick={()=>this.props.dispatch(fetchVotePost(post.id, "downVote"))} link name='chevron down' />
                      </div>
                    </Grid.Column>
                    <Grid.Column>
                      <div className="edit-delete-container">
                        <Icon size="large" link name="edit"/>
                        <Icon size="large" link name="trash outline"/>
                      </div>
                    </Grid.Column>
                  </Grid>
                </div>
                <PageHeader className="post-header">
                  {post.title}
                  <small> by {capitalize(post.author)}</small>
                </PageHeader>
                <div className="post-body">
                  {post.body}
                </div>
                <div className="post-comments">
                  <Comments parentid={post.id}/>
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




// <div className="post-date">
//   {moment(post.timestamp).format('MMMM Do YYYY, h:mm a')}
// </div>
