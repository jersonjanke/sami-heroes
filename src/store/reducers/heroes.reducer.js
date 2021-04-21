import {
  SEARCH_HEROES,
  SET_SEARCH,
  SEARCH_PUBLISHER,
} from '../actions/type.action'

const initialState = {
  search: '',
  publisher: '',
  list: [],
}

const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      }
    case SEARCH_PUBLISHER:
      return {
        ...state,
        publisher: action.payload,
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
