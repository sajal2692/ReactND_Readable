import React, { Component } from 'react';
import { connect } from 'react-redux'
import { capitalize } from '../utils/helpers'
import { Comment, Header, Icon, Form, Button } from 'semantic-ui-react'
import { fetchEditComment, fetchCommentsByPost, loadingComments, fetchVoteComment, fetchAddComment, fetchDeleteComment } from '../actions/commentsAction'
import moment from 'moment'

import * as uuid4 from 'uuid/v4'

import '../styles/Comments.css'

class Comments extends Component {

  state = {
    edit_comment_id: '',
    edit_comment_body: '',
    add_comment_author: '',
    add_comment_body: ''
  }

  handleEditingState = (id, body) => {
    this.setState({
      edit_comment_id: id,
      edit_comment_body: body
    })
  }

  handleEdit = () => {
    const {edit_comment_id, edit_comment_body} = this.state

    let comment = {
      id: edit_comment_id,
      timestamp: Date.now(),
      body: edit_comment_body
    }

    this.props.dispatch(fetchEditComment(comment));

    this.setState({edit_comment_id: '', edit_comment_body: ''})
  }

  handleEditCancel = () => {
    this.setState({edit_comment_id: '', edit_comment_body: ''})
  }

  componentDidMount() {
    this.props.dispatch(loadingComments());
    this.props.dispatch(fetchCommentsByPost(this.props.parentid));
  }

  handleDelete = (id) => {
    this.props.dispatch(fetchDeleteComment(id));
  }

  handleChange = (e, { name, value }) => this.setState({[name]: value});

  handleSubmit = () => {
    const { add_comment_author, add_comment_body } = this.state

    let comment = {
      id: uuid4(),
      timestamp: Date.now(),
      body: add_comment_body,
      author: add_comment_author,
      parentId: this.props.parentid
    }

    this.props.dispatch(fetchAddComment(comment));

    this.setState({add_comment_author: '', add_comment_body: ''})

  }

  render() {
    const { loading, comments } = this.props
    const {add_comment_body, add_comment_author, edit_comment_id, edit_comment_body} = this.state

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
                    <div>
                      {edit_comment_id === comment.id
                        ? (
                          <div>
                            <Form onSubmit={this.handleEdit} className="edit-comment">
                              <Form.TextArea required name='edit_comment_body' value={edit_comment_body} onChange={this.handleChange} />
                              <Button>Update</Button>
                              <a className="cancel-edit" onClick={()=>this.handleEditCancel()}>Cancel</a>
                            </Form>
                          </div>
                        )
                        : (<Comment.Text>{comment.body}</Comment.Text>)
                      }
                    </div>
                    <Comment.Actions>
                      {!(edit_comment_id === comment.id) && (<Comment.Action onClick={() => this.handleEditingState(comment.id, comment.body)}>Edit</Comment.Action>)}
                      <Comment.Action onClick={() => this.handleDelete(comment.id)}>Delete</Comment.Action>
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
              <Form onSubmit={this.handleSubmit}>
                <Form.Input required label='Author' name='add_comment_author' value={add_comment_author} onChange={this.handleChange} placeholder='Your name' />
                <Form.TextArea required label="Body" name='add_comment_body' value={add_comment_body} onChange={this.handleChange} placeholder="Your comment.."/>
                <Form.Button>Add Comment</Form.Button>
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
          ? Object.keys(state.comments.comments).map((comment) => state.comments.comments[comment]).filter((comment)=>comment.deleted==false)
          : {}
  }
}

export default connect(mapStateToProps)(Comments);
