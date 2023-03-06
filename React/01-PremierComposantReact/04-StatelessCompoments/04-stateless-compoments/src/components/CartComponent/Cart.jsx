import React from 'react';
import './Cart.css';
const Cart = () => {
    //Declaration d'un state local afin de connaitre l'etat du panier
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className='realtive'>
            <button className='btn btn-secondary spaced' onClick= {()=> setIsOpen} ></button>
        </div>
    ) :
        (
            <div className='realtive'>
                <button className='' ></button>
            </div>
        );


};

export default Cart;