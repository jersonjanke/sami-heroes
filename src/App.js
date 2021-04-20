import './App.scss'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { search, setSearch } from './store/actions/heroes.action'
import List from './components/List'

function App() {
  const dispatch = useDispatch()
  const heroes = useSelector((state) => state.heroes)
  return (
    <div>
      <input
        type="text"
        placeholder="Search your heroes"
        value={heroes.search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        onKeyPress={(e) =>
          e.key === 'Enter' ? dispatch(search(heroes.search)) : false
        }
      />
      <button onClick={(e) => dispatch(search(heroes.search))}>Search</button>
      <hr />
      <List />
    </div>
  )
}

export default App
