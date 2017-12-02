//Actions to implement
//Add post
//Edit post
//Delete post
//Upvote post
//Downvote post
//Fetch all posts
//Fetch a post with details

export const ADD_POST = 'ADD_POST' //TODO: Create Acton
export const EDIT_POST = 'EDIT_POST' //TODO: Create Acton
export const DELETE_POST = 'DELETE_POST' //TODO: Create Acton
export const UPVOTE_POST = 'UPVOTE_POST' //TODO: Create Acton
export const DOWNVOTE_POST = 'DOWNVOTE_POST' //TODO: Create Acton
export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS' //TODO: Create Acton
export const FETCH_POST = 'FETCH_POST' //TODO: Create Acton

export function addPost ({id, post}) {
  //TODO: Generate uuid here
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
