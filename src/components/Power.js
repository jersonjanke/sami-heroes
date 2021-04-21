import React from 'react'
import './../assets/styles/power.scss'

const Power = ({ power }) => {
  return (
    <div>
      <div className="power-item">
        <div className="title">Intelligence ({power.intelligence})</div>
        <div className="line" style={{ width: `${power.intelligence}%` }}></div>
      </div>

      <div className="power-item">
        <div className="title">Strength ({power.strength})</div>
        <div className="line" style={{ width: `${power.strength}%` }}></div>
      </div>

      <div className="power-item">
        <div className="title">Speed ({power.speed})</div>
        <div className="line" style={{ width: `${power.speed}%` }}></div>
      </div>

      <div className="power-item">
        <div className="title">Durability ({power.durability})</div>
        <div className="line" style={{ width: `${power.durability}%` }}></div>
      </div>

      <div className="power-item">
        <div className="title">Power ({power.power})</div>
        <div className="line" style={{ width: `${power.power}%` }}></div>
      </div>

      <div className="power-item">
        <div className="title">Combat ({power.combat})</div>
        <div className="line" style={{ width: `${power.combat}%` }}></div>
      </div>
    </div>
  )
}

export default Power
