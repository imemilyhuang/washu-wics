import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const WrapNav = ({children}) => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='nav-wrapper'>
      <NavBar/>
      {children}
      <Footer/>
    </div>
  )
}

export default WrapNav