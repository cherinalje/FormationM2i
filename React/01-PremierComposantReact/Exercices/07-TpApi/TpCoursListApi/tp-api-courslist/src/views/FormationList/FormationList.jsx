import React, { useState } from 'react';
import Cart from '../../components/CartComponent/Cart';
import Category from '../../components/Category/Category';
import FormationCard from '../../components/FormationCard/FormationCard';

import './FormationList.css';

const FormationList = ({ cart, updateCart }) => {
    const [activeCategory, setActiveCategory] = useState('');
    const [coursList, setCoursList] = useState([]);

    // const categoryList = coursList.map(  <= L'erreur était ici j'ai utilisé la fonction map au lieu de reduce (map n'a pas d'accumulateur)
    const categoryList = coursList.reduce(
        (accumulateur, cours) =>
            // J'itére la liste de cours et j'ajoute à l'accumulateur la catégorie si elle n'est pas déjà présente sinon je conserve l'accumulateur
            accumulateur.includes(cours.category) ? accumulateur : accumulateur.concat(cours.category),
        []
    )

    function AddToCart(name, price) {
        // Rechercher si la formation est déjà présente dans le panier
        const formationAdded = cart.find((cours) => cours.name === name);
        // Vérifier si elle est présente
        if (formationAdded) {
            const filtredCart = cart.filter(
                (cours) => cours.name !== name
            )
            updateCart([
                ...filtredCart,
                { name, price, amount: formationAdded.amount + 1 }
            ])
        }
        else {
            updateCart([
                ...cart,
                { name, price, amount: 1 }
            ])
        }
        alert(`la formation ${name} a été ajoutée.`)
    }


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
                        <Cart cart={cart} updateCart={updateCart}/>
                    </div>
                </div>
            </div>
            {/* Conteneur de Card */}
            <div className="card-container">
                {coursList.map((coursIterer, index) =>
                    !activeCategory || activeCategory === coursIterer.category ?


                        <React.Fragment key={index}>
                            <FormationCard cours={coursIterer} AddToCart={AddToCart} />
                        </React.Fragment>
                        :
                        null
                )}
            </div>
        </div>
    );
};

export default FormationList;