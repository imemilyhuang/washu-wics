import React from 'react'
import './Hero.scss'
import HoverClipText from './HoverClipText';
import { Link } from 'react-router-dom';
import colors from '../../colors';

const Hero = () => {
  const data = [{imagePath:"lacrm.png", link: "https://www.lessannoyingcrm.com/"},{imagePath:"spectrum.png", link: "https://www.spectrum.com/"}]

  return (
    <div className='nav-pad container-dark-gradient'>
      <div className='hero-container padb2'>
        <div>
          <HoverClipText baseColor={colors.white} accentColor={colors.lightPink} text="Women in CS" />
          <HoverClipText baseColor={colors.lightPurple} accentColor={colors.lightPink} text="at WashU" />
          <div className='padb'></div>
          <h4 className='padb2 white-text'>Bolster. Support. Empower</h4>
          <Link to="/contact">
            <button className='call-to-action-button marginb3'>
              <p>Get connected</p>
            </button>
          </Link>

          <h5 className='padb'>This Year's Sponsors</h5>
          <div className='logo-container'>
          { data.map(image => 
                <a href={image.link} key={image.link}>
                  <img 
                    alt='sponsor'
                    src={process.env.PUBLIC_URL+"/assets/sponsors/"+image.imagePath}
                    className='sponsor-img'
                  />
                </a>
                )
              }
          </div>


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