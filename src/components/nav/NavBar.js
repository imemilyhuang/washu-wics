import React from 'react'
import "./Nav.scss"
import { Link } from 'react-router-dom'

const NavBar = () => {
  const data = [{name: "resources"},{name: "team"},{name: "events"},{name: "contact"}]
  return (
    <div className='big-container'>
      <div className='nav-container'>
        <Link to="/">
          <h3>WashU WiCS</h3>
        </Link>

        <div className='routes-holder'>
          {
            data.map(route => 
              <Link to={"/"+route.name} className='nav-route' key={route.name}>
                <h3>{route.name}</h3>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default NavBar