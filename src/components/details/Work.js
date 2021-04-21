import React from 'react'
import './work.scss'

const Work = ({ work }) => {
  return (
    <div>
      <h3>Work</h3>
      <div className="info-item">
        Occupation: <span className="attr">{work.occupation}</span>
      </div>
      <div className="info-item">
        Base: <span className="attr">{work.base}</span>
      </div>
    </div>
  )
}

export default Work
