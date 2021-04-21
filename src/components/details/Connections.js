import React from 'react'
import './connections.scss'

const Connections = ({ connections }) => {
  return (
    <div>
      <h3>Connections</h3>
      <div className="info-item">
        Group affiliation:
        <span className="attr">{connections['group-affiliation']}</span>
      </div>
      <div className="info-item">
        Relatives: <span className="attr">{connections.relatives}</span>
      </div>
    </div>
  )
}

export default Connections
