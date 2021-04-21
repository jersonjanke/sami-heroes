import React from 'react'
import './filter.scss'
import { setPublisher } from './../store/actions/heroes.action'
import { useDispatch } from 'react-redux'
import { publishers } from './utils/publishers'

const Filter = () => {
  const dispatch = useDispatch()

  return (
    <div className="filter">
      <label htmlFor="publisher">Publisher</label>
      <select
        name="publisher "
        id="publisher "
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
