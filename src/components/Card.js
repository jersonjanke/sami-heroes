import React, { useRef } from 'react'
import '../assets/styles/card.scss'
import Modal from './Modal'

const Card = ({ hero }) => {
  const modal = useRef(null)

  return (
    <div className="card" onClick={() => modal.current.open()}>
      <div>{hero.name}</div>
      <img alt={hero.name} src={hero.image.url} />
      <Modal ref={modal}>
        <div>{hero.name}</div>
      </Modal>
    </div>
  )
}

export default Card
