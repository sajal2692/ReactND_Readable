import React, { Component } from 'react';
import { connect } from 'react-redux'
import { capitalize } from '../utils/helpers'
import { Comment, Header } from 'semantic-ui-react'
import { fetchCommentsByPost, loadingComments } from '../actions/commentsAction'

import VoteScore from './VoteScore'

import '../styles/Comments.css'

class Comments extends Component {


  componentDidMount() {
    this.props.dispatch(loadingComments());
    this.props.dispatch(fetchCommentsByPost(this.props.parentid));
  }

  render() {
    const { loading, comments } = this.props

    return (
      <Comment.Group>
        <Header as='h3' dividing>Comments</Header>
        {loading
        ? (
          <div className="four-oh-four">
            Loading...
          </div>
        ) :
          (comments && comments.length > 0)
           ? comments.map((comment) => (
            <Comment key={comment.id}>
              <Comment.Content>
                <Comment.Author>
                  {capitalize(comment.author)}
                </Comment.Author>
                <Comment.Metadata>
                  <div>lol</div>
                </Comment.Metadata>
                <Comment.Text>{comment.body}</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Edit</Comment.Action>
                  <Comment.Action>Delete</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          ))
          : (
            <div className="four-oh-four">
              There are no comments for this post.
            </div>
          )
        }
      </Comment.Group>
    )
  }
}

//Can use ownprops here for something
function mapStateToProps(state, ownProps) {
  return {
    loading: state.comments.loading,
    comments: state.comments.comments
  }
}

export default connect(mapStateToProps)(Comments);
