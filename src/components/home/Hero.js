import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <div className='container-peach'>
      <div className='hero-container'>
        <div>
          <h1 className=''>Women in CS</h1>
          <h1 className='padb2 purple-text'>at WashU</h1>
          <h2 className='padb'>Bolster. Support. Empower.</h2>
          <button className='call-to-action-button'>
            <p>Get connected</p>
          </button>
        </div>
        <img 
          src={process.env.PUBLIC_URL+"/logo.png"}
          className='hero-logo' alt='logo'
        />
      </div>
    </div>
  )
}

export default Hero