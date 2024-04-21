import React from 'react'
import "./Subsection.scss"
import { Link } from 'react-router-dom'

const SubsectionCard = ({data}) => {
  return (
    <div className='container-align-center card'>
      <h3 className='padb white-text center-text'>{data.title}</h3>
      {/* <div className='subsection-card-img' /> */}
      <img 
        alt='subsection'
        src={process.env.PUBLIC_URL+data.img}
        className='subsection-card-img padb2'
      />
      <Link to={data.link}>
        <button className='learn-more-button'><h4>Learn more</h4></button></Link>
    </div>
  )
}

export default SubsectionCard