import { getDownloadURL, ref } from '@firebase/storage'
import React, { useEffect, useState } from 'react'
import { storage } from '../../firebase'
import "./TeamMember.scss"
import useWindowDimensions from "../../useWindowDimensions"

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

  const { width } = useWindowDimensions()
  
  return <a href={data?.link} target="_blank" rel="noopener noreferrer">
    <div className='padding-21 t-card'>
      <img className={`execPic ${width > 700 && 'margin-bottom-1'}`} src={image} alt={data.name} />
      <div className={`${width <= 700 && 'margin-left-2'}`}>
        <h4 className={`margin-bottom-1 ${width > 700 && 'center-text'}`}>{data.name}</h4>
        <p className={`purple-text ${width > 700 && 'center-text'}`}>{data.title}</p>
      </div>
    </div>
  </a> 
}

export default TeamMember