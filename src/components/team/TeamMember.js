import { getDownloadURL, ref } from '@firebase/storage'
import React, { useEffect, useState } from 'react'
import { storage } from '../../firebase'
import "./TeamMember.scss"

const TeamMember = ({data}) => {
  const [image, setImage] = useState(process.env.PUBLIC_URL+"/assets/default-pfp.png")
  useEffect(() => {
    if (data.imagePath!=="default") {
      const pathRef = ref(storage, `team/${data.imagePath}`)
      getDownloadURL(pathRef)
        .then((url) => {
          setImage(url)
        })
        .catch((error) => {
          console.log(error)
        });
    }
  }, [data.imagePath])
  
  return <a href={data?.link} target="_blank" rel="noopener noreferrer">
    <div className='padding-21 t-card'>
      <img className='execPic margin-bottom-1' src={image} alt={data.name} />
      <h4 className='margin-bottom-1 center-text'>{data.name}</h4>
      <p className='center-text purple-text'>{data.title}</p>
    </div>
  </a> 
}

export default TeamMember