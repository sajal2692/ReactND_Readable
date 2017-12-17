import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Item, Icon } from 'semantic-ui-react'

import VoteScore from './VoteScore'

class PostPreview extends Component {


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
            <Item.Meta>{post.author}</Item.Meta>
            <Item.Extra>{post.commentCount} Comments</Item.Extra>
          </Item.Content>
        </Item>
    )
  }

}

export default PostPreview;
