import { signOut } from '@firebase/auth'
import React from 'react'
import { auth } from '../firebase'
import ManageEvents from "../components/forms/ManageEvents"
import ManageTeamMember from "../components/forms/ManageTeamMember"
import "../components/home/Subsection.scss"

const Admin = () => {
  const logout = () => {
    signOut(auth)
  }

  return (
    <div className='full-left-container nav-pad'>
      <h1 className='marginb'>Admin</h1>
      <h3>Manage events</h3>
      <ManageEvents />
      <div className='marginb2'/>

      <h3>Manage team members</h3>
      <ManageTeamMember />
      <div className='marginb2'/>
      <button className='purple-gradient-button' style={{width: "12rem"}} onClick={logout}><p>Log out</p></button>
    </div>
  )
}

export default Admin