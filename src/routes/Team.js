import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import TeamMember from '../components/team/TeamMember'

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([])

  useEffect(() => {
    const q = query(collection(db, "team"), orderBy("order", "asc"))
    const unsubscribe = onSnapshot(q, res => {
      let newDocs = []
      res.docs.forEach(doc => {
        newDocs.push({...doc.data(), id: doc.id})
      })

      setTeamMembers(newDocs)
    })
    
    return () => {
      unsubscribe()
    }
  }, [])

  console.log(teamMembers)

  return (
    <div className='full-left-container'>
      <h1>Executive Board</h1>
      {
        teamMembers.map(data => <TeamMember data={data} key={data.id} />)
      }
    </div>
  )
}

export default Team