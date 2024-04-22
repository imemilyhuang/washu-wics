import React from 'react'
import { Link } from 'react-router-dom'
import FooterIcon from './FooterIcon'

const Footer = () => {
  const footerIconData = [
    {link: "mailto:wics@su.wustl.edu", imagePath: "email.png"},
    {link: "https://github.com/washuwics", imagePath: "github.png"},
    {link: "https://www.instagram.com/washuwics/?hl=en", imagePath: "instagram.png"},
    {link: "https://open.spotify.com/playlist/5egd8AUAuq2eh5ybxjgxes?si=AZqdCFvvQvqzLRuQ49wY0g&pi=u-UVI6g-W5RkK8&nd=1&dlsi=fb688ebdb4c74cb3", imagePath: "spotify.png"},
    {link: "https://www.facebook.com/WashUWiCS", imagePath: "facebook.png"},
  ]

  const pageLinks1 = [
    {link: "/home", text: "Home"},
    {link: "/login", text: "Login"},
    {link: "/contact", text: "Contact"}]
  const pageLinks2 = [
    {link: "/resources", text: "Resources"},
    {link: "/team", text: "Team"},
    {link: "/events", text: "Events"},
  ]
  return (
    <div className='foot-container'>
      <div>
        <h2 className='padb white-text'>washu wics</h2>
        <div className='container-row padb'>
          {
            footerIconData.map(data => <FooterIcon data={data} key={data.imagePath} />)
          }
        </div>
        <p className='white-text'>Copyright © 2024 Women in Computer Science at Washington University in St. Louis.</p>
      </div>
      <div>
        <p className='white-text padb'>Other pages</p>
        <div>
          {
            pageLinks1.map(data => <Link key={data.link} to={data.link} className='link'><p className='bold white-text'>{data.text}</p></Link>)
          }        
        </div>
      </div>
      <div>
        <p className='padb'>Other pages</p>
        <div>
          {
            pageLinks2.map(data => <Link key={data.link} to={data.link} className='link'><p className='bold white-text'>{data.text}</p></Link>)
          }        
        </div>
      </div>
    </div>
  )
}

export default Footer