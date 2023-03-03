import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <h1>A propos de cette Application</h1>
                <img src="./img/logo512.png" alt="Une Superbe Photo!" />
                <div className='m-1 author'>
                    <span>Author</span>
                </div>
                <div className="m-1"></div>
                <span className='value'>Anthony Di Persio</span>
            </div>
        );
    }
}

export default About;