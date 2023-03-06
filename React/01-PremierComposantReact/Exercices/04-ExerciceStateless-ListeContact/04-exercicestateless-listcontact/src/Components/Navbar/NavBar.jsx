import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Link
} from 'react-router-dom';
import './NavBar.css'
import Home from '../../Views/HomeView/Home';
import ContactList from '../../views/List/ContactList';
import AddPerson from '../../views/AddPersonView/AddPerson';
const NavBar = () => {
    return (
        <div>
            <BrowserRouter>
                {/* Définition des boutons */}
                <div id="navbar">
                    <button className='bouton'>
                        <Link to="/">Home</Link>
                    </button>
                    <button className='bouton'>
                        <Link to="/list">List de contact</Link>
                    </button>
                    <button className='bouton'>
                        <Link to="/form">ajouter un Contact</Link>
                    </button>
                   
                </div>
                {/* Définition des routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<Contactlist cart={cart} updateCart={updateCart}/>} />
                    <Route path="/form" element={<Formulaire />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/*" element={<Home />} />
                </Routes>
            </BrowserRouter> 
        </div>
    );
};

export default NavBar;