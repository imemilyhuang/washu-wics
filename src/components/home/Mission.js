import React from 'react'
import "./Mission.scss"

const Mission = () => {
  return (
    <div className='container-white'>
      <div className='mission-container'>
        <h1 className='padb'>Our mission</h1>
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

        <p className='center-text padb4'>
          Our mission is to create a welcoming and supportive community 
          for women in computing, bolster professional development by 
          providing networking and mentorship opportunities, and inspire 
          future generations of women by giving back to the greater 
          St. Louis community.
        </p>
        <img 
          alt='subsection'
          src={process.env.PUBLIC_URL+"/assets/home/girl-with-laptop.png"}
          className='subsection-card-img'
        />
      </div>
    </div>
  )
}

export default Mission