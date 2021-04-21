import React, { useRef } from 'react'
import '../assets/styles/card.scss'
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
          <div>
            <Power power={hero.powerstats} />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Card
