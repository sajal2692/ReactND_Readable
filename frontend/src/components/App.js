import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log('Props', this.props)
    return (
      <div>
        Hello World.
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(App);
