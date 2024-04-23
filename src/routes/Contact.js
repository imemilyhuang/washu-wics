import React from 'react'
import HoverClipText from "../components/home/HoverClipText"
import colors from "../colors"

const Contact = () => {
  return (
    <div className='flex-column-center'>
      <div className="flex-column-center padding-642 dark-gradient-container">
        <div className='heading-container'>
          <div className="title-container">
            <div className="title-text-control margin-bottom-1">
              <HoverClipText baseColor={colors.white} accentColor={colors.pink} text="Contact Us" />
            </div>
            <p className='heading-copy padding-bottom-21 white-text'>
              To contact WashU WiCS, please email <a className='link' href="mailto:wics@su.wustl.edu" target="_blank" rel="noopener noreferrer">wics@su.wustl.edu</a> or visit us on our social media.
            </p>
            {/* <p>Maybe put email form here (although email.js only allows 200 free email sends per month)</p> */}
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

export default Contact