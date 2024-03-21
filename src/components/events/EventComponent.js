import { getDownloadURL, ref } from '@firebase/storage'
import React, { useEffect, useState } from 'react'
import { storage } from '../../firebase'
import "./EventComponent.scss"
import "../team/TeamMember.scss"
import { useNavigate } from 'react-router-dom'

const EventComponent = ({data}) => {
  const [image, setImage] = useState(process.env.PUBLIC_URL+"/assets/default.png")
  useEffect(() => {
    if (data.imagePath!=="default") {
      const pathRef = ref(storage, `events/${data.imagePath}`)
      getDownloadURL(pathRef)
        .then((url) => {
          setImage(url)
        })
        .catch((error) => {
          console.log(error)
        });
    }
  }, [data.imagePath])

  const navigate = useNavigate()
  
  return <div onClick={() => navigate("/events/"+data.imagePath.split('.')[0], { state: {data: data}})} className='pad2 t-card'>
    <img className='pic marginb' src={image} alt={data.name} />
    <h4 className='padb ta-center'>{data.title}</h4>
    <p className='ta-center purple-text'>{data.startTime.toLocaleDateString('en-US')}</p>
    <p className='ta-center purple-text'>{
      data.startTime.toLocaleTimeString('en-US', {hour: "numeric", minute: "numeric"})} - {
      data.endTime.toLocaleTimeString('en-US', {hour: "numeric", minute: "numeric"})}</p>
    <p className='ta-center purple-text'>{data.location}</p>
  </div>
}

export default EventComponent