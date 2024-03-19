import React from 'react'
import SubsectionCard from "./SubsectionCard"

const Subsections = () => {
  const subsectionCardData = [
    {title: "explore resources", img: "/logo.png", link: "nowhere"},
    {title: "upcoming events", img: "/logo.png", link: "nowhere"},
    {title: "meet our team", img: "/logo.png", link: "/team"},
  ]
  return (
    <div className='container-pink'>
      <div className='subsections-container'>
        <h1 className='pad'>get involved with wics</h1>
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