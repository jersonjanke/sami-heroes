import React from 'react'
import './../assets/styles/power.scss'

const Power = ({ power }) => {
  return (
    <div className="power">
      <h3>Power</h3>
      <div className="power-item">
        <div className="title">
          Intelligence ({+power.intelligence ? power.intelligence : 0})
        </div>
        <div
          className="line intelligence"
          style={{
            width: `${+power.intelligence ? power.intelligence : 0}%`,
          }}
        ></div>
      </div>

      <div className="power-item">
        <div className="title">
          Strength ({+power.strength ? power.strength : 0})
        </div>
        <div
          className="line strength"
          style={{
            width: `${+power.strength ? power.strength : 0}%`,
          }}
        ></div>
      </div>

      <div className="power-item">
        <div className="title">Speed ({+power.speed ? power.speed : 0})</div>
        <div
          className="line speed"
          style={{ width: `${+power.speed ? power.speed : 0}%` }}
        ></div>
      </div>

      <div className="power-item">
        <div className="title">
          Durability ({+power.durability ? power.durability : 0})
        </div>
        <div
          className="line durability"
          style={{
            width: `${+power.durability ? power.durability : 0}%`,
          }}
        ></div>
      </div>

      <div className="power-item">
        <div className="title">Power ({+power.power ? power.power : 0})</div>
        <div
          className="line power"
          style={{ width: `${+power.power ? power.power : 0}%` }}
        ></div>
      </div>

      <div className="power-item">
        <div className="title">Combat ({+power.combat ? power.combat : 0})</div>
        <div
          className="line combat"
          style={{ width: `${+power.combat ? power.combat : 0}%` }}
        ></div>
      </div>
    </div>
  )
}

export default Power
