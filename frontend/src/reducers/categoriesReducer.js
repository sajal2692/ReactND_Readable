import {
  RECEIVE_CATEGORIES
} from '../actions/categoriesAction'

const initialCategoriesState = {}

function categories (state = initialCategoriesState, action) {
  const { categories } = action

  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return categories
    default:
      return state
  }
}

export default categories
