import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const EventPage = () => {
  const navigate = useNavigate()
  const loc = useLocation()
  const data = loc.state.data

  return (
    <div className='comfy-padding-642'>
      <button className='link' style={{alignSelf: "flex-start"}} onClick={() => navigate(-1)}><h4 className='purple-text'>Go back</h4></button>
      <h1>{data.title}</h1>
      <h2>{data.subtitle}</h2>
      <p>Date: {data.startTime.toLocaleDateString('en-US')}</p>
      <p>Time: {
        data.startTime.toLocaleTimeString('en-US', {hour: "numeric", minute: "numeric"})} - {
        data.endTime.toLocaleTimeString('en-US', {hour: "numeric", minute: "numeric"})}</p>
      <p className='margin-bottom-1'>Location: {data.location}</p>
      <p>{data.description}</p>
    </div>
  )
}

export default EventPage