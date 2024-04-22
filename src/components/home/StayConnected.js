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
    <div className='container-pink'>
      <div className='mission-container'>
        <h1 className='padb center-text'>Stay Connected</h1>
        
        <div
          style={{
            width: "6rem", 
            height: "0.25rem",
            borderRadius:"5rem",
            backgroundColor:"black"
          }}
          className='marginb2'
        >
        </div>
        <div className='card-flex-wrap marginb2'>
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