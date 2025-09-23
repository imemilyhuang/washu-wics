import React from 'react'
import InstaPost from './InstaPost'
import { feedData } from "../../data/feedData"

const StayConnected = () => {
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
          feedData.map(data => <InstaPost data={data} key={data.link} />)
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