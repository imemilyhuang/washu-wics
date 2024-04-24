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
    <div className='comfy-padding-642'>
      <h1 className='marginb'>Admin</h1>
      <h3>Manage Events</h3>
      <ManageEvents />
      <div className='margin-bottom-2'/>

      <h3>Manage Team</h3>
      <ManageTeamMember />
      <div className='margin-bottom-2'/>
      <button className='purple-gradient-button' style={{width: "12rem"}} onClick={logout}><p>Log Out</p></button>
    </div>
  )
}

export default Admin