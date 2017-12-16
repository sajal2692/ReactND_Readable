import React, { Component } from 'react';
import { Statistic, Icon } from 'semantic-ui-react'

import '../styles/VoteScore.css'


class VoteScore extends Component {

  render() {
    const { score } = this.props

    return (
      <div className='vote-score-container'>
        <Statistic size='mini'>
          <Statistic.Label>Score</Statistic.Label>
          <Statistic.Value>{score}</Statistic.Value>
        </Statistic>
        <div className="voting-buttons">
          <Icon size="large" onClick={()=>console.log("Pressed up!")} link name='chevron up' />
          <Icon size='large' onClick={()=>console.log("Pressed dow")} link name='chevron down' />
        </div>
      </div>
    )
  }

}

export default VoteScore;
