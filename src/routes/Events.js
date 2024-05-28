import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import HoverClipText from "../components/home/HoverClipText"
import colors from "../colors"
import { db } from '../firebase'
import EventComponent from '../components/events/EventComponent'

const Events = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const [pastEvents, setPastEvents] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])

  useEffect(() => {
    const q = query(collection(db, "events"), orderBy("startTime", "desc"))
    const unsubscribe = onSnapshot(q, res => {
      let upcoming = []
      let past = []
      res.docs.forEach(doc => {
        const newDoc = {...doc.data(), id: doc.id,
          startTime: new Date(1000*doc.data().startTime.seconds),
          endTime: new Date(1000*doc.data().endTime.seconds),
        }
        if (newDoc.startTime >= new Date()) {
          upcoming.push(newDoc)
        } else {
          past.push(newDoc)
        }
      })

      setPastEvents(past)
      setUpcomingEvents(upcoming)
    })
    
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className="flex-column-center">
      <div className="flex-column-center padding-642 dark-gradient-container">
        <div className='heading-container'>
          <div className="title-container">
            <div className="title-text-control margin-bottom-1">
              <HoverClipText baseColor={colors.white} accentColor={colors.pink} text="WiCS Events" />
            </div>
            <p className='heading-copy team-copy padding-bottom-21 white-text'>
            Join us for events throughout the school year, from workshops and networking 
            sessions with WiCS sponsors to our exciting social events.
            </p>
          </div>

          <img 
            src={process.env.PUBLIC_URL+"/assets/home/group.png"}
            className='hero-image' alt="group of women"
          />
          
        </div>
      </div>
      
      <div className="comfy-padding-642">
        <h1 className="padding-121">Upcoming Events</h1>
        {
          upcomingEvents.length > 0 ?
          <div className='little-grid'>
            {upcomingEvents.map(data => <EventComponent data={data} key={data.id} />)}
          </div> :
          <p className='padding-21-horizontal'>It looks like there are no upcoming events planned, but be on the lookout!</p>
        }

        <h1 className="padding-121">Past Events</h1>
        {
          pastEvents.length > 0 ?
          <div className='little-grid'>
            {pastEvents.map(data => <EventComponent data={data} key={data.id} />)}
          </div> :
          <p className='padding-21-horizontal'>It looks like there are no past events.</p>
        }
      </div>
      
    </div>
  )
}

export default Events