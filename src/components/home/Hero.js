import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <div className='container-peach'>
      <div className='hero-container'>
        <div>
          <h1 className='padb'>Women in CS at WashU</h1>
          <p className='padb2'>Bolster. Support. Empower.</p>
          <button className='call-to-action-button'>
            <p>Get connected</p>
          </button>
        </div>
        <div className='placeholder'></div>
      </div>
    </div>
  )
}

export default Hero