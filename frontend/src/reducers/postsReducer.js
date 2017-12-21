import {
  DELETE_POST,
  RECEIVE_ALL_POSTS,
  ADD_UPDATE_POST
} from '../actions/postsAction'

const initialPostsState = {loading: true}

function posts (state = initialPostsState, action) {
  const { id, post, posts, loading} = action

  switch (action.type) {

    // case DELETE_POST:
    //   return {
    //       ...state,
    //       posts: {
    //         ...state.posts,
    //         [id]: null
    //       }
    //     }

    case RECEIVE_ALL_POSTS:
      return {
        ...state,
        posts,
        loading,
      }

      case ADD_UPDATE_POST:
        return {
          ...state,
          posts: {
            ...state.posts,
            [id]: post
          }
        }

    default:
      return state
  }
}

export default posts
