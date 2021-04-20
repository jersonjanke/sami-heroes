import { SEARCH_HEROES, SET_SEARCH } from '../actions/type.action'

const initialState = {
  search: 'spider-man',
  list: [],
}

const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      }
    case SEARCH_HEROES:
      return {
        ...state,
        list: action.payload,
      }
    default:
      return state
  }
}

export default heroesReducer
