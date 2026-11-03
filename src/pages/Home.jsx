import React from 'react'
import Hero from '../components/Hero'
import Reels from '../components/Reels'
import Testimonials from '../components/Testimonials'
import HomeWork from '../components/HomeWork'
import CTASection from '../components/CTASection'
import Pricing from '../components/Pricing'
import HowItWorks from '../components/Howitworks'
import ServicesContent from '../components/ServicesContent'
import PageMetadata from '../components/PageMetadata'
import WhyUs from '../components/WhyUs'

const Home = () => {
  return (
    <>
    <PageMetadata title="TheReelBazar | Video Editing, Social Media Management & Website Development" description="TheReelBazar is a creative studio for video editing, social media management and website development." />
    <Hero/>
    <Reels/>
    <HomeWork/>
    <ServicesContent/>
     <Testimonials/>
     {/* <Pricing/> */}
     <HowItWorks/>
     {/* <WhyUs/> */}
     <CTASection/>
    </>
  )
}

export default Home
