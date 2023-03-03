import React, { Component } from 'react';

const FormationCard = ({cours, index}) =>{
{/** cours qu'on va chercher dans courlist */}
    return (
        <div className="card" key={index}> 
        
            <div className="card-title">
                {cours.name}
            </div>

            <div>
                <img className='img' src={cours.logo} alt={"Logo du Cours" + cours.name} />
            </div>

            <div className="category">
                <span>Category : <b>{cours.category}</b></span>
            </div>

            <div className="difficulty">
                <span className='diff-label'>Difficulté : {cours.difficulte}</span>
                {/**création du composant CareScale */}
            </div>

            <div className="price">
                <span> Prix : <b>{cours.price}</b></span>
            </div>
        </div>
    )
}

export default FormationCard;