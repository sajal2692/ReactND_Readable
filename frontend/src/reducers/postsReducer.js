import {
  ADD_POST,
  DELETE_POST,
  RECEIVE_ALL_POSTS
} from '../actions/postsAction'

const initialPostsState = {loading: true}

function posts (state = initialPostsState, action) {
  const { id, post, posts, loading} = action

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

    case RECEIVE_ALL_POSTS:
      return {
        ...state,
        posts,
        loading,
      }

    default:
      return state
  }
}

export default posts
