import React from 'react'

const Card = ({ hero }) => {
  return (
    <div class="card">
      <div>{hero.name}</div>
      <img alt={hero.name} src={hero.image.url} />
    </div>
  )
}

export default Card
