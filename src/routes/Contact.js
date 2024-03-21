import React from 'react'

const Contact = () => {
  return (
    <div className='full-left-container nav-pad'>
      <h1>Get in touch</h1>
      <p>
        To contact WiCS, please email <a className='link' href="mailto:wics@su.wustl.edu" target="_blank" rel="noopener noreferrer">wics@su.wustl.edu</a> or visit us on our social media
      </p>
      <p>Maybe put email form here (although email.js only allows 200 free email sends per month)</p>
      
      <img 
        alt='contact'
        src={process.env.PUBLIC_URL+"/assets/home/contact.png"}
        className='big-img'
      />

    </div>
  )
}

export default Contact