import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './Formulaire.css';

const Formulaire = ({ contacts, setContacts }) => {

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");

    let navigate = useNavigate();

    function resetState() {
        setNom("");
        setPrenom("");
        setEmail("");
        setTelephone("");
    }

    function addContact() {
        let id = contacts.length + 1;
        setContacts([...contacts, { id, nom, prenom, email, telephone }]);
        resetState();
        return navigate("/list");
    }

    return (
        <div className='container'>

            <div className="card formulaire">
                <h2>Formulaire Works</h2>
                <div className="form-control">
                    <div className="mb-3">
                        <label htmlFor="nom">Nom : </label>
                        <input type="text" className='form-control' name="nom" id="nom" onChange={(e) => setNom(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="prenom">Prénom : </label>
                        <input type="text" className='form-control' name="prenom" id="prenom" onChange={(e) => setPrenom(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email : </label>
                        <input type="text" className='form-control' name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telephone">Téléphone : </label>
                        <input type="text" className='form-control' name="telephone" id="telephone" onChange={(e) => setTelephone(e.target.value)} />
                    </div>
                    <button className='btn btn-success form-control' onClick={() => addContact()}>Valider</button>
                </div>
            </div>
        </div>
    );
};

export default Formulaire;