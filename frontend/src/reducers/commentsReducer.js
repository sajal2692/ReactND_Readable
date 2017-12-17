import {
  ADD_COMMENT,
  DELETE_COMMENT,
  RECEIVE_COMMENTS_BY_POST,
  LOADING_COMMENTS
} from '../actions/commentsAction'

const initialCommentsState = {loading: true}

function comments (state = initialCommentsState, action) {
  const { loading, comment, comments, id } = action

  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [id]: comment //assuming whole object, not yet decided on what to pass through the action
      }

    case DELETE_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          deleted: true
        }
      }

    case RECEIVE_COMMENTS_BY_POST:
    return {
      ...state,
      comments,
      loading,
    }

    case LOADING_COMMENTS:
      return {
        ...state,
        loading,
      }

    default:
      return state
  }
}

export default comments
