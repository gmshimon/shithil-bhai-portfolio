import React from 'react'
import './work.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Work = ({ work }) => {
  const { id, name, date, site, image, description, category, intro } = work

  const navigate = useNavigate()
  return (
    <section className='work-container'>
      <div>
        <span
          style={{
            color: 'rgba(0,0,0,0.54)',
            marginBottom: '15px',
            display: 'block',
            paddingLeft: '10px'
          }}
        >
          {date}
        </span>
        <div>
          <a>
            <img
              style={{ width: '750px', paddingLeft: '10px' }}
              src={image}
              alt=''
            />
          </a>
        </div>
        <h3
          onClick={() => navigate(`/feature-work/${id}`)}
          className='title'
          style={{
            marginTop: '15px',
            marginBottom: '15px',
            display: 'block',
            fontSize: '1.9rem',
            paddingLeft: '10px'
          }}
        >
          <a>{name}</a>
        </h3>
        <div style={{ width: '750px', paddingLeft: '10px' }}>
          <p style={{ fontSize: '1.05rem', textAlign: 'justify' }}>{intro}</p>
        </div>
      </div>
    </section>
  )
}

export default Work
