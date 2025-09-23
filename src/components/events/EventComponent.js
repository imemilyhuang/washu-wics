import React from 'react'
import { useNavigate } from 'react-router-dom'
import useWindowDimensions from '../../useWindowDimensions'

import "./EventComponent.scss"
import "../team/TeamMember.scss"

const EventComponent = ({data}) => {
  const image = process.env.PUBLIC_URL+"/assets/images/events/"+data.imagePath
  const navigate = useNavigate()
  const { width } = useWindowDimensions()

  return <div
    onClick={() => navigate("/events/"+data.id, { state: {data: data}})} 
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
  </div>
}

export default EventComponent