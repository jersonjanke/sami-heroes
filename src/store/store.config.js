import { combineReducers } from 'redux'
import heroesReducer from './reducers/heroes.reducer'

const rootReducer = combineReducers({
  heroes: heroesReducer
})

export default rootReducer
