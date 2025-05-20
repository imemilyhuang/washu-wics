import React from 'react'
import "./Mission.scss"

const Mission = () => {
  return (
    <div className="flex-column-center comfy-padding-642">
      <div className='flex-column-center'>
        <h1 className='margin-bottom-1'>Our Mission</h1>
        <div className="margin-bottom-2 little-line" />

        <p className="mission-text-control center-text padding-bottom-21">
          Our mission is to <span className="bold pink-text">create</span> a welcoming and supportive 
          community for women in computing, <span className="bold pink-text">bolster</span> professional
          development by providing networking and mentorship opportunities,
          and <span className="bold pink-text">inspire</span> future generations of women by giving 
          back to the greater St. Louis community.
        </p>
        <p className="mission-text-control center-text padding-bottom-42">
        All WashU students are welcome to join and participate in our organization.
        </p>
        <img 
          alt='subsection'
          src={process.env.PUBLIC_URL+"/assets/home/girl-with-laptop.png"}
          className="mission-img"
        />
      </div>
    </div>
  )
}

export default Mission