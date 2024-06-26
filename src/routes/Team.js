import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import HoverClipText from "../components/home/HoverClipText"
import colors from "../colors"
import { db } from '../firebase'
import TeamMember from '../components/team/TeamMember'
import useWindowDimensions from '../useWindowDimensions'

const Team = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
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

  const { width } = useWindowDimensions()

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

      <div className={`comfy-padding-642 ${width > 1100 ? 'flex-column-center' : 'flex-column'}`} style={{width: "100%"}}>
        <div>
          <h1 className="padding-121">Current Exec Board</h1>
          <div className='little-grid'>
            {
              teamMembers.map(data => <TeamMember data={data} key={data.id} />)
            }
          </div>
          <h2 className="padding-121">Alumni</h2>
          <div className='little-grid'>
            {
              alumni.map(data => <TeamMember data={data} key={data.id} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team