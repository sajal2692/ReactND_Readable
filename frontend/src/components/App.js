import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux'

import * as API from '../utils/api'

class App extends Component {

  componentWillMount() {
    API.getCategories().then((categories) => {
      console.log(categories)
    })
  }

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
