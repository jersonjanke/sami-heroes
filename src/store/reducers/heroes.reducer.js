import {
  SEARCH_HEROES,
  SET_SEARCH,
  SEARCH_PUBLISHER,
  SET_LOADER,
} from '../actions/type.action'

const initialState = {
  search: '',
  publisher: '',
  isLoading: false,
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
        isLoading: false,
        list: action.payload,
      }
    case SET_LOADER:
      return {
        ...state,
        list: [],
        isLoading: action.payload,
      }
    default:
      return state
  }
}

export default heroesReducer
