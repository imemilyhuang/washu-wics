import { getDownloadURL, ref } from '@firebase/storage'
import React, { useEffect, useState } from 'react'
import { storage } from '../../firebase'

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
  return <div className='padb2' style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
    <img className='execPic marginb' src={image} alt={data.name} />
    <h4 className='padb'>{data.name}</h4>
    <p>{data.title}</p>
  </div>
}

export default TeamMember