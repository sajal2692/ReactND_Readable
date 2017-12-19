import {
  DELETE_COMMENT,
  RECEIVE_COMMENTS_BY_POST,
  LOADING_COMMENTS,
  ADD_UPDATE_COMMENT
} from '../actions/commentsAction'

const initialCommentsState = {loading: true}

function comments (state = initialCommentsState, action) {
  const { loading, comment, comments, id } = action

  switch (action.type) {

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

    case ADD_UPDATE_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [id]: comment
        }
      }

    default:
      return state
  }
}

export default comments
