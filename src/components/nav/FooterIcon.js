import React from 'react'

const FooterIcon = ({data}) => {
  return (
    <a href={data.link} target="_blank" rel="noopener noreferrer">
      <img
        src={`${process.env.PUBLIC_URL}/assets/footer-icons/${data.imagePath}`}
        className='footer-icon'
        style={data.imagePath==="facebook.png"?{}:{marginRight: "2rem"}}
        alt={data.imagePath}
      />
    </a>
  )
}

export default FooterIcon