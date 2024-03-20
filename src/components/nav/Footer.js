import React from 'react'
import { Link } from 'react-router-dom'
import FooterIcon from './FooterIcon'

const Footer = () => {
  const footerIconData = [
    {link: "mailto:wics@su.wustl.edu", imagePath: "email.png"},
    {link: "https://github.com/washuwics", imagePath: "github.png"},
    {link: "https://www.facebook.com/WashUWiCS", imagePath: "facebook.png"},
    {link: "https://www.instagram.com/washuwics/?hl=en", imagePath: "instagram.png"},
  ]
  return (
    <div className='foot-container'>
      <div>
        <h2 className='padb'>washu wics</h2>
        <div className='container-row padb'>
          {
            footerIconData.map(data => <FooterIcon data={data} key={data.imagePath} />)
          }
        </div>
        <p>Copyright © 2024 Women in Computer Science at Washington University in St. Louis.</p>
      </div>
      <div>
        <p>Other pages</p>
        <div>
        <Link to="/login" className='link'><p>Login</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer