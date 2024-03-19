import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='foot-container'>
      <div>
        <h2>washu wics</h2>
        <div className='container-row'>
          <p>icons here</p>
        </div>
        <p>copyright</p>
      </div>
      <div>
        <p>Other pages</p>
        <div>
        <Link to="/login"><p>Login</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer