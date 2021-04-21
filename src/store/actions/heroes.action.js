import axios from 'axios'
import {
  SEARCH_HEROES,
  SET_SEARCH,
  SEARCH_PUBLISHER,
} from '../actions/type.action'
const URL_BASE = 'https://www.superheroapi.com/api.php/1553314874865944'

export const search = (name) => {
  const request = axios.get(`${URL_BASE}/search/${name}`)
  return (dispatch) => {
    request
      .then((response) => {
        dispatch({ type: SEARCH_HEROES, payload: response.data.results })
      })
      .catch((error) => console.error(error))
  }
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
