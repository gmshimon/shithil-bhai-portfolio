import React from 'react'
import './research.css'
const Research = ({ research }) => {
  const { id, title, description, date, image, position, url, slides } =
    research
  const handleRedirect = url => {}

  return (
    <div style={{ marginBottom: '4rem' }}>
      <section className='d-flex '>
        <div className='me-5' style={{ width: '600px' }}>
          <a className='research_title' href={url} target='_blank'>
            <h3
              style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              {title}
            </h3>
          </a>
          <p
            style={{
              marginBottom: '0px',
              fontSize: '20px',
              color: '#000000CC',
              fontFamily: 'Roboto sans-serif'
            }}
          >
            {description}
          </p>
          <div>
            <p
              className='fw-bold'
              style={{ fontFamily: 'Roboto sans-serif', fontSize: '20px' }}
            >
              <span>Position</span>
              {': '}
              <span className='fst-italic'>{position}</span>
            </p>
          </div>
          <div style={{ marginTop: '17px' }}>
            <span
              style={{
                color: '#0000008A',
                fontFamily: 'Roboto sans-serif',
                fontSize: '17px'
              }}
            >
              {date}
            </span>
          </div>
        </div>
        <div>
          <img style={{ width: '100px', height: '90px' }} src={image} alt='' />
        </div>
      </section>
    </div>
  )
}

export default Research
