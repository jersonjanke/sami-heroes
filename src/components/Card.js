import React, { useRef } from 'react'
import '../assets/styles/card.scss'
import Appearance from './Appearance'
import Biography from './Biography'
import Modal from './Modal'
import Power from './Power'

const Card = ({ hero }) => {
  const modal = useRef(null)

  return (
    <div className="card" onClick={() => modal.current.open()}>
      <div>{hero.name}</div>
      <img alt={hero.name} src={hero.image.url} />
      <Modal ref={modal}>
        <div>{hero.name}</div>
        <div className="power">
          <hr />
          <div className="card-info">
            <img alt={hero.name} className="profile" src={hero.image.url} />
            <Biography biography={hero.biography} />
            <Power power={hero.powerstats} />
          </div>
          <hr />
          <div className="card-info">
            <Appearance appearance={hero.appearance} />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Card
