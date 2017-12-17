import React, { Component } from 'react';
import { connect } from 'react-redux'
import { capitalize } from '../utils/helpers'
import { Comment, Header, Icon, Form, Button } from 'semantic-ui-react'
import { fetchCommentsByPost, loadingComments, fetchVoteComment } from '../actions/commentsAction'
import moment from 'moment'
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
        ) :(
          <div>
            {
              (comments && comments.length > 0)
              ? comments.map((comment) => (
                <Comment key={comment.id}>
                  <Comment.Content>
                    <Comment.Author as='span'>
                      {capitalize(comment.author)}
                    </Comment.Author>
                    <Comment.Metadata>
                      <div>{moment(comment.timestamp).format('MMMM Do YYYY, h:mm a')}</div>
                    </Comment.Metadata>
                    <Comment.Text>{comment.body}</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Edit</Comment.Action>
                      <Comment.Action>Delete</Comment.Action>
                      <Comment.Action as='span'>|</Comment.Action>
                      <Comment.Action as='span'>Score: {comment.voteScore}</Comment.Action>
                      <Comment.Action><Icon onClick={()=>this.props.dispatch(fetchVoteComment(comment.id, "upVote"))} link name='chevron up' /></Comment.Action>
                      <Comment.Action><Icon onClick={()=>this.props.dispatch(fetchVoteComment(comment.id, "downVote"))} link name='chevron down' /></Comment.Action>
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
            <div className="add-comment">
              <h4>Add a New Comment</h4>
              <Form>
                <Form.Input label='Author' placeholder='Your name' />
                <Form.TextArea label="Content" placeholder="Your comment.."/>
                <Button>Add Comment </Button>
              </Form>
            </div>
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
          ? Object.keys(state.comments.comments).map((comment) => state.comments.comments[comment])
          : {}
  }
}

export default connect(mapStateToProps)(Comments);
