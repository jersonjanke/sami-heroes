import React from 'react'
import './search.scss'
import { useSelector, useDispatch } from 'react-redux'
import { search, setSearch } from '../store/actions/heroes.action'
import Filter from './Filter'

const Search = () => {
  const dispatch = useDispatch()
  const heroes = useSelector((state) => state.heroes)
  return (
    <div className="search">
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
      </div>
      <Filter />
    </div>
  )
}

export default Search
