import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux'
import { fetchAllPosts } from '../actions/postsAction'
import { fetchCategories } from '../actions/categoriesAction'
import * as API from '../utils/api'



class App extends Component {

  //TODO: Below mounting calls will be moved to their appropriate places later
  componentWillMount() {
    this.props.dispatch(fetchAllPosts())
    this.props.dispatch(fetchCategories())
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

//Can use ownprops here for something
function mapStateToProps(state) {
  return {
    posts: state.posts,
    categories: state.categoris
  }
}

export default connect(mapStateToProps)(App);
