import React from 'react'
import PageHero from '../components/PageHero'
import AboutSection from '../components/AboutSection'
import CTASection from '../components/CTASection'
import Testimonials from '../components/Testimonials'

const About = () => {
  return (
    <>
    <PageHero eyebrow="About the studio" title="Ideas made" accent="visible." description="TheReelBazar is a hands-on creative studio for content, community and the web." video="/about.mp4" />
    <AboutSection/>
    <CTASection/>
   
    </>
  )
}

export default About
