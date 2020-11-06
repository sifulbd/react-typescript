import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [svf, setSvf] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(dt => setSvf(dt))
    }, [])
    return (
       
        <div style={{padding: '15px'}}>
            {
                svf.map((sf, index) => <Service sf={sf} key={index}></Service>)
            }
        </div>
    );
};

export default Services;