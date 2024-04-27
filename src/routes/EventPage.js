import React from 'react'
import { useLocation } from 'react-router-dom'
import GoBack from '../components/nav/GoBack'

const EventPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const loc = useLocation()
  const data = loc.state.data

  return (
    <div className='comfy-padding-642'>
      <GoBack />
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