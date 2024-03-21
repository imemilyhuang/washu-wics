import React from 'react'
import SubsectionCard from "./SubsectionCard"

const Subsections = () => {
  const subsectionCardData = [
    {title: "explore resources", img: "/assets/home/resources.png", link: "/resources"},
    {title: "upcoming events", img: "/assets/home/events.png", link: "/events"},
    {title: "meet our team", img: "/assets/home/meet.png", link: "/team"},
  ]
  return (
    <div className='container-dark'>
      <div className='subsections-container'>
        <h1 className='pad white-text'>get involved with wics</h1>
        <p className='padb2'>_____</p>
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