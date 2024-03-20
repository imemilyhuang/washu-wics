import React, { useContext } from 'react'
import "./Nav.scss"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const NavBar = () => {
  const data = [{name: "resources"},{name: "team"},{name: "events"},{name: "contact"}]
  
  const {user} = useContext(AuthContext);
  return (
    <div className='big-container'>
      <div className='nav-container'>
        <Link to="/" className='link'>
          <h3>WashU WiCS</h3>
        </Link>

        <div className='routes-holder'>
          {
            data.map(route => 
              <Link to={"/"+route.name} className='nav-route link' key={route.name}>
                <h4>{route.name}</h4>
              </Link>
            )
          }
          {user && <Link to="/admin" className='nav-route link'><h4>Admin</h4></Link>}
        </div>
      </div>
    </div>
  )
}

export default NavBar