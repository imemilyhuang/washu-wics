import { signOut } from '@firebase/auth'
import React from 'react'
import { auth } from '../firebase'
import "../components/home/Subsection.scss"

const Admin = () => {
  const logout = () => {
    signOut(auth)
  }
  return (
    <div className='full-left-container nav-pad'>
      <h1>Admin</h1>
      <button className='learn-more-button' onClick={logout}><p>Log out</p></button>
    </div>
  )
}

export default Admin