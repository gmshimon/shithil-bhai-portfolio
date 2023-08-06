import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const SingleFeatured = () => {
  const { id } = useParams()
  const ID = id
  const [featuredWorkID, setFeaturedWorkID] = useState(ID)
  const [featuredWork, setFeaturedWork] = useState({})
  const [featuredWorks, setFeaturedWorks] = useState([])

  const { name, date, site, image, description, category, intro } = featuredWork
  useEffect(() => {
    fetch('/allProjects.json')
      .then(res => res.json())
      .then(data => {
        setFeaturedWorks(data)
        const result = data.find(dt => dt.id == featuredWorkID)
        setFeaturedWork(result)
        window.scrollTo(0, 0)
      })
  }, [featuredWorkID])
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px'
      }}
    >
      <section style={{ width: '700px' }}>
        <div>
          <h1
            style={{
              fontSize: '2.80rem',
              fontWeight: '100',
              fontFamily: 'Montserrat,sans-serif',
              color: '#313131',
              lineHeight: '1.12',
              marginBottom: '15px'
            }}
          >
            {name}
          </h1>
        </div>
        <p
          style={{
            color: 'rgba(0,0,0,0.54)',
            fontSize: '16px',
            marginTop: '10px'
          }}
        >
          {date}
        </p>

        <Button variant='outline-primary'>
          <a
            target='_blank'
            style={{
              textDecoration: 'none',
              fontWeight: '600',
              color: 'black'
            }}
            href={site}
          >
            Project Link
          </a>
        </Button>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px'
          }}
        >
          <img style={{ width: '700px', height: '500px' }} src={image} />
        </div>
        <div
          style={{
            marginTop: '50px'
          }}
        >
          <p
            style={{
              fontFamily: 'inherit',
              color: 'inherit',
              fontSize: '1.3rem',
              color: '#1E1E2A',
              textAlign: 'justify'
            }}
          >
            {description}
          </p>
          <div
            style={{
              backgroundColor: '#B4B4B4',
              width: '70px',
              borderRadius: '5px',
              marginBottom: '50px'
            }}
          >
            <p
              style={{
                display: 'flex',
                justifyContent: 'center',
                textDecoration: 'none',
                color: 'black'
              }}
            >
              {category}
            </p>
          </div>
        </div>
        <div
          style={{
            marginBottom: '50px',
            borderTop: '1px solid #D7D7D7',
            borderBottom: '1px solid #D7D7D7',
            height: '200px',
            borderRadius: '2px'
          }}
        >
          <div
            className='d-flex align-items-center justify-content-center'
            style={{ marginTop: '20px' }}
          >
            <div style={{ marginRight: '100px' }}>
              <img
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '200px'
                }}
                src={require('../../../Image/shithil_bhai_dp.jpg')}
                alt=''
              />
            </div>
            <div>
              <h3>
                <a
                  href='https://github.com/shaekhShithil'
                  target='_blank'
                  style={{
                    textDecoration: 'none',
                    color: 'rgba(0,0,0,0.84)',
                    fontWeight: '700'
                  }}
                >
                  Shaekh Mohammad Shithil
                </a>
              </h3>
              <h3
                className='fw-light'
                style={{
                  fontFamily: 'Montserrat,sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: '200',
                  color: 'rgba(0,0,0,0.54)'
                }}
              >
                Bachelor of Engineering in Mechanical Engineering
              </h3>
              <p
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1px ',
                  color: 'rgba(0,0,0,0.76)'
                }}
              >
                University of Technology Malaysia (UTM)
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3
            style={{
              fontWeight: '700',
              marginBottom: '30px'
            }}
          >
            Related
          </h3>
          <ul>
            {featuredWorks.map(work => (
              <li onClick={() => setFeaturedWorkID(work.id)} key={work.id}>
                {work.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default SingleFeatured
