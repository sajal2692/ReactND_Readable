//Actions to implement
//Add post
//Edit post
//Delete post
//Upvote post
//Downvote post
//Fetch all posts
//Fetch a post with details
import * as API from '../utils/api'

export const ADD_POST = 'ADD_POST' //TODO: Create Acton
export const EDIT_POST = 'EDIT_POST' //TODO: Create Acton
export const DELETE_POST = 'DELETE_POST' //TODO: Create Acton
export const UPVOTE_POST = 'UPVOTE_POST' //TODO: Create Acton
export const DOWNVOTE_POST = 'DOWNVOTE_POST' //TODO: Create Acton
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS' //TODO: Create Acton
export const RECEIVE_POST = 'RECEIVE_POST' //TODO: Create Action

export function addPost ({id, post}) {
  return {
    type: ADD_POST,
    id,
    post, //the whole oject or maybe just the needed slice
  }
}

export function deletePost ({id}) {
  return {
    type: DELETE_POST,
    id,
  }
}

export function receiveAllPosts(posts) {
  return {
    type: RECEIVE_ALL_POSTS,
    posts,
  }
}

export const fetchAllPosts = () => dispatch => (
    API
      .getPosts()
      .then(posts => dispatch(receiveAllPosts(posts))));
