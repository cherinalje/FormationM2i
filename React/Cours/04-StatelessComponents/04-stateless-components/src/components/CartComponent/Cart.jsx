import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cart, updateCart }) => {
    // Declaration d'un state local afin de connaitre l'etat du panier 
    const [isOpen, setIsOpen] = useState(false);

    // calculer le montant du panier
    const Total = cart.reduce((acc, cours) => acc + (cours.amount * cours.price), 0);

    return isOpen ? (
        <div className='relative'>
            <div className="cart-list over">
                {
                    // Vérifie la présence de formation dans le panier
                    cart.length > 0 ?
                        <div>
                            <h2>Panier</h2>
                            <div className='inner-card'>
                                {/* Affichage des formations présente dans le panier */}
                                {
                                    cart.map(({ name, price, amount }, index) => (
                                        <div key={index}>
                                            {name} : {price}€ x {amount} <button>X</button>
                                            <hr />
                                        </div>
                                    ))
                                }
                                <h3>Total : {Total}€</h3>
                            </div>
                            <div>
                                <button className='btn btn-secondary space-top' onClick={() => updateCart([])}>Payer</button>
                            </div>
                            <div>
                                <button className='btn btn-secondary space-top' onClick={() => updateCart([])}>Vider Panier</button>
                            </div>

                        </div>
                        :
                        // Si aucune formation n'est présente dans le panier
                        <div className='vide'>Votre panier est vide</div>

                }
                <button className='btn btn-secondary spaced' onClick={() => setIsOpen(false)}>Fermer le panier</button>
            </div>

        </div>
    )
        :
        (
            <button className='btn btn-secondary spaced' onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
        );
};

export default Cart;