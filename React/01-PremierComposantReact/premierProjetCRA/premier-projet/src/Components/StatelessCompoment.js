import React, { useState } from 'react';
//const StatelessCompoment =({nom}) =>{
//const StatelessComponent = (props)
const StatelessCompoment = ({nom})=>{
    const [nomLocal,setNomLocal] = useState ("Karine");
    return(
        
        <div>

            <h2>Params {nom}:</h2>
            <h2>State local {nomLocal}:</h2>
            <label>Nom :</label>
              <input type="text" onChange={(e) => setNomLocal(e.target.value)} />
            {/*<h2>liste de choses à faire de {props.nom}:</h2>*/}
            <ul>
                <li>apprendre react</li>
                <li>faire des exercices</li>
                <li>what else ...?</li>
            </ul>
        </div>
    );
}
export default StatelessCompoment;