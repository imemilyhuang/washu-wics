import React from 'react'
import "./Subsection.scss"
import { Link } from 'react-router-dom'

const SubsectionCard = ({data}) => {
  return (
    <div className="card padding-2">
      <img 
        alt='Image'
        src={process.env.PUBLIC_URL+data.img}
        className="subsection-card-img"
      />
      <div className="card-text-container">
        <h3 className="white-text card-text compact-margin-bottom-21">{data.title}</h3>
        <p className="white-text card-text margin-bottom-21">{data.bodyCopy}</p>
        <Link to={data.link}>
          <button className="purple-gradient-button"><h4>Learn More</h4></button>
        </Link>
      </div>
    </div>
  )
}

export default SubsectionCard