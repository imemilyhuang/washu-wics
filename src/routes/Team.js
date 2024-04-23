import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import HoverClipText from "../components/home/HoverClipText"
import colors from "../colors"
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
    <div className="flex-column-center">
      <div className="flex-column-center padding-642 dark-gradient-container">
        <div className='heading-container'>
          <div className="title-container">
            <div className="title-text-control margin-bottom-1">
              <HoverClipText baseColor={colors.white} accentColor={colors.pink} text="The Exec Team" />
            </div>
            <p className='heading-copy team-copy padding-bottom-21 white-text'>
              With over 175 general members in WiCS, our leadership team works to 
              support the growing community of women in technology at WashU.
            </p>
          </div>

          <img 
            src={process.env.PUBLIC_URL+"/assets/home/group.png"}
            className='hero-image' alt="group of women"
          />
          
        </div>
      </div>
      
      <h1 className="center-text padding-21">Current Exec Board</h1>
      <div className='little-grid'>
        {
          teamMembers.map(data => <TeamMember data={data} key={data.id} />) 
        }
      </div>
      <h2 className="padding-21">Alumni</h2>
      <div className='little-grid'>
        {
          alumni.map(data => <TeamMember data={data} key={data.id} />)
        }
      </div>
    </div>
  )
}

export default Team