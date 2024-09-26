import React from 'react'
import MovingTextStrip from '../components/MovingTextStrip'
import Aboutus from '../components/Aboutus'

import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'


function Home() {
  return (
    <>
      <Hero></Hero> 
      <LatestCollections/> 
      <Aboutus></Aboutus>
    </>
  )
}

export default Home