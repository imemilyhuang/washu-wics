import React from 'react'
import "./Sponsor.scss"

const Sponsors = () => {
  const data = [{imagePath:"lacrm.jpg", link: "https://www.lessannoyingcrm.com/"},{imagePath:"spectrum.jpg", link: "https://www.spectrum.com/"}]

  return (
    <div className='container-white'>
      <div className='mission-container'>
        <h1 className='padb'>wics sponsors</h1>
        <p className='padb2'>_____</p>
        <div className='logo-container'>
          {
            data.map(image => 
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
    </div>
  )
}

export default Sponsors