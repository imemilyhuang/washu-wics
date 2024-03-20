import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const WrapNav = ({children}) => {
  return (
    <div className='nav-wrapper'>
      <NavBar/>
      {children}
      <Footer/>
    </div>
  )
}

export default WrapNav