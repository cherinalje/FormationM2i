import React, { Component } from 'react';
import StatelessComponent from './StatelessComponent';

class StatefulComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            prenom :"Magalie",
            propEnfant : "Anthony"
        };
    }
    ChangeState = (event) =>{
        this.setState({
            propEnfant : event.target.value,
           
        })
    }
    render() {
        return (
            <div>
                {/* <h2>Liste de chose à faire de {this.props.nom}:</h2> */}
                <label>Nom : </label>
                <input type="text" onChange={this.ChangeState} />
                <h2>Liste de chose à faire de {this.state.prenom}:</h2>
                <ul>
                    <li>Apprendre React</li>
                    <li>Faire des exercices</li>
                    <li>What else...?</li>
                </ul>
                <StatelessComponent nom={this.state.propEnfant}/>
            </div>
        );
    }
}

export default StatefulComponent;