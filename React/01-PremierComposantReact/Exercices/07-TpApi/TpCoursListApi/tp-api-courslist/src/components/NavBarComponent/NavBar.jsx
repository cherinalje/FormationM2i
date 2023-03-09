import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Link
} from 'react-router-dom';
import './NavBar.css';
import Home from '../../views/HomeView/Home';
import About from '../../views/AboutView/About';
import FormationList from '../../views/FormationList/FormationList';
import Formulaire from '../../views/FormulaireView/Formulaire';

const NavBar = ({ cart, updateCart }) => {
    return (
        <div>
            {/* Insertion de mon objet router */}
            <BrowserRouter>
                {/* Définition des boutons */}
                <div id="navbar">
                    <button className='bouton'>
                        <Link to="/">Home</Link>
                    </button>
                    <button className='bouton'>
                        <Link to="/list">List</Link>
                    </button>
                    <button className='bouton'>
                        <Link to="/form">Form</Link>
                    </button>
                    <button className='bouton'>
                        <Link to="/about">About</Link>
                    </button>
                </div>
                {/* Définition des routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<FormationList cart={cart} updateCart={updateCart}/>} />
                    <Route path="/form" element={<Formulaire />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/*" element={<Home />} />
                </Routes>
            </BrowserRouter>

            <div className="container">
                <Outlet />
            </div>

        </div>


    );
};

export default NavBar;