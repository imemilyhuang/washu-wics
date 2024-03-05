import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const WrapNav = ({children}) => {
  return (
    <div>
      <NavBar/>
      {children}
      <Footer/>
    </div>
  )
}

export default WrapNav