import React, { useState } from 'react';

const StatelessComponent = ({ nom }) => {
    const [nomLocal, setNomLocal] = useState("Karine");
    
    return (
        <div>
            <label>Nom : </label>
            <input type="text" onChange={(e)=>setNomLocal(e.target.value)} />
            <h2>Params : {nom}</h2>
            <h2>State Local : {nomLocal}</h2>
            <ul>
                <li>Apprendre React</li>
                <li>Faire des exercices</li>
                <li>What else...?</li>
            </ul>
        </div>
    );
};

export default StatelessComponent;