import React from 'react';
import CareScale from '../CareScaleComponent/CareScale';
import './FormationCard.css';

const FormationCard = ({cours, AddToCart}) => {
    return (
        <div className='card formation'>
            <div className="card-title strong">
                {cours.name}
            </div>
            <div>
                <img className='image' src={cours.logo} alt={"Logo " + cours.name} />
            </div>
            <div className="category">
                <span>Catégorie : <b>{cours.category}</b></span>
            </div>
            <div className="difficulty">
                <span className='diff-label'>Difficulté : </span>
                <CareScale scalevalue={cours.difficulte}/>
            </div>
            <div className="price">
                <span>Prix : <b>{cours.price}</b>€</span>
            </div>
            <button className='btn btn-secondary' onClick={()=>AddToCart(cours.name, cours.price)}>Add To Cart</button>
        </div>
    );
};

export default FormationCard;