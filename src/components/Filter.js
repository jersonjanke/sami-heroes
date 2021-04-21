import React from 'react'
import './filter.scss'
import { setPublisher } from './../store/actions/heroes.action'
import { useDispatch, useSelector } from 'react-redux'
import { publishers } from './utils/publishers'

const Filter = () => {
  const dispatch = useDispatch()
  const heroes = useSelector((state) => state.heroes)
  return (
    <div className="filter">
      <label htmlFor="publisher">Publisher</label>
      <select
        name="publisher"
        id="publisher"
        disabled={heroes.search.length < 1}
        onChange={(e) => dispatch(setPublisher(e.target.value))}
      >
        <option value="">All</option>
        {publishers.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filter
