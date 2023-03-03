import React from 'react';
import './FormationCard.css';
import CareScale from '../CareScaleCompoment/CareScale';

const FormationCard = ({cours, index}) =>{
{/** cours qu'on va chercher dans courlist */}
    return (
        <div className="card formation" key={index}> 

            <div className="card-title">
                {cours.name}
            </div>

            <div>
                <img className='image' src={cours.logo} alt={"Logo du Cours" + cours.name} />
            </div>

            <div className="category">
                <span>Category : <b>{cours.category}</b></span>
            </div>

            <div className="difficulty">
                <span className='diff-label'>Difficulté : </span>
                {/**création du composant CareScale */}
                <CareScale scalevalue={cours.difficulte} className="star"/>
            </div>

            <div className="price">
                <span> Prix : <b>{cours.price}</b></span>
            </div>
        </div>
    )
}

export default FormationCard;