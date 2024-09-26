import React from 'react'
import MovingTextStrip from '../components/MovingTextStrip'
import Aboutus from '../components/Aboutus'
import ContactSection from '../components/ContactSection'

import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'


function Home() {
  return (
    <>
      <Hero></Hero> 
      <LatestCollections/> 
      <Aboutus></Aboutus>
      <ContactSection></ContactSection>
    </>
  )
}

export default Home