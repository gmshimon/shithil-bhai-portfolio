import React from 'react'
import'./Footer.css';
import { FaArrowUp } from 'react-icons/fa';
import { Button } from 'react-bootstrap'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
  return (
    <div>
      <FaArrowUp className="up-arrow-icon"  onClick={scrollToTop}/>
    </div>
  )
}

export default Footer
