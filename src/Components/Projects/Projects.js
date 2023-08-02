import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Col, Nav, Row, Tab, Tabs } from 'react-bootstrap'
import Project from './Project'

const Projects = () => {
  const [buttonName, setButtonName] = useState('robotics')
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('allProjects.json')
      .then(res => res.json())
      .then(data => {
        const roboticsProject = []
        data.forEach(element => {
          //categorize each project according button name
          if (element.category === buttonName) {
            roboticsProject.push(element)
          }
        })
        setProjects(roboticsProject)
        if (buttonName === 'All') {
          setProjects(data)
        }
      })
  }, [buttonName])
  const handleButton = e => {
    console.log(e.target.name)
    setButtonName(e.target.name)
  }

  return (
    <main
      id='projects'
      style={{ marginTop: '', backgroundColor: 'rgb(247,247,247)' }}
    >
      <div
        className='d-flex justify-content-center'
        style={{
          paddingTop: '110px',
          paddingLeft: '150px',
          paddingRight: '150px'
        }}
      >
        <section style={{ marginRight: '170px' }}>
          <p
            style={{
              fontSize: '2.90rem',
              fontFamily: 'Montserrat,sans-serif',
              color: '#313131',
              fontWeight: ''
            }}
          >
            Projects
          </p>
        </section>
        <section style={{ width: '800px', marginLeft: '170px' }}>
          <div className='d-flex mb-5'>
            <ButtonGroup onClick={handleButton} size='lg' className='mb-2'>
              <Button
                variant='success'
                name='robotics'
                className={buttonName === 'Robotics' ? 'active' : ''}
              >
                Robotics
              </Button>
              <Button
                variant='success'
                name='Social'
                className={buttonName === 'Social' ? 'active' : ''}
              >
                Social
              </Button>
              <Button
                variant='success'
                name='AI'
                className={buttonName === 'AI' ? 'active' : ''}
              >
                AI and IOT
              </Button>
              <Button
                variant='success'
                name='All'
                className={buttonName === 'All' ? 'active' : ''}
              >
                All
              </Button>
            </ButtonGroup>
          </div>
          <div>
            {projects?.map(project => (
              <Project key={project.id} project={project}></Project>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Projects
