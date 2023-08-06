import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Header.css'
const Header = () => {
  return (
    <div className='nav-container mb-5'>
      <Navbar
        fixed='top'
        bg='dark'
        variant='dark'
        expand='lg'
        style={{ height: '80px' }}
      >
        <Container>
          <Navbar.Brand className='me-3 ' href='/'>
            <span style={{ fontSize: '22px' }}>Shaekh Shithil</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link
                href='/#publications'
                className='text-white me-3 links'
                style={{ fontSize: '22px' }}
              >
                Publications
              </Nav.Link>
              <Nav.Link
                href='/#features'
                className='text-white me-3 links'
                style={{ fontSize: '22px' }}
              >
                Featured Works
              </Nav.Link>
              <Nav.Link
                href='/#projects'
                className='text-white me-3 links'
                style={{ fontSize: '22px' }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href='/#researchs'
                className='text-white me-3 links'
                style={{ fontSize: '22px' }}
              >
                Research Work Experience
              </Nav.Link>
              <Nav.Link
                href='https://drive.google.com/file/d/1QgMUABsMppMlVZXlZuaLJ55tcYYSA1sZ/view?usp=sharing'
                className='text-white me-3 links'
                style={{ fontSize: '22px' }}
              >
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
