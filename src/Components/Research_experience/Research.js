import React from 'react'
import './research.css'
const Research = ({ research }) => {
  const { id, title, description, date, img, url, slides } = research;

    const handleRedirect = (url) =>{

    }

  return (
    <div style={{ marginBottom: '4rem' }}>
      <section className='d-flex '>
        <div className='me-5'>
          <a className='research_title' href={url} target='_blank'>
             <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold',cursor:'pointer' }}>{title}</h3>
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
          <img src={img} alt='' />
        </div>
      </section>
    </div>
  )
}

export default Research
