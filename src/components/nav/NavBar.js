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
  }, [navbarOpen, targetElement])
  
  const data = [{name: "Events"},{name: "Resources"},{name: "Team"},{name: "Contact"}]
  const {user} = useContext(AuthContext);
  const { width } = useWindowDimensions()

  if (width > 900) {
    document.body.style.overflowY = "scroll"
  } else if (navbarOpen) {
    document.body.style.overflowY = "hidden"
  }

  return (
    <nav className='nav-container'>
      <div className={"expanded-nav-control"}>
        <Link to="/" className='link'>
          <h3 className="bold">WashU WiCS</h3>
        </Link> 

        {width > 1000 &&
          <div className='routes-holder'>
            {
              data.map(route => 
                <Link to={"/"+route.name.toLowerCase()} className='margin-left-3 link' key={route.name}>
                  <h4>{route.name}</h4>
                </Link>
              )
            }
            {user && <Link to="/admin" className='margin-left-3 link'><h4>Admin</h4></Link>}
          </div>
        }

        {width <= 1000 && 
          <button onClick={() => setNavbarOpen(prev => !prev)} style={{backgroundColor: "transparent", borderWidth: 0, marginLeft: "3rem"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/nav/white-hamburger.png"}
              style={{width: "2rem"}}
              alt="Menu"
            />
          </button>
        }

        {width <= 1000 && navbarOpen &&
          <div onClick={() => setNavbarOpen(prev => !prev)} style={{...styles.darken}} />
        }

        {width <= 1000 && navbarOpen &&
          <div style={{...styles.popoutHamburger}}>
            <button className='margin-bottom-3' onClick={() => setNavbarOpen(prev => !prev)} style={{backgroundColor: "transparent", borderWidth: 0}}>
              <img
                src={process.env.PUBLIC_URL + "/assets/nav/x.png"}
                style={{width: "2rem"}}
                alt="Menu"
              />
            </button>
            {
              data.map(route => 
                <Link onClick={() => setNavbarOpen(false)} to={"/"+route.name.toLowerCase()} className='margin-bottom-1 link' key={route.name}>
                  <h3>{route.name}</h3>
                </Link>
              )
            }
            {user && <Link onClick={() => setNavbarOpen(false)} to="/admin" className='margin-bottom-1 link'><h3>Admin</h3></Link>}
            
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
    padding: "2rem",
    paddingTop: "2.4rem",
    backgroundColor: "#fff",
    zIndex: 6,
    alignItems: "flex-start",
},
darken: {
    position: "absolute",
    zIndex: 5,
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "#00000050",
  }
}