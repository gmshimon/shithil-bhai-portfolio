import React from 'react';

const Project = ({project}) => {
    const {id,name,intro,image,category,site} = project;
    console.log(project);
    return (
        <div style={{ marginBottom: '4rem' }}>
      <section className='d-flex '>
        <div className='me-5'>
          <a className='research_title' href={category==="Robotics"&&site} target='_blank'>
             <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold',cursor:'pointer' }}>{name}</h3>
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
          <img style={{width:'150px',height:'75px'}} src={image} alt='' />
        </div>
      </section>
    </div>
    );
};

export default Project;