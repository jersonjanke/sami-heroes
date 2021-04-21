import React from 'react'
import '../assets/styles/biography.scss'

const Biography = ({ biography }) => {
  return (
    <div>
      <div>
        <h3>Biography</h3>
        <div className="info-item">
          Full-name:<span className="attr">{biography['full-name']}</span>
        </div>
      </div>
      <div className="info-item">
        Alter Egos: <span className="attr">{biography['alter-egos']}</span>
      </div>
      <div className="info-item">
        Place of Birth:{' '}
        <span className="attr">{biography['place-of-birth']}</span>
      </div>
      <div className="info-item">
        First Appearance:{' '}
        <span className="attr">{biography['first-appearance']}</span>
      </div>
      <div className="info-item">
        Publisher: <span className="attr">{biography.publisher}</span>
      </div>
      <div className="info-item">
        Alignment: <span className="attr">{biography.alignment}</span>
      </div>
      <div className="info-item">
        <div>Aliases</div>
        {biography.aliases.map((aliases) => (
          <li key={aliases} className="attr">
            {aliases}
          </li>
        ))}
      </div>
    </div>
  )
}

export default Biography
