import React from 'react'
import './filter.scss'

const Filter = () => {
  return (
    <div className="filter">
      <select name="cars" id="cars">
        <option value="Marvel Comics">Marvel Comics</option>
        <option value="Dark Horse Comics">Dark Horse Comics</option>
        <option value="mercedes">DC Comics</option>
        <option value="audi">NBC - Heroes</option>
      </select>
    </div>
  )
}

export default Filter
