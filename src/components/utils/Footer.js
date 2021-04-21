import React from 'react'
import './footer.scss'
import { GitHub, Linkedin } from 'react-feather'

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://superheroapi.com/" target="_blank" rel="noreferrer">
          SuperHero API
        </a>
      </div>
      <div className="social">
        <a
          href="https://www.linkedin.com/in/jerson-janke/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/jersonjanke"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub />
        </a>
      </div>
    </footer>
  )
}

export default Footer
