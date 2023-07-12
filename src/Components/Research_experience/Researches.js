import React, { useEffect, useState } from 'react';
import Research from './Research';

const Researches = () => {
    const [researches,setResearch] = useState([]);

    useEffect(()=>{
        fetch('research_experience.json')
        .then(res=>res.json())
        .then(data=>setResearch(data))
    },[])
    
    console.log(researches);
    return (
        <main style={{marginTop:"110px",backgroundColor:'rgb(247,247,247)'}}>
            <div  className='d-flex justify-content-between' style={{paddingTop:'110px',paddingLeft:'150px',paddingRight:'150px'}}>
                <section style={{marginRight:'100px'}}>
                    <p style={{fontSize:'2.70rem',fontFamily:'Montserrat,sans-serif',color:'#313131',fontWeight:''}}>Research Experience</p>
                </section>
                <section>
                    {
                        researches.map(research=><Research
                            key={research.id}
                            research={research}
                        ></Research>)
                    }
                </section>
            </div>
        </main>
    );
};

export default Researches;