//Actions to implement
//Add post
//Edit post
//Delete post
//Upvote post
//Downvote post
//Fetch all posts
//Fetch a post with details
import * as API from '../utils/api'

export const LOADING_POSTS = 'LOADING_POSTS'
export const EDIT_POST = 'EDIT_POST' //TODO: Create Acton
export const DELETE_POST = 'DELETE_POST' //TODO: Create Acton
export const ADD_UPDATE_POST = 'ADD_UPDATE_POST'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'

export function addPost (post) {
  return {
    type: ADD_UPDATE_POST,
    id: post.id,
    post,
  }
}

export const fetchAddPost = (post) => dispatch => (
  API
    .addNewPost(post)
    .then(post => {
      dispatch(addPost(post))
    })
)

export function loadingPosts(loading) {
  return {
    type: LOADING_POSTS,
    loading,
  }
}

export function deletePost (id, post) {
  return {
    type: ADD_UPDATE_POST,
    id: post.id,
    post,
  }
}

export const fetchDeletePost = (postId) => dispatch => (
  API
    .deletePost(postId)
    .then(post => {
      dispatch(deletePost(post.id, post))
      dispatch(loadingPosts(false))
    })
)

export function updatePost(postId, post) {
  return {
    type: ADD_UPDATE_POST,
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


export const fetchEditPost = (post) => dispatch => (
  API
    .editPost(post)
    .then(post => {
      dispatch(updatePost(post.id, post))
    })
)
