import {
  ADD_POST,
  DELETE_POST
} from '../actions/postsAction'

const initialPostsState = {}

function posts (state = initialPostsState, action) {
  const { post, id } = action

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        [id]: post //assuming whole object, not yet decided on what to pass through the action
      }

    case DELETE_POST:
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

export default posts
