import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { PageHeader } from 'react-bootstrap'
import Navigation from './Navigation'
import { capitalize } from '../utils/helpers'
import { Icon, Statistic, Grid, Form, Button } from 'semantic-ui-react'
import { fetchEditPost, loadingPosts, fetchVotePost, fetchDeletePost } from '../actions/postsAction'

import Comments from './Comments'

import '../styles/Post.css'

class Post extends Component {

  state = {
    editing_post: this.props.location.state ? this.props.location.state.editing_post: false,
    edit_post_id: this.props.location.state ? this.props.location.state.editing_post_id: '',
    edit_post_title: this.props.location.state ? this.props.location.state.editing_post_title: '',
    edit_post_body: this.props.location.state ? this.props.location.state.editing_post_body: ''
  }

  handleEditingState = (id, title, body) => {
    this.setState({
      editing_post: true,
      edit_post_id: id,
      edit_post_title: title,
      edit_post_body: body
    })
  }

  handleEditCancel = () => {
    this.setState({editing_post: false, edit_post_id: '', edit_post_title: '', edit_post_body: ''})
  }

  handleChange = (e, { name, value }) => this.setState({[name]: value});

  handleEdit = (postId) => {
    const {edit_post_id, edit_post_body, edit_post_title} = this.state

    let post = {
      id: edit_post_id,
      title: edit_post_title,
      body: edit_post_body
    }

    this.props.dispatch(fetchEditPost(post));

    this.setState({editing_post: false, edit_post_id: '', edit_post_title: '', edit_post_body: ''})
  }


  handleDelete = (id) => {
    this.props.dispatch(loadingPosts(true));
    this.props.dispatch(fetchDeletePost(id));
    this.props.history.push('/')
  }

  render() {
    const { post, loading  } = this.props
    const {editing_post, edit_post_body, edit_post_title} = this.state

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
                        <Icon size='large' onClick={() => {
                            this.props.dispatch(fetchVotePost(post.id, "downVote"));
                            console.log('yeyah')
                            this.props.history.push('/')}
                          }
                            link name='chevron down' />

                      </div>
                    </Grid.Column>
                    <Grid.Column>
                      <div className="edit-delete-container">
                        <Icon size="large" onClick={()=> this.handleEditingState(post.id, post.title, post.body)} link name="edit"/>
                        <Icon size="large" onClick={()=> this.handleDelete(post.id)} link name="trash outline"/>
                      </div>
                    </Grid.Column>
                  </Grid>
                </div>
                <PageHeader className="post-header">
                  {editing_post
                    ? ("Edit Post")
                    : (post.title)
                  }
                  <small> by {capitalize(post.author)}</small>
                </PageHeader>
                {editing_post
                  ? (
                    <Form onSubmit={this.handleEdit}>
                      <Form.Input required label="Title" name='edit_post_title' value={edit_post_title} onChange={this.handleChange}/>
                      <Form.TextArea rows={10} required label="Body" name='edit_post_body' value={edit_post_body} onChange={this.handleChange}/>
                      <Button>Update</Button>
                      <a className="cancel-edit" onClick={()=>this.handleEditCancel()}>Cancel</a>
                    </Form>
                  )
                  : (
                    <div>
                      <div className="post-body">
                        {post.body}
                      </div>
                      <div className="post-comments">
                        <Comments parentNos={post.commentCount} parentid={post.id}/>
                      </div>
                    </div>
                  )
                }
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
