// import {
//   ADD_COMMENT,
//   DELETE_COMMENT
// } from '../actions/commentsAction'

const initialCategoriesState = {}

function categories (state = initialCategoriesState, action) {
  const { category, active } = action

  switch (action.type) {
    default:
      return state
  }
}

export default categories
