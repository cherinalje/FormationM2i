import React, { Component } from 'react';
import './About.css';


const About = () =>{

        return (
            <div>
                <h1>A propos de cette Application Web ...</h1>

                <img src="./img/logo512.png" alt="Une Superbe Photo!" />

                <div className='m-1 author'>

                    <span>Ce cours</span>
                    <span className='value'>React c'est trop Facile</span>
                </div>
            </div>

        );
    
}

export default About;