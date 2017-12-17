//Actions to implement
//Activate category
//Deactivate category
//Get Active category

import * as API from '../utils/api'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
//Below can probably be done in component states, have to see
export const ACTIVATE_CATEGORY = 'ACTIVATE_CATEGORY' //TODO: create action
export const DEACTIVATE_CATEGORY = 'DEACTIVATE_CATEGORY' //TODO: create action
export const GET_ACTIVE_CATEGORY = 'GET_ACTIVE_CATEGORY' //TODO: create action

function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  }
}

export const fetchCategories = () => dispatch => (
    API
      .getCategories()
      .then(categories => dispatch(receiveCategories(categories))));
