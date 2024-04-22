import React from 'react'
import './Hero.scss'
import HoverClipText from './HoverClipText';
import { Link } from 'react-router-dom';
import colors from '../../colors';

const Hero = () => {
  const data = [{imagePath:"lacrm-white.png", link: "https://www.lessannoyingcrm.com/"},{imagePath:"spectrum-white.png", link: "https://www.spectrum.com/"}]

  return (
    <div className='padding642 container-dark-gradient'>
      <div className='hero-container padb4'>
        <div className="column-align-container">
          <div className="marginb column-align-container">
            <HoverClipText baseColor={colors.white} accentColor={colors.pink} text="Women in CS" />
            <HoverClipText baseColor={colors.lightPurple} accentColor={colors.pink} text="at WashU" />
          </div>
          <h4 className='padb4 white-text'>Bolster. Support. Empower.</h4>
          <Link to="/events">
            <button className='call-to-action-button'>
              <h4>Get Involved</h4>
            </button>
          </Link>
        </div>

        <img 
          src={process.env.PUBLIC_URL+"/assets/home/group.png"}
          className='hero-logo' alt='group of women'
        />
        
      </div>

        <h4 className='padb white-text'>This Year's Sponsors</h4>
        <div className='logo-container justify-flex-start'>
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
  )
}

export default Hero