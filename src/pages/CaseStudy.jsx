import PageHero from '../components/PageHero'
import Work from '../components/Work'
import PageMetadata from '../components/PageMetadata'

const CaseStudy = () => {
  return (
    <>
    <PageMetadata title="Portfolio | Video Editing, Social Media Management & Website Development | TheReelBazar" description="Explore TheReelBazar projects in video editing, social media management and website development." />
    <PageHero eyebrow="Selected work" title="Work that" accent="holds attention." description="Websites, social media campaigns and video edits made for real audiences." video="/case.mp4" />
    <Work/>
    </>
  )
}

export default CaseStudy
