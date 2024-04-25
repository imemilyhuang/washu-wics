import React from 'react'
import './Hero.scss'
import HoverClipText from './HoverClipText';
import { Link } from 'react-router-dom';
import colors from '../../colors';

const Hero = () => {
  const data = [{imagePath:"lacrm-white.png", link: "https://www.lessannoyingcrm.com/"}, {imagePath:"spectrum-white.png", link: "https://www.spectrum.com/"}]

  return (
    <div className="flex-column-center padding-642 dark-gradient-container">
      <div className='heading-container padding-bottom-42'>
        <div className="title-container">
          <div className="title-text-control margin-bottom-1">
            <HoverClipText baseColor={colors.white} accentColor={colors.pink} text="Women in CS" />
            <div className="title-text-spacer">
              <HoverClipText baseColor={colors.lightPurple} accentColor={colors.pink} text="at WashU"/>
            </div>
          </div>
          <h4 className='padding-bottom-21 white-text'>Bolster. Support. Empower.</h4>
          <Link to="/events" className="button-spacer">
            <button className='call-to-action-button'>
              <h4>Get Involved</h4>
            </button>
          </Link>
        </div>

        <img 
          src={process.env.PUBLIC_URL+"/assets/home/group.png"}
          className='hero-image' alt='group of women'
        />
        
      </div>

        <h4 className="pink-text">— This Year's Sponsors —</h4>
        <div className='hero-sponsor-container'>
          { data.map(image => 
          <a href={image.link} key={image.link} target="_blank" rel="noopener noreferrer">
            <img
              alt='sponsor'
              src={process.env.PUBLIC_URL+"/assets/sponsors/"+image.imagePath}
              className="hero-sponsor-img"
            />
          </a>
          )
        }
        </div>
    </div>
  )
}

export default Hero