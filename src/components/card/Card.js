import React, { useRef } from 'react'
import './card.scss'
import Appearance from '../details/Appearance'
import Biography from '../details/Biography'
import Connections from '../details/Connections'
import Modal from '../utils/Modal'
import Power from '../details/Power'
import Work from '../details/Work'

const Card = ({ hero }) => {
  const modal = useRef(null)

  return (
    <div className="card" onClick={() => modal.current.open()}>
      <div>{hero.name}</div>
      <div className="publisher">{hero.biography.publisher}</div>
      <img alt={hero.name} src={hero.image.url} />
      <Modal ref={modal}>
        <div className="name">{hero.name}</div>
        <div className="power">
          <div className="card-info">
            <img alt={hero.name} className="profile" src={hero.image.url} />
            <Biography biography={hero.biography} />
            <Power power={hero.powerstats} />
          </div>
          <div>
            <Appearance appearance={hero.appearance} />
            <Work work={hero.work} />
            <Connections connections={hero.connections} />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Card
