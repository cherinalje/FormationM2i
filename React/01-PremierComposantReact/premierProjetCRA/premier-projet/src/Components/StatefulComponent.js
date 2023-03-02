import React, { Component } from 'react';
import StatelessCompoment from './StatelessCompoment';


class StatefulComponent extends Component {
    constructor (props){
        super (props)
        this.state = {
            prenom:"Magalie",
            propEnfant: "Anthony"
        };
    }
    ChangeState = (event) =>{
        this.setState({
            propEnfant : event.target.value
            
        })
    }


    render() {
        return (
            <div>
              {/*<h1>StatefulCompoment {this.props.nom} :</h1>*/  }
              {/*<h2>StatefulCompoment {this.state.prenom} :</h2> */} 
              <label>Nom :</label>
              <input type="text" onChange={this.ChangeState} />
              
              
              <ul>
                <li>Apprendre react</li>
                <li>Continuer à faire des exercices</li>
                <li>What else ...?</li>
            </ul>
            <StatelessCompoment nom = {this.state.propEnfant}/>
            </div>
        );
    }
}

export default StatefulComponent;