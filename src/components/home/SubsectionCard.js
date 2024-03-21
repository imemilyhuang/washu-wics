import React from 'react'
import "./Subsection.scss"
import { Link } from 'react-router-dom'

const SubsectionCard = ({data}) => {
  return (
    <div className='container-align-center card'>
      <h3 className='padb white-text ta-center'>{data.title}</h3>
      {/* <div className='subsection-card-img' /> */}
      <img 
        alt='subsection'
        src={process.env.PUBLIC_URL+data.img}
        className='subsection-card-img padb2'
      />
      <Link to={data.link}>
        <button className='learn-more-button'><p>Learn more</p></button></Link>
    </div>
  )
}

export default SubsectionCard