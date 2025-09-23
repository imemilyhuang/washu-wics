import React from 'react'
import "../team/TeamMember.scss"

const InstaPost = ({data}) => {
    const image = process.env.PUBLIC_URL+"/assets/images/instagram/"+data.imagePath

    return <a href={`https://www.instagram.com/p/${data.link}/?hl=en`} 
        target="_blank" rel="noopener noreferrer" className='insta-card'>
        {/* <img crossorigin="anonymous" className='squarePic' src={data.imageLink} alt={data.name} /> */}
        <img className="squarePic" src={image} alt={data.imagePath} />
    </a> 
}

export default InstaPost