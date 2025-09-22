import { getDownloadURL, ref } from '@firebase/storage'
import React, { useEffect, useState } from 'react'
import { storage } from '../../firebase'
import "../team/TeamMember.scss"

const InstaPost = ({data}) => {
    const [image, setImage] = useState(process.env.PUBLIC_URL+"/assets/default-pfp.png")
    useEffect(() => {
        const pathRef = ref(storage, `instagram/${data.imagePath}`)
        getDownloadURL(pathRef)
            .then((url) => {
                setImage(url)
            })
            .catch((error) => {
                console.log(error)
            });
    }, [data.imagePath])
    return <a href={`https://www.instagram.com/p/${data.link}/?hl=en`} 
        target="_blank" rel="noopener noreferrer" className='insta-card'>
        {/* <img crossorigin="anonymous" className='squarePic' src={data.imageLink} alt={data.name} /> */}
        <img className="squarePic" src={image} alt={data.imagePath} />
    </a> 
}

export default InstaPost