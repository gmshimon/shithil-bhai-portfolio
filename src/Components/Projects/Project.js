import React from 'react'
import { useNavigate } from 'react-router-dom'

const Project = ({ project }) => {
  const { id, name, intro, image, category, site } = project
  const navigate = useNavigate()
  // console.log(project)
  return (
    <div style={{ marginBottom: '4rem' }}>
      <section className='d-flex '>
        <div className='me-5' style={{ width: '700px' }}>
          <a
            className='research_title'
            href={category === 'Robotics' && site}
            target='_blank'
          >
            <h3
              style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
              onClick={() => navigate(`/feature-work/${id}`)}
            >
              {name}
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
            {intro}
          </p>
        </div>
        <div>
          <img style={{ width: '150px', height: '75px' }} src={image} alt='' />
        </div>
      </section>
    </div>
  )
}

export default Project
