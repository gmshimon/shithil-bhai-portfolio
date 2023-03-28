import React, { useEffect, useState } from 'react';
import Publication from './Publication';

const Publications = () => {
    const [publications,setPublications] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setPublications(data))
    },[])
    return (
        <main>
            <div>
                <section>
                    <h1>Publications</h1>
                </section>
                <section>
                    {
                        publications.map(publication=><Publication
                            key={publication.id}
                            publication={publication}
                        ></Publication>)
                    }
                </section>
            </div>
        </main>
    );
};

export default Publications;