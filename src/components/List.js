import React from 'react'
import './list.scss'
import { useSelector } from 'react-redux'
import { selectorPublisher } from './../store/selectors/heroes.selector'
import Card from './card/Card'

const List = () => {
  const filterList = useSelector(selectorPublisher)
  const heroes = useSelector((state) => state.heroes)

  console.log(heroes.isLoading)

  return (
    <div className="list">
      {heroes.isLoading ? <div className="loader"></div> : null}
      {filterList
        ? filterList.map((hero) => <Card key={hero.id} hero={hero} />)
        : 'Not found hero!'}
    </div>
  )
}

export default List
