import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
import Publications from '../Publications/Publications'
import FeaturedWorks from '../FeaturedWorks/FeaturedWorks'
import Footer from '../Footer/Footer'
import Researches from '../Research_experience/Researches'
import Projects from '../Projects/Projects'

const Home = () => {
  const [hash, setHash] = useState('') // Provide an initial value for hash

  useEffect(() => {
    const scrollOnLoad = () => {
      if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash)
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        }
      }
    }

    window.addEventListener('load', scrollOnLoad)

    return () => {
      window.removeEventListener('load', scrollOnLoad)
    }
  }, []) // Pass hash as a dependency to the effect
  return (
    <div>
      <Banner></Banner>
      <Publications></Publications>
      <FeaturedWorks id='features'></FeaturedWorks>
      <Projects></Projects>
      <Researches></Researches>
      <Footer></Footer>
    </div>
  )
}

export default Home
