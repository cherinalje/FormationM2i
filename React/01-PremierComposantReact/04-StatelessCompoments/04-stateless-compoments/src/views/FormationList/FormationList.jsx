import React, { useState } from 'react';
import Category from '../../components/Category/Category';
import FormationCard from '../../components/FormationCard/FormationCard';
import { coursList } from '../../datas/CoursList';
import './FormationList.css';

const FormationList = () => {
    const [activeCategory, setActiveCategory] = useState('');

    // const categoryList = coursList.map(  <= L'erreur était ici j'ai utilisé la fonction map au lieu de reduce (map n'a pas d'accumulateur)
    const categoryList = coursList.reduce(
        (accumulateur, cours) => 
        // J'itére la liste de cours et j'ajoute à l'accumulateur la catégorie si elle n'est pas déjà présente sinon je conserve l'accumulateur
        accumulateur.includes(cours.category) ? accumulateur : accumulateur.concat(cours.category),
        []
    )


    return (
        <div className='formation-list'>
            <h2>Nos Formation</h2>
            <div>
                <div className="row">
                    <div className="col-8">
                        <Category
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                            categoryList={categoryList}
                        />
                    </div>
                    <div className="col-4">
                        {/* Panier */}
                    </div>
                </div>
            </div>
            {/* Conteneur de Card */}
            <div className="card-container">
                {coursList.map((coursIterer, index) =>
                    <React.Fragment key={index}>
                        <FormationCard cours={coursIterer} />
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default FormationList;