import {
  ADD_COMMENT,
  DELETE_COMMENT
} from '../actions/commentsAction'

const initialCommentsState = {}

function comments (state = initialCommentsState, action) {
  const { comment, id } = action

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
    default:
      return state
  }
}

export default comments
