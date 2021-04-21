import {
  SEARCH_HEROES,
  SET_SEARCH,
  SEARCH_PUBLISHER,
  SET_LOADER,
} from '../actions/type.action'

import searchHeroes from '../../api/api'

export const search = (name) => {
  const request = searchHeroes(name)
  return [
    setLoader(true),
    (dispatch) => {
      request
        .then((response) => {
          dispatch({ type: SEARCH_HEROES, payload: response.data.results })
        })
        .catch((error) => console.error(error))
    },
  ]
}

export const setSearch = (name) => {
  return {
    type: SET_SEARCH,
    payload: name,
  }
}

export const setPublisher = (publisher) => {
  return {
    type: SEARCH_PUBLISHER,
    payload: publisher,
  }
}

export const setLoader = (loader) => {
  return {
    type: SET_LOADER,
    payload: loader,
  }
}
