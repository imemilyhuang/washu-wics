import { getDownloadURL, ref } from '@firebase/storage'
import React, { useEffect, useState } from 'react'
import { storage } from '../../firebase'
import "./TeamMember.scss"

const TeamMember = ({data}) => {
  const [image, setImage] = useState(process.env.PUBLIC_URL+"/assets/default.jpeg")
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
    <div className='pad2 card'>
      <img className='execPic marginb' src={image} alt={data.name} />
      <h4 className='padb ta-center'>{data.name}</h4>
      <p className='ta-center purple-text'>{data.title}</p>
    </div>
  </a> 
}

export default TeamMember