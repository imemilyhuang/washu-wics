import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../components/home/Hero.scss"

const Lost = () => {
  const navigate = useNavigate()
  return (
    <div className='full-left-container nav-pad'>
      <h1>Uh oh!</h1>
      <img 
        alt='lost'
        src={process.env.PUBLIC_URL+"/assets/home/lost.png"}
        className='big-img'
      />
      <p className='marginb2'>This page was deleted or it doesn't exist</p>
      
      <button onClick={() => navigate(-1)} className='call-to-action-button'>
        <p>Go back</p>
      </button>

    </div>
  )
}

export default Lost