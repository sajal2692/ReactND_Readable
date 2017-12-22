import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Item, Label } from 'semantic-ui-react'
import moment from 'moment'
import { fetchDeletePost } from '../actions/postsAction'
import { connect } from 'react-redux'
import VoteScore from './VoteScore'

import '../styles/PostPreview.css'

class PostPreview extends Component {


  handleDelete = (id) => {
    this.props.dispatch(fetchDeletePost(id));
  }

  render() {

    const { post } = this.props
    return (
        <Item>
          <VoteScore postId={post.id} score={post.voteScore}/>
          <Item.Content>
            <Item.Header>
              <Link className="post-preview-title" to={`/${post.category}/${post.id}`}>
                {post.title}
              </Link>
            </Item.Header>
            <Item.Meta>{post.author} on {moment(post.timestamp).format('MMMM Do YYYY')}</Item.Meta>
            <Item.Extra>{post.commentCount} {post.commentCount === 1 ? (<span>Comment</span>): (<span>Comments</span>)}</Item.Extra>
            <Item.Extra>
              <Link to={{ pathname: `/${post.category}/${post.id}`,
                state: {
                  editing_post: true,
                  editing_post_id: post.id,
                  editing_post_title: post.title,
                  editing_post_body: post.body
                }}}>
                <Label className="pp-edit-post">Edit</Label>
              </Link>
              <Label className="pp-delete-post" onClick={()=>{this.handleDelete(post.id)}}>Delete</Label>
              </Item.Extra>
          </Item.Content>
        </Item>
    )
  }

}

export default connect()(PostPreview);
