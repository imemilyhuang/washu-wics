import { collection, doc, onSnapshot, orderBy, query } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'

import InstaPost from './InstaPost'

const StayConnected = () => {
  const [feed, setFeed] = useState([])

  useEffect(() => {
    const q = query(collection(db, "instagram"))
    const unsubscribe = onSnapshot(q, res => {
      setFeed(res.docs[0].data().data)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className="flex-column-center comfy-padding-642 pink-container">
      <div className="flex-column-center">
        <h1 className="margin-bottom-1 center-text">Stay Connected</h1>
        
        <div
          style={{
            width: "6rem", 
            height: "0.25rem",
            borderRadius:"5rem",
            backgroundColor:"black"
          }}
          className="margin-bottom-2"
        />

        <p className="center-text margin-bottom-42">
          Follow WashU WiCS on Instagram to stay updated with the latest events, programs, and resources.
        </p>

        <div className="margin-bottom-2 grid-3-column">
        {
          feed.map(data => <InstaPost data={data} key={data.link} />)
        }
        </div>

        <a href={`https://www.instagram.com/washuwics/`} target="_blank" rel="noopener noreferrer">
          <button className='learn-more-button'>
            <h4>View More</h4>
          </button>
        </a>
      </div>
    </div>
  )
}

export default StayConnected