import React from 'react'
import './work.css'
import { Button } from 'react-bootstrap'

const Work = ({ work }) => {
  const { id, name, date, site, image, description, category,intro } = work
  return (
    <section className='work-container'>
      <div>
        <span style={{ color: 'rgba(0,0,0,0.54)',marginBottom:'15px',display:'block' }} >{date}</span>
        <div>
          <a>
            <img src={image} alt='' />
          </a>
        </div>
        <h3 className='title' style={{marginTop:'15px',marginBottom:'15px' ,display:'block' ,fontSize: '1.9rem'}}>
            <a>{name}</a>
        </h3>
        <div style={{width:"720px"}}>
            <p style={{fontSize:'1.05rem'}}>{intro}</p>
        </div>
      </div>
    </section>
  )
}

export default Work
