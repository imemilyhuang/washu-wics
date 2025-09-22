import { doc, getDoc } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'

import InstaPost from './InstaPost'

const StayConnected = () => {
  const [feed, setFeed] = useState([])

  useEffect(() => {
    const unsubscribe = async () => {
      const docRef = doc(db, "instagram", "feed")
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        let posts = []
        docSnap.data().data.forEach(doc => {
          posts.push({...doc, id: doc.link})
        })
  
        setFeed(posts)
      } else {
        console.log("No such document!");
      }
    }
    
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className="flex-column-center comfy-padding-642 pink-container">
      <div className="flex-column-center">
        <h1 className="margin-bottom-1 center-text">Stay Connected</h1>
        
        <div className="margin-bottom-2 little-line" />

        <p className="center-text margin-bottom-42">
          Follow WashU WiCS on Instagram to stay updated with the latest events, programs, and resources.
        </p>

        <div className="margin-bottom-2 insta-grid">
        {
          feed.map(data => <InstaPost data={data} key={data.link} />)
        }
        </div>

        <a href={`https://www.instagram.com/washuwics/`} target="_blank" rel="noopener noreferrer">
          <button className='purple-gradient-button'>
            <h4>View More</h4>
          </button>
        </a>
      </div>
    </div>
  )
}

export default StayConnected