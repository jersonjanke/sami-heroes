import React from 'react'
import './list.scss'
import { useSelector } from 'react-redux'
import { selectorPublisher } from './../store/selectors/heroes.selector'
import Card from './card/Card'

const List = () => {
  const filterList = useSelector(selectorPublisher)
  const heroes = useSelector((state) => state.heroes)
  return (
    <div className="list">
      {heroes.isLoading ? <div className="loader"></div> : null}
      {filterList ? (
        filterList.map((hero) => <Card key={hero.id} hero={hero} />)
      ) : (
        <span className="notFound">Not found hero!</span>
      )}
    </div>
  )
}

export default List
