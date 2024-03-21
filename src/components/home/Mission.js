import React from 'react'
import "./Mission.scss"

const Mission = () => {
  return (
    <div className='container-white'>
      <div className='mission-container'>
        <h1 className='padb'>Our mission</h1>
        <p className='padb2'>_____</p>
        <p className='ta-center padb2'>Washington University Women in Computer Science's mission is to create a welcoming and supportive community for women in computing, bolster professional development by providing networking and mentorship opportunities, and inspire future generations of women by giving back to the greater St. Louis community.</p>
        <img 
          alt='subsection'
          src={process.env.PUBLIC_URL+"/assets/home/GHC1.jpeg"}
          className='subsection-card-img'
        />
      </div>
    </div>
  )
}

export default Mission