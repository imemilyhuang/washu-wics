import React from 'react'
import SubsectionCard from "./SubsectionCard"

const Subsections = () => {
  const subsectionCardData = [
    {title: "Explore Resources", img: "/assets/home/resources.png", link: "/resources"},
    {title: "Upcoming Events", img: "/assets/home/events.png", link: "/events"},
    {title: "Meet Our Team", img: "/assets/home/meet.png", link: "/team"},
  ]
  return (
    <div className="dark-container">
      <div className='subsections-container'>
        <h1 className='pad white-text'>Get Involved with WiCS</h1>
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