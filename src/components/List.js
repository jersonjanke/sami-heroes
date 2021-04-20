import React from 'react'
import './../assets/styles/list.scss'
import { useSelector } from 'react-redux'
import Card from './Card'

const List = () => {
  const { list } = useSelector((state) => state.heroes)
  return (
    <div className="list">
      {list
        ? list.map((hero) => <Card key={hero.id} hero={hero} />)
        : 'Not found hero!'}
    </div>
  )
}

export default List
