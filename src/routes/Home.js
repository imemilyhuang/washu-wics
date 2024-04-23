import React from 'react'
import Hero from "../components/home/Hero"
import Mission from "../components/home/Mission"
import Subsections from "../components/home/Subsections"
import Sponsors from "../components/home/Sponsors"
import StayConnected from "../components/home/StayConnected"

const Home = () => {
  return (
    <div className="fixed-flex-column">
      <Hero />
      <Mission />
      {/* <Subsections /> */}
      {/* <Sponsors /> */}
      {/* <StayConnected /> */}
    </div>
  )
}

export default Home