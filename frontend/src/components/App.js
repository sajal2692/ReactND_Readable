import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAllPosts } from '../actions/postsAction'
import { fetchCategories } from '../actions/categoriesAction'

import Posts from './Posts'
import Post from './Post'
import AddPost from './AddPost'

import '../styles/App.css'

class App extends Component {

  //TODO: Below mounting calls will be moved to their appropriate places later
  componentWillMount() {
    this.props.dispatch(fetchAllPosts())
    this.props.dispatch(fetchCategories())
  }

  render() {
    return (
      //TODO: Add Routes for necessary pages.
      //For the above two routes, the same component might be rendered,
      //with different properties. so the api call can be on the post-list component mount?
      //TODO: /:category/:postid/edit route

      <div>
        <Switch>
          <Route path={"/newpost"} component={AddPost}/>
          <Route path={"/:category/:postid"} component={Post}/>
          <Route path={"/:category"} component={Posts}/>
          <Route exact path='/' component={Posts}/>
        </Switch>
      </div>
    );
  }
}

// //Can use ownprops here for something
// function mapStateToProps(state) {
//   return {
//     posts: state.posts,
//     categories: state.categories
//   }
// }

export default withRouter(connect()(App));
