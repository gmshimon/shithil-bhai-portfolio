import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Publication.css'
import { Button } from 'react-bootstrap'

const Publication = ({ publication }) => {
  const navigate = useNavigate()
  const {
    id,
    title,
    abstract,
    authors,
    published,
    image,
    pdf,
    type_of_published,
    video
  } = publication
  return (
    <section className='d-flex mb-5'>
      <div className='me-4' style={{ width: '600px' }}>
        <h3
          onClick={() => navigate(`/publications/${id}`)}
          className='title'
          style={{ fontSize: '1.8rem', fontWeight: '700' }}
        >
          {title}
        </h3>
        <p style={{ fontSize: '1.2rem', color: 'inherit', fontWeight: '400' }}>
          {abstract}
        </p>
        <p
          style={{
            fontSize: '16px',
            color: 'rgba(0,0,0,0.54)',
            overflow: 'hidden',
            letterSpacing: '0.03em'
          }}
        >
          {authors}
        </p>
        <a href={pdf} target='_blank'>
          <Button className='me-3' variant='outline-primary'>
            PDF
          </Button>
        </a>
        {video && (
          <a href={video} target='_blank'>
            <Button variant='outline-primary'>Video</Button>
          </a>
        )}
      </div>
      <div>
        <img
          className='img'
          style={{ width: '250px', height: '200px' }}
          src={image}
          alt=''
        />
      </div>
    </section>
  )
}

export default Publication
