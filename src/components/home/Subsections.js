import React from 'react'
import SubsectionCard from "./SubsectionCard"

const Subsections = () => {
  const subsectionCardData = [
    {title: "Explore resources", img: "/assets/home/resources.png", link: "/resources"},
    {title: "Upcoming events", img: "/assets/home/events.png", link: "/events"},
    {title: "Meet our team", img: "/assets/home/meet.png", link: "/team"},
  ]
  return (
    <div className='container-dark'>
      <div className='subsections-container'>
        <h1 className='pad white-text'>Get involved with WiCS</h1>
        <p className='padb4'>_____</p>
        <div className='items-container'>
          {
            subsectionCardData.map(card => <SubsectionCard data={card} key={card.title} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Subsections