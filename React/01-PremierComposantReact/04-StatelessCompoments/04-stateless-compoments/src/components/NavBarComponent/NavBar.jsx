import React, { Component } from 'react';
import {    
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Link
} from 'react-router-dom';
import Home from '../../views/homeView/Home';
import About from '../../views/AboutView/About'
import './Navbar.css';
import FormationList from '../../views/FormationList/FormationList';

const NavBar = ()=> {
    return (    
        <div>
            {/**Insertion de mon objet router */}
            <BrowserRouter>
            {/**définition des bouttons */}
            <div id="navbar">
                <button className='bouton'>
                  <Link to="/"> Home</Link> 
                </button>
                <button className='bouton'>
                    <Link to='/list'>List</Link>
                </button>
                <button className='bouton'>
                    <Link to='/about'>About</Link>
                </button>
                

                </div>
                {/** Définition des Routes*/}
                <Routes>
                <Route path="/" element= {<Home/>}/>
                <Route path="/list" element ={<FormationList/>}/>
                <Route path="/about" element ={<About/>}/>
                </Routes>
            </BrowserRouter>
            <div className="container">
                <Outlet/>
            </div>
        </div>
    )
}


export default NavBar;