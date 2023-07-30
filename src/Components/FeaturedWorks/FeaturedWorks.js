import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Work from './Work'

const FeaturedWorks = () => {
  const [works, setWorks] = useState([])

  useEffect(() => {
    fetch('featured-work.json')
      .then(res => res.json())
      .then(data => setWorks(data))
  }, [])

  return (
    <main style={{ marginTop: '', backgroundColor: 'white' }}>
      <div
        className='d-flex justify-content-center'
        style={{
          paddingTop: '110px',
          paddingLeft: '150px',
          paddingRight: '150px'
        }}
      >
        <section style={{ marginRight: '155px' }}>
          <p
            style={{
              fontSize: '2.90rem',
              fontFamily: 'Montserrat,sans-serif',
              color: '#313131',
              fontWeight: ''
            }}
          >
            Featured <br /> Work
          </p>
        </section>
        <section>
          {works.map(work => (
            <Work key={work.id} work={work}></Work>
          ))}
        </section>
      </div>
    </main>
  )
}

export default FeaturedWorks
