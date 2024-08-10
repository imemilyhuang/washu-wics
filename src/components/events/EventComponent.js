import { deleteObject, getDownloadURL, ref } from '@firebase/storage'
import React, { useContext, useEffect, useState } from 'react'
import { db, storage } from '../../firebase'
import "./EventComponent.scss"
import "../team/TeamMember.scss"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { doc, deleteDoc } from 'firebase/firestore'
import useWindowDimensions from '../../useWindowDimensions'

const EventComponent = ({data}) => {
  const [image, setImage] = useState(process.env.PUBLIC_URL+"/assets/default-pfp.png")
  
  const {user} = useContext(AuthContext);
  const [isHover, setIsHover] = useState(false)

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
  
  const del = async () => {
    await deleteDoc(doc(db, "events", data.id));
    if (data.imagePath==="default") {
      const pathRef = ref(storage, `events/${data.imagePath}`)
      deleteObject(pathRef)
    }
  }

  const { width } = useWindowDimensions()

  return <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} 
    onClick={() => !user && navigate("/events/"+data.id, { state: {data: data}})} 
    className='pad2 t-card padding-21'>
    <img className={`pic ${width > 700 && 'margin-bottom-1'}`} src={image} alt={data.name} />
    <div className={`${width <= 700 && 'margin-left-1'}`}>
      <h4 className={`margin-bottom-1 ${width > 700 && 'center-text'}`}>{data.title}</h4>
      <p className={`purple-text ${width > 700 && 'center-text'}`}>{data.startTime.toLocaleDateString('en-US')}</p>
      <p className={`purple-text ${width > 700 && 'center-text'}`}>{
        data.startTime.toLocaleTimeString('en-US', {hour: "numeric", minute: "numeric"})} - {
        data.endTime.toLocaleTimeString('en-US', {hour: "numeric", minute: "numeric"})}</p>
      <p className={`purple-text ${width > 700 && 'center-text'}`}>{data.location}</p>
    </div>
    { isHover && user &&
      <div style={{position: 'absolute', display: 'flex', flexDirection: 'column', gap: '1rem', borderRadius: 25,
        top: 0, justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', backgroundColor: '#00000090'}}>
        <button onClick={() => navigate("/events/"+data.id, { state: {data: data}})}
          className='blue-gradient-button bold white-text'>View</button>
        <button className='purple-gradient-button bold white-text'>Edit</button>
        <button
          className='red-gradient-button bold white-text'
          onClick={del}
        >
          Delete
        </button>
      </div>
    }
  </div>
}

export default EventComponent