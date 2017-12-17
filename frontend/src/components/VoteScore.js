import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Statistic, Icon } from 'semantic-ui-react'
import { fetchVotePost } from '../actions/postsAction'

import '../styles/VoteScore.css'


class VoteScore extends Component {

  render() {
    const { score, postId } = this.props

    return (
      <div className='vote-score-container'>
        <Statistic size='mini'>
          <Statistic.Label>Score</Statistic.Label>
          <Statistic.Value>{score}</Statistic.Value>
        </Statistic>
        <div className="voting-buttons">
          <Icon size="large" onClick={()=>this.props.dispatch(fetchVotePost(postId, "upVote"))} link name='chevron up' />
          <Icon size='large' onClick={()=>this.props.dispatch(fetchVotePost(postId, "downVote"))} link name='chevron down' />
        </div>
      </div>
    )
  }

}

export default connect()(VoteScore);
