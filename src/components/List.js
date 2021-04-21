import React from 'react'
import './list.scss'
import { useSelector } from 'react-redux'
import { selectorPublisher } from './../store/selectors/heroes.selector'
import Card from './card/Card'

const List = () => {
  const filterList = useSelector(selectorPublisher)
  return (
    <div className="list">
      {filterList
        ? filterList.map((hero) => <Card key={hero.id} hero={hero} />)
        : 'Not found hero!'}
    </div>
  )
}

export default List
