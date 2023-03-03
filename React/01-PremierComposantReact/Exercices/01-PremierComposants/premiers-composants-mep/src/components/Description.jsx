import React, { Component } from 'react';

class Description extends Component {

    constructor(props){
        super(props)
        this.state = {
            text : 'Votre Formation Sur Mesure'
        };
    }
    render() {
        return (
            <span>
                <i>{this.state.text.toLowerCase()}</i>
            </span>
        );
    }
}

export default Description;