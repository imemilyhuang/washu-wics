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
    <div className="flex-column-center comfy-padding-642">
      <div className="flex-column-center">
        <h1 className="margin-bottom-1">Past Sponsors</h1>
        <div
          style={{
            width: "6rem",
            height: "0.25rem",
            borderRadius:"5rem",
            backgroundColor:"black"
          }}
          className="margin-bottom-21"
        >
        </div>

        <p className="margin-bottom-42">
          The companies and organizations we've worked with in past years.
        </p>
        <div className='sponsor-container'>
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