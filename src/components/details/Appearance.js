import React from 'react'
import './appearance.scss'

const Appearance = ({ appearance }) => {
  return (
    <div>
      <h3>appearance</h3>
      <div>
        <div className="info-item">
          Gender: <span className="attr">{appearance.gender}</span>
        </div>
        <div className="info-item">
          Race: <span className="attr">{appearance.race}</span>
        </div>
        <div className="info-item">
          Height: <span className="attr">{appearance.height[1]}</span>
        </div>
        <div className="info-item">
          Weight: <span className="attr">{appearance.weight[1]}</span>
        </div>
        <div className="info-item">
          Eye color: <span className="attr">{appearance['eye-color']}</span>
        </div>
        <div className="info-item">
          Hair-color: <span className="attr">{appearance['hair-color']}</span>
        </div>
      </div>
    </div>
  )
}

export default Appearance
