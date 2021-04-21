import React, { useRef } from 'react'
import '../assets/styles/card.scss'
import Appearance from './Appearance'
import Biography from './Biography'
import Connections from './Connections'
import Modal from './Modal'
import Power from './Power'
import Work from './Work'

const Card = ({ hero }) => {
  const modal = useRef(null)

  return (
    <div className="card" onClick={() => modal.current.open()}>
      <div>{hero.name}</div>
      <img alt={hero.name} src={hero.image.url} />
      <Modal ref={modal}>
        <div className="name">{hero.name}</div>
        <div className="power">
          <div className="card-info">
            <img alt={hero.name} className="profile" src={hero.image.url} />
            <Biography biography={hero.biography} />
            <Power power={hero.powerstats} />
          </div>
          <div className="card-info">
            <Appearance appearance={hero.appearance} />
            <Work work={hero.work} />
          </div>
          <div className="card-info">
            <Connections connections={hero.connections} />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Card
