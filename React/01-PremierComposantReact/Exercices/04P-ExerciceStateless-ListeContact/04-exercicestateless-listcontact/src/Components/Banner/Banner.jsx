import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner'>
           <img src="./img/M2ILOGO2.png" alt="Logo M2i" className='img'/>
            <h2>M2i Formation</h2>
            <span className='description'>Votre formation sur mesure</span>
        </div>
    );
};


export default Banner;