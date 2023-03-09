import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHouse, 
    faAddressCard, 
    faFolderPlus
} from '@fortawesome/free-solid-svg-icons';
import Home from '../../views/HomeView/Home';
import ContactList from '../../views/ContactListView/ContactList';
import Formulaire from '../../views/FormulaireView/Formulaire';
import { ListContact } from '../../datas/ContactList';
import './NavBar.css';


const NavBar = () => {

    const [contacts, setContacts] = useState(ListContact);

    return (
        <div>
            <nav>
                <BrowserRouter>
                    <div id="navbar">
                        {/* <button className='btn btn-secondary bouton'>
                            <Link to="/">Home</Link>
                        </button>
                        <button className='btn btn-secondary bouton'>
                            <Link to="/list">List</Link>
                        </button>
                        <button className='btn btn-secondary bouton'>
                            <Link to="/form">Form</Link>
                        </button> */}

                        <Link to="/">
                            <FontAwesomeIcon icon={faHouse} className="fontIcon"/>
                        </Link>
                        <Link to="/list">
                            <FontAwesomeIcon icon={faAddressCard} className="fontIcon"/>
                        </Link>
                        <Link to="/form">
                            <FontAwesomeIcon icon={faFolderPlus} className="fontIcon"/>
                        </Link>
                    </div>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/list' element={<ContactList contacts={contacts} setContacts={setContacts} />} />
                        <Route path='/form' element={<Formulaire contacts={contacts} setContacts={setContacts} />} />
                        <Route path='/*' element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </nav>
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default NavBar;