import React, { useEffect, useState } from 'react'
import Publication from './Publication'

const Publications = () => {
  const [publications, setPublications] = useState([])

  useEffect(() => {
    fetch('publications.json')
      .then(res => res.json())
      .then(data => setPublications(data))
  }, [])
  return (
    <main
      id='publications'
      style={{ marginTop: '110px', backgroundColor: 'rgb(247,247,247)' }}
    >
      <div
        className='d-flex justify-content-center'
        style={{
          paddingTop: '110px',
          paddingLeft: '150px',
          paddingRight: '150px'
        }}
      >
        <section style={{ marginRight: '100px' }}>
          <p
            style={{
              fontSize: '2.90rem',
              fontFamily: 'Montserrat,sans-serif',
              color: '#313131',
              fontWeight: ''
            }}
          >
            Publications
          </p>
        </section>
        <section>
          {publications.map(publication => (
            <Publication
              key={publication.id}
              publication={publication}
            ></Publication>
          ))}
        </section>
      </div>
    </main>
  )
}

export default Publications
