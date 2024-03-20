import React from 'react'

const FooterIcon = ({data}) => {
  return (
    <a href={data.link} target="_blank" rel="noopener noreferrer" style={{marginRight: "2rem"}}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/footer-icons/${data.imagePath}`}
        className='footer-icon'
        alt={data.imagePath}
      />
    </a>
  )
}

export default FooterIcon