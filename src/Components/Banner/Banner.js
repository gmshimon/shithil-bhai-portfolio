import { faCoffee, faFootballBall } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <main>
      <section className='d-flex justify-content-center mt-5'>
        <section className='left-container'>
          <div>
            <img
              style={{
                marginLeft: '110px',
                width: '300px',
                height: '300px',
                borderRadius: '50%'
              }}
              src={require('../../Image/shithil_bhai_dp.png')}
              alt='profile'
            />
          </div>
          <div>
            <h2
              className='text-center mt-3'
              style={{
                fontFamily: 'Montserrat,sans-serif',
                lineHeight: '1.25',
                fontSize: '1.9em',
                color: '#000000',
                fontWeight: '100'
              }}
            >
              Shaekh Mohammad Shithil
            </h2>
            <h3
              className='fw-light text-center'
              style={{
                fontFamily: 'Montserrat,sans-serif',
                fontSize: '1.50rem',
                fontWeight: '200',
                color: 'rgba(0,0,0,0.54)'
              }}
            >
              Bachelor of Engineering in Mechanical Engineering
            </h3>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='d-flex mt-4 icon-container'>
              <div className='me-3' style={{ width: '30px' }}>
                <i
                  className='fa-brands fa-linkedin fa-2xl icons'
                  style={{ color: '#015af4' }}
                ></i>
              </div>
              <div className='me-3' style={{ width: '30px' }}>
                <i
                  className='fa-brands fa-square-facebook fa-2xl icons'
                  style={{ color: '#015af4' }}
                ></i>
              </div>
              <div style={{ width: '30px' }}>
                <i
                  className='fa-brands fa-instagram fa-2xl icons'
                  style={{ color: '#015af4' }}
                ></i>
              </div>
            </div>
          </div>
        </section>{' '}
        {/* end of the left container */}
        <section className='' style={{ width: '800px', marginLeft: '140px' }}>
          <div className='mb-3'>
            <h1
              style={{
                fontFamily: 'Montserrat',
                fontSize: '3.0rem',
                fontWeight: '400'
              }}
            >
              Biography
            </h1>
            <p
              style={{
                textAlign: 'justify',
                fontFamily: 'inherit',
                fontSize: '1.2rem',
                color: 'inherit',
                lineHeight: 'inherit'
              }}
            >
              I am Shaekh Mohammad Shithil, an ambitious and skilled individual
              with a deep passion for Robotics and Autonomous Systems. My
              research focuses on perception and decision-making for autonomous
              systems navigating complex real-world environments My journey
              began at University of Technology Malaysia (UTM), where I pursued
              a Bachelor of Engineering in Mechanical Engineering. I worked as a
              Research Assistant in Actuator and Automation Lab, developing
              autonomy algorithms for robust multi-sensor fusion-based visual
              navigation system for indoor drones, including Lidar-based
              perception systems for mobile robot mapping, inspection, and
              search and rescue applications. As a Robotics R&D Engineer at A2
              Tech Sdn.Bhd., I led the development of a Semi-Autonomous Unmanned
              Ground Vehicle (UGV) aimed at assisting Malaysian firefighters in
              high-risk search and rescue missions. I have published several
              research papers and won prestigious awards for my innovative ideas
              and problem-solving skills. As a team player, I have demonstrated
              leadership capabilities in various research and development
              endeavors.
            </p>
          </div>

          <section className='d-flex' style={{ marginTop: '40px' }}>
            <div style={{ marginRight: '150px' }}>
              <h3 style={{ fontWeight: '700', fontSize: '2rem' }}>Interests</h3>
              <ul>
                <li
                  style={{
                    fontSize: '1.3rem',
                    fontFamily: 'inherit',
                    color: 'inherit'
                  }}
                >
                  Autonomous Robot
                </li>
                <li
                  style={{
                    fontSize: '1.3rem',
                    fontFamily: 'inherit',
                    color: 'inherit'
                  }}
                >
                  Perception & Navigation
                </li>
                <li
                  style={{
                    fontSize: '1.3rem',
                    fontFamily: 'inherit',
                    color: 'inherit'
                  }}
                >
                  Inspection Robotics
                </li>
                <li
                  style={{
                    fontSize: '1.3rem',
                    fontFamily: 'inherit',
                    color: 'inherit'
                  }}
                >
                  Data Science & AI
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontWeight: '700', fontSize: '2rem' }}>Education</h3>
              <div className='d-flex mt-4'>
                <i className='fa-solid fa-graduation-cap fa-lg'></i>
                <div className='ms-3'>
                  <p style={{ fontSize: '1.2rem', lineHeight: '1px ' }}>
                    University of Technology Malaysia (UTM)
                  </p>
                  <p style={{ fontSize: '1.2rem', color: 'rgba(0,0,0,0.6)' }}>
                    Bachelor of Engineering in Mechanical Engineering
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </main>
  )
}

export default Banner
