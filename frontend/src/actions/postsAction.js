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
export const UPDATE_POST = 'UPDATE_POST'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'

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

export function updatePost(postId, post) {
  return {
    type: UPDATE_POST,
    id: postId,
    post,
  }
}

export const fetchVotePost = (postId, voteType) => dispatch => (
  API
    .votePost(postId, voteType)
    .then(post => {
      dispatch(updatePost(postId, post))
    })
);

export function receiveAllPosts(posts) {
  return {
    type: RECEIVE_ALL_POSTS,
    posts,
    loading: false,
  }
}

export const fetchAllPosts = () => dispatch => (
    API
      .getPosts()
      .then(posts => dispatch(receiveAllPosts(posts))));
