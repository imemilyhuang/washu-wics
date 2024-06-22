import React from 'react'
import { useNavigate } from 'react-router-dom'
import HoverClipText from "../components/home/HoverClipText"
import colors from "../colors"
import "../components/home/Hero.scss"

const Lost = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const navigate = useNavigate()
  return (
    <div className='flex-column-center'>
      <div className="flex-column-center padding-642 dark-gradient-container">
        <div className='heading-container'>
          <div className="title-container">
            <div className="title-text-control margin-bottom-1">
              <HoverClipText baseColor={colors.white} accentColor={colors.pink} text="Uh oh!" />
            </div>
            <p className='heading-copy padding-bottom-21 white-text'>
              This page was deleted, or it doesn't exist.
            </p>
            {/* <p>Maybe put email form here (although email.js only allows 200 free email sends per month)</p> */}
            <button onClick={() => navigate(-1)} className='call-to-action-button'>
              <h4>Go back</h4>
            </button>
          </div>

          <img 
            src={process.env.PUBLIC_URL+"/assets/home/laptop-typing.png"}
            className='hero-image' alt="typing on a laptop"
          />
          
        </div>
      </div>
    </div>
  )
}

export default Lost