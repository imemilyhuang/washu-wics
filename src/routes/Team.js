import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import TeamMember from '../components/team/TeamMember'

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([])
  const [alumni, setAlumni] = useState([])

  useEffect(() => {
    const q = query(collection(db, "team"), orderBy("order", "asc"))
    const unsubscribe = onSnapshot(q, res => {
      let newDocs = []
      let newAlumni = []
      res.docs.forEach(doc => {
        if (doc.data()?.alumni) {
          newAlumni.push({...doc.data(), id: doc.id})
        } else {
          newDocs.push({...doc.data(), id: doc.id})
        }
      })

      setAlumni(newAlumni)
      setTeamMembers(newDocs)
    })
    
    return () => {
      unsubscribe()
    }
  }, [])

  console.log(teamMembers)

  return (
    <div className='full-left-container nav-pad'>
      <h1 className='padb'>Executive Board</h1>
      <div className='card-flex-wrap'>
        {
          teamMembers.map(data => <TeamMember data={data} key={data.id} />)
        }
      </div>
      <h2 className='padb'>Alumni</h2>
      <div className='card-flex-wrap'>
        {
          alumni.map(data => <TeamMember data={data} key={data.id} />)
        }
      </div>
    </div>
  )
}

export default Team