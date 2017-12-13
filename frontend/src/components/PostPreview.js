import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Item, Statistic, Icon } from 'semantic-ui-react'

// import Navbar from './Navbar'

class PostPreview extends Component {


  render() {

    const { post } = this.props
    return (
        <Item>
          <div className='vote-score-container'>
            <Statistic size='mini'>
              <Statistic.Label>Score</Statistic.Label>
              <Statistic.Value>{post.voteScore}</Statistic.Value>
            </Statistic>
            <div className="voting-buttons">
              <Icon size="large" onClick={()=>console.log("Pressed up!")} link name='chevron up' />
              <Icon size='large' onClick={()=>console.log("Pressed down!")} link name='chevron down' />
            </div>
          </div>
          <Item.Content>
            <Item.Header as='a'>{post.title}</Item.Header>
            <Item.Meta>{post.author}</Item.Meta>
            <Item.Extra>{post.commentCount} Comments</Item.Extra>
          </Item.Content>
        </Item>
    )
  }

}

export default PostPreview;
