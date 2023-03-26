import { faCoffee, faFootballBall } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <main>
            <section className='d-flex justify-content-center mt-5'>
                <section className='left-container'>
                    <div>
                    <img style={{width:'300px',height:'300px',borderRadius:'50%'}} src={require('../../Image/shithil_bhai_dp.png')} alt="profile"/>
                    </div>
                    <div>
                        <h2 className="text-center mt-3" style={{fontFamily:'Montserrat,sans-serif',lineHeight:'1.25',fontSize:'2.4em',color:'#000000',fontWeight:'100'}}>Sheikh Shithil</h2>
                        <h3 className='fw-light text-center' style={{fontFamily:'Montserrat,sans-serif',fontSize:'1.75rem',fontWeight:'200',color:'rgba(0,0,0,0.54)'}}>BSc Student in UTM</h3>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className='d-flex mt-4 icon-container'>
                            <div className='me-3' style={{width:'30px'}}>
                                <i className="fa-brands fa-linkedin fa-2xl icons" style={{color:'#015af4'}}></i>
                            </div>
                            <div className='me-3' style={{width:'30px'}}>
                                <i className="fa-brands fa-square-facebook fa-2xl icons" style={{color:'#015af4'}}></i>
                            </div>
                            <div style={{width:'30px'}}>
                                <i className="fa-brands fa-instagram fa-2xl icons" style={{color:'#015af4'}}></i>
                            </div>
                        </div>
                    </div>
                </section> {/* end of the left container */}

                <section className='' style={{width:'800px',marginLeft:'140px'}}>
                    <div className='mb-3'>
                        <h1 style={{fontFamily:'Montserrat',fontSize:'3.0rem',fontWeight:'400'}}>Biography</h1>
                        <p style={{fontFamily:'inherit',fontSize:'1.4rem',color:'inherit',lineHeight:'inherit'}}>I’m a PhD student in Aeronautics and Astronautics at Stanford University, focusing on robotics and autonomous systems. My research focuses on learning and decision-making for autonomous systems navigating complex real-world environments.</p>
                        <p style={{fontFamily:'inherit',fontSize:'1.4rem',color:'inherit',lineHeight:'inherit'}}>Prior to Stanford, I was a Visiting Robotics Researcher at NASA JPL, developing autonomy algorithms for autonomous exploration of extreme environments, including the DARPA Subterranean Challenge. I completed a joint Master’s thesis at NASA JPL and in Autonomous System Lab (ASL) at ETH Zurich, supervised by Dr. Ali Agha, Dr. Juan Nieto, and Prof. Roland Siegwart.</p>
                    </div>

                    <section className='d-flex' style={{marginTop:'40px'}}>
                        <div style={{marginRight:'150px'}}>
                            <h3 style={{fontWeight:'700',fontSize:'2rem'}}>Interests</h3>
                            <ul>
                                <li style={{fontSize:'1.3rem',fontFamily:'inherit',color:'inherit'}}>Robotics</li>
                                <li style={{fontSize:'1.3rem',fontFamily:'inherit',color:'inherit'}}>Machine Learning</li>
                                <li style={{fontSize:'1.3rem',fontFamily:'inherit',color:'inherit'}}>Planning and Control</li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{fontWeight:'700',fontSize:'2rem'}}>Education</h3>
                            <div className='d-flex mt-4'>
                                <i className="fa-solid fa-graduation-cap fa-lg"></i>
                                <div className='ms-3'>
                                    <p style={{fontSize:'1.2rem',lineHeight:'1px '}}>Standord University</p>
                                    <p style={{fontSize:'1.2rem',color:'rgba(0,0,0,0.6)'}}>PhD in Aeronautics and Astronautics</p>
                                </div>
                            </div>
                            <div className='d-flex mt-1'>
                                <i className="fa-solid fa-graduation-cap fa-lg"></i>
                                <div className='ms-3'>
                                    <p style={{fontSize:'1.2rem',lineHeight:'1px '}}>ETH Zurich</p>
                                    <p style={{fontSize:'1.2rem',color:'rgba(0,0,0,0.6)'}}>MSc in Robotics, System, and Control</p>
                                </div>
                            </div>
                            <div className='d-flex mt-1'>
                                <i className="fa-solid fa-graduation-cap fa-lg"></i>
                                <div className='ms-3'>
                                    <p style={{fontSize:'1.2rem',lineHeight:'1px '}}>Bandung Institute of Technology</p>
                                    <p style={{fontSize:'1.2rem',color:'rgba(0,0,0,0.6)'}}>BSc in Electrical Engineering</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </main>
    );
};

export default Banner;