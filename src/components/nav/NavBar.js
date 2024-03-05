import React from 'react'
import "./Nav.scss"
import { Link } from 'react-router-dom'

const NavBar = () => {
  const data = [{name: "team"},{name: "events"},{name: "contact"}]
  return (
    <div className='nav-container'>
      <Link to="/">
        <img 
          src={process.env.PUBLIC_URL+"/logo.png"}
          className='nav-logo' alt='logo'
        />
      </Link>

      <div className='routes-holder'>
        {
          data.map(route => 
            <Link to={"/"+route.name}>
              <h2>{route.name}</h2>
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default NavBar