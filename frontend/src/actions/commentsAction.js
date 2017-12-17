//Actions to implement
//Add comment
//Edit comment
//Delete comment
//Upvote comment
//Downvote comment
//Fetch All comments (for a COMMENT)

import * as API from '../utils/api'

export const ADD_COMMENT = 'ADD_COMMENT' //TODO: Create action
export const EDIT_COMMENT = 'EDIT_COMMENT' //TODO: Create action
export const DELETE_COMMENT = 'DELETE_COMMENT' //TODO: Create action
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const RECEIVE_COMMENTS_BY_POST = 'RECEIVE_COMMENTS'
export const LOADING_COMMENTS = 'LOADING_COMMENTS'


export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS_BY_POST,
    comments,
    loading: false,
  }
}

export function loadingComments() {
  return {
    type: LOADING_COMMENTS,
    loading: true
  }
}

export const fetchCommentsByPost = (postId) => dispatch => (
  API.
    getCommentsByPost(postId)
    .then(comments => dispatch(receiveComments(comments)))
  );

  export function updateComment(commentId, comment) {
    return {
      type: UPDATE_COMMENT,
      id: commentId,
      comment,
    }
  }

  export const fetchVoteComment = (commentId, voteType) => dispatch => (
    API
      .voteComment(commentId, voteType)
      .then(comment => {
        dispatch(updateComment(commentId, comment))
      })
  );
