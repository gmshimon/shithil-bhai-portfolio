import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SinglePublication.css'
const SinglePublication = () => {
  const { id } = useParams()
  const ID = id
  const [publicationID, setPublicationID] = useState(ID)
  const [publication, setPublication] = useState({})
  const [publications, setPublications] = useState([])
  const {
    title,
    abstract,
    authors,
    published,
    image,
    pdf,
    type_of_publications,
    video
  } = publication
  useEffect(() => {
    fetch('/publications.json')
      .then(res => res.json())
      .then(data => {
        setPublications(data)
        const result = data.find(dt => dt.id == publicationID)
        setPublication(result)
      })
  }, [publicationID])
  console.log(publicationID)
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
            {title}
          </h1>
        </div>
        <p
          style={{
            color: 'rgba(0,0,0,0.54)',
            fontSize: '16px'
          }}
        >
          {authors}
        </p>
        <p
          style={{
            color: 'rgba(0,0,0,0.54)',
            fontSize: '16px',
            marginTop: '-10px'
          }}
        >
          Published at: {published}
        </p>
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
          <h3
            style={{
              fontSize: '1.8rem',
              fontWeight: '700'
            }}
          >
            Abstract
          </h3>
          <p
            style={{
              fontFamily: 'inherit',
              color: 'inherit',
              fontSize: '1.3rem',
              color: '#333375'
            }}
          >
            {abstract}
          </p>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.4rem'
                }}
              >
                Type Publication
              </p>
              <p
                style={{
                  fontWeight: '600',
                  fontSize: '1.4rem',
                  color: 'blue'
                }}
              >
                {type_of_publications}
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#B4B4B4',
              width: '70px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '50px'
            }}
          >
            <a
              href={video}
              target='_blank'
              style={{
                display: 'flex',
                justifyContent: 'center',
                textDecoration: 'none',
                color: 'black'
              }}
            >
              Video
            </a>
          </div>
        </div>
        <div
          style={{
            marginBottom: '50px',
            borderTop: '1px solid #D7D7D7',
            borderBottom: '1px solid #D7D7D7',
            height: '100px',
            borderRadius: '2px'
          }}
        ></div>
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
            {publications.map(publication => (
              <li
                onClick={() => setPublicationID(publication.id)}
                key={publication.id}
              >
                {publication.title}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default SinglePublication
