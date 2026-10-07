import React from 'react'
import Hero from '../components/Hero'
import Reels from '../components/Reels'
import Testimonials from '../components/Testimonials'
import HomeWork from '../components/HomeWork'
import CTASection from '../components/CTASection'
import Pricing from '../components/Pricing'
import HowItWorks from '../components/Howitworks'
import ServicesContent from '../components/ServicesContent'

const Home = () => {
  return (
    <>
    <Hero/>
    <Reels/>
    <HomeWork/>
    <ServicesContent/>
     <Testimonials/>
     <Pricing/>
     <HowItWorks/>
     <CTASection/>
    </>
  )
}

export default Home