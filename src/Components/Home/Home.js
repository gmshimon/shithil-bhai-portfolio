import React, { useEffect } from 'react'
import Banner from '../Banner/Banner'
import Publications from '../Publications/Publications'
import FeaturedWorks from '../FeaturedWorks/FeaturedWorks'
import Footer from '../Footer/Footer'
import Researches from '../Research_experience/Researches'
import Projects from '../Projects/Projects'

const Home = () => {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])
  return (
    <div>
      <Banner></Banner>
      <Publications></Publications>
      <FeaturedWorks></FeaturedWorks>
      <Projects></Projects>
      <Researches></Researches>
      <Footer></Footer>
    </div>
  )
}

export default Home
