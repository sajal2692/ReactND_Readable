import posts from './postsReducer'
import comments from './commentsReducer'
import categories from './categoriesReducer'

import {combineReducers} from 'redux'

export default combineReducers({
  posts,
  comments,
  categories,
})
