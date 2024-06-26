import React from 'react'
import { Link } from 'react-router-dom'
import FooterIcon from './FooterIcon'
import useWindowDimensions from "../../useWindowDimensions"

const Footer = () => {
  const footerIconData = [
    {link: "mailto:wics@su.wustl.edu", imagePath: "email.png"},
    {link: "https://github.com/washuwics", imagePath: "github.png"},
    {link: "https://www.instagram.com/washuwics/?hl=en", imagePath: "instagram.png"},
    {link: "https://open.spotify.com/playlist/5egd8AUAuq2eh5ybxjgxes?si=AZqdCFvvQvqzLRuQ49wY0g&pi=u-UVI6g-W5RkK8&nd=1&dlsi=fb688ebdb4c74cb3", imagePath: "spotify.png"},
    {link: "https://www.facebook.com/WashUWiCS", imagePath: "facebook.png"}, // make sure this is the last one!
  ]

  const pageLinks1 = [
    {link: "/home", text: "Home"},
    {link: "/contact", text: "Contact"},
    {link: "/login", text: "Login"},
  ]
  const pageLinks2 = [
    {link: "/resources", text: "Resources"},
    {link: "/team", text: "Team"},
    {link: "/events", text: "Events"}
  ]

  const { width } = useWindowDimensions()

  return (
    <div className='foot-container'>
      <footer>
        <div className='footer-inside-container'>
          <div style={width > 900 ? {marginRight: "2rem"} : {}}>
            <h2 className='margin-bottom-2 white-text'>WashU WiCS</h2>
            <div className='container-row margin-bottom-1'>
              {
                footerIconData.map(data => <FooterIcon data={data} key={data.imagePath} />)
              }
            </div>
          </div>
          <div style={{marginRight: "2rem"}}>
            {
              pageLinks1.map(data => <Link key={data.link} to={data.link} className='link'><p className='bold white-text'>{data.text}</p></Link>)
            }
          </div>
          <div>
            {
              pageLinks2.map(data => <Link key={data.link} to={data.link} className='link'><p className='bold white-text'>{data.text}</p></Link>)
            }
          </div>
        </div>
        <p className='white-text margin-bottom-1'>Copyright © 2024 Women in Computer Science at Washington University in St. Louis.</p>
      </footer>
    </div>
  )
}

export default Footer