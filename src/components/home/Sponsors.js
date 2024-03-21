import React from 'react'
import "./Sponsor.scss"

const Sponsors = () => {
  const data = [
    {imagePath:"lacrm.png", link: "https://www.lessannoyingcrm.com/"},
    {imagePath:"spectrum.png", link: "https://www.spectrum.com/"},
    {imagePath:"imc.png", link: "https://www.imc.com/us/"},
    {imagePath:"capitalone.png", link: "https://www.capitalone.com/"},
    {imagePath:"exegy.gif", link: "https://www.exegy.com/"},
    {imagePath:"square.png", link: "https://squareup.com/us/en"},
    {imagePath:"google.webp", link: "https://about.google/"},
    {imagePath:"atnt.png", link: "https://www.att.com/"},
  ]

  return (
    <div className='container-white'>
      <div className='mission-container'>
        <h1 className='padb'>Past Sponsors</h1>
        <p className='padb2'>_____</p>
        <p className='padb2'>Will make another page for this</p>
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