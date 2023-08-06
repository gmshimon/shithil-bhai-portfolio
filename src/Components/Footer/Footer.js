import React from 'react'
import './Footer.css'
import { FaArrowUp } from 'react-icons/fa'
import { Button } from 'react-bootstrap'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
  return (
    <div
      className='d-flex justify-content-center'
      style={{ margin: '90px 0 70px 0' }}
    >
      <div style={{ marginLeft: '250px' }}>
        <FaArrowUp className='up-arrow-icon' onClick={scrollToTop} />
      </div>
    </div>
  )
}

export default Footer
