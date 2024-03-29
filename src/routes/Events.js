import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import EventComponent from '../components/events/EventComponent'

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const q = query(collection(db, "events"), orderBy("startTime"))
    const unsubscribe = onSnapshot(q, res => {
      let newDocs = []
      res.docs.forEach(doc => {
        newDocs.push({...doc.data(), id: doc.id,
          startTime: new Date(1000*doc.data().startTime.seconds),
          endTime: new Date(1000*doc.data().endTime.seconds),
        })
      })

      setEvents(newDocs)
    })
    
    return () => {
      unsubscribe()
    }
  }, [])

  console.log(events)

  return (
    <div className='full-left-container nav-pad'>
      <h1>Events</h1>
      <div className='card-flex-wrap'>
        {
          events.map(data => <EventComponent data={data} key={data.id} />)
        }
      </div>
    </div>
  )
}

export default Events