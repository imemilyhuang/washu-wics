import React, { useContext, useEffect, useState } from 'react'
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import './Nav.scss'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import useWindowDimensions from '../../useWindowDimensions'

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

    const targetElement = document.querySelector("#root");
    
    useEffect(() => {
        if (navbarOpen) {
            disableBodyScroll(targetElement)
        } else {
            enableBodyScroll(targetElement)
        }

        return () => {
            clearAllBodyScrollLocks()
        }
    }, [navbarOpen])
  
  const data = [{name: "Resources"},{name: "Team"},{name: "Events"},{name: "Contact"}]
  const {user} = useContext(AuthContext);
  const { height, width } = useWindowDimensions()

  if (width > 900) {
    document.body.style.overflowY = "scroll"
  } else if (navbarOpen) {
    document.body.style.overflowY = "hidden"
  }

  return (
    <nav className='nav-container'>
      <div className={width > 900 ? "expanded-nav-control" : "hamburger-nav-control"}>
        <Link to="/" className='link'>
          <h3 className="bold">WashU WiCS</h3>
        </Link>

        {width > 900 &&
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
        }

        {width <= 900 && 
          <button onClick={() => setNavbarOpen(prev => !prev)} style={{backgroundColor: "transparent", borderWidth: 0, marginLeft: "3rem"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/white-hamburger.png"}
              style={{width: "2rem"}}
              alt="Menu"
            />
          </button>
        }

        {width <= 900 && navbarOpen &&
          <div onCLick={() => setNavbarOpen(prev => !prev)} style={{...styles.darken, height: "100%"}} />
        }

        {width <= 900 && navbarOpen &&
          <div>
          </div>
        }

      </div>
    </nav>
  )
}

export default NavBar

let styles ={
  popoutHamburger: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: 0,
    right: 0,
    height: "100%",
    width: "22rem",
    padding: "4rem",
    paddingTop: "2.4rem",
    backgroundColor: "000000"
},
darken: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "#00000050",
  }
}