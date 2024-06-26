import React from 'react'
import SubsectionCard from "./SubsectionCard"

const Subsections = () => {
  const subsectionCardData = [
    {title: "Explore Resources", img: "/assets/home/resources.jpg", link: "/resources", bodyCopy: "Discover a curated selection of opportunities and informational resources to fuel your passion for computer science and technology."},
    {title: "Upcoming Events", img: "/assets/home/events.jpg", link: "/events", bodyCopy: "Join us for events throughout the school year, from workshops and networking sessions with WiCS sponsors to our exciting social events."},
    {title: "Meet Our Team", img: "/assets/home/team.jpg", link: "/team", bodyCopy: "With over 175 general members in WiCS, our leadership team works to support the growing community of women in technology at WashU."},
  ]
  return (
    <div className="flex-column-center subsections-container comfy-padding-642">
      <div className="flex-column-center">
        <h1 className='center-text white-text'>Get Involved with WiCS</h1>
        <div className="cards-container">
          {
            subsectionCardData.map(card => <SubsectionCard data={card} key={card.title} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Subsections