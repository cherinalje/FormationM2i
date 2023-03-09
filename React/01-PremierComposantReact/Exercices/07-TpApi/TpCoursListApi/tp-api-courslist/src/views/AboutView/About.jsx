import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <h1>A propos de cette application Web...</h1>

            <img src="./img/avatar.png" alt="Une Superbe Photo!" className='img' />
            <div className="m-1 author">
                <span className='key'>Author : </span>
                <span className='value'>Anthony Di Persio</span>
            </div>
        </div>
    );
};

export default About;