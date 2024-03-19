import { signOut } from '@firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Admin = () => {
  const logout = () => {
    signOut(auth)
  }
  return (
    <div>
      <h1>Admin</h1>
      <button className='learn-more-button' onClick={logout}><p>Log out</p></button>
    </div>
  )
}

export default Admin