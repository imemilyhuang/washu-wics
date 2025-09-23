import React from 'react'
import "./TeamMember.scss"
import useWindowDimensions from "../../useWindowDimensions"

const TeamMember = ({data}) => {
  const { width } = useWindowDimensions()
  
  const image = process.env.PUBLIC_URL+"/assets/images/people/"+data.imagePath
  
  return <a href={data?.link} target="_blank" rel="noopener noreferrer">
    <div className='padding-21 t-card'>
      <img className={`execPic ${width > 700 && 'margin-bottom-1'}`} src={image} alt={data.name} />
      <div className={`${width <= 700 && 'margin-left-2'}`}>
        <h4 className={`margin-bottom-1 ${width > 700 && 'center-text'}`}>{data.name}</h4>
        <p className={`purple-text ${width > 700 && 'center-text'}`}>{data.title}</p>
      </div>
    </div>
  </a> 
}

export default TeamMember