import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <img src="./img/M2ILOGO2.png" alt= "Logo m2i" className='img' />
            <h2>M2I Formation</h2>
          <span className='description'>
           <i>votre formation sur mesure</i> 
            </span>
        </div>
    );

}
       

export default Banner;