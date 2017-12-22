import {
  RECEIVE_ALL_POSTS,
  ADD_UPDATE_POST,
  LOADING_POSTS,
  UPDATE_COMMENT_COUNT
} from '../actions/postsAction'

const initialPostsState = {loading: true}

function posts (state = initialPostsState, action) {
  const { id, post, posts, loading, commentCountChange } = action

  switch (action.type) {

    // case DELETE_POST:
    //   return {
    //       ...state,
    //       posts: {
    //         ...state.posts,
    //         [id]: null
    //       }
    //     }

    case UPDATE_COMMENT_COUNT:

      return {
        ...state,
        posts: {
          ...state.posts,
          [id]: {
            ...state.posts[id],
            commentCount: state.posts[id].commentCount + commentCountChange
          }
        }
      }

    case LOADING_POSTS:
      return {
        ...state,
        loading,
      }

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
