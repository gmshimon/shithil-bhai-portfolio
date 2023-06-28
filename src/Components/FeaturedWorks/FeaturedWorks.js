import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const FeaturedWorks = () => {
    const[works,setWorks] = useState([]);

    useEffect(()=>{
        fetch('project.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])

    return (
        <main>
            <div>
            <section>
                
                </section>
            </div>
        </main>
    );
};

export default FeaturedWorks;