import React from 'react'
import'./Footer.css';
import { FaArrowUp } from 'react-icons/fa';
import { Button } from 'react-bootstrap'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
  return (
    <div className='d-flex justify-content-center' style={{margin:'90px 0 70px 0'}}>
      <div>
        <p style={{fontSize:'1.1rem'}}>
        Powered by the <a target='_blank' href="https://www.sourcethemes.com/academic/">Academic theme</a> for <a target='_blank' href="https://gohugo.io/">Hugo</a>.
        </p>
      </div>
      <div style={{marginLeft:'250px'}}>
      <FaArrowUp className="up-arrow-icon"  onClick={scrollToTop}/>
      </div>
    </div>
  )
}

export default Footer
