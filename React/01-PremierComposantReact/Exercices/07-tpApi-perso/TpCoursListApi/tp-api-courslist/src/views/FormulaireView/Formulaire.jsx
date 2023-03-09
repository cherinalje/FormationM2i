import React, { useState } from 'react';
import './Formulaire.css';

const Formulaire = () => {

    function handleSubmit(e) {
        e.preventDefault();
        alert(e.target["nom"].value);
        alert(e.target["prenom"].value);
        alert(e.target["email"].value);
        alert(e.target["demande"].value);
        alert(e.target["formtextarea"].value);
    }

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("");
    const [text, setText] = useState("");

    return (
        <div className='container'>
            <h1>Les Formulaires en React</h1>
            <div className="card formulaire">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="mb-3">
                            <label htmlFor="nom">Nom : </label>
                            <input type="text" name="nom" id="nom" className='form-control' onChange={(e) => setNom(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="prenom">Prénom : </label>
                            <input type="text" name="prenom" id="prenom" className='form-control' onChange={(e) => setPrenom(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email : </label>
                            <input type="email" name="email" id="email" className='form-control' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <select name="demande" id="demande" className='form-select' defaultValue={"default"} onChange={(e) => setType(e.target.value)}>
                            <option value="default" disabled>Choissez le type de demande</option>
                            <option value="1">Renseignement à propos d'une formation</option>
                            <option value="2">Demande de rendez-vous</option>
                            <option value="3">Autres demandes...</option>
                        </select>
                        <div className="mb-3">
                            <label htmlFor="formtextarea">TextArea : </label>
                            <textarea rows="10" name="formtextarea" id="formtextarea" className='form-control' onChange={(e) => setText(e.target.value)} />
                        </div>
                        <button className='btn btn-secondary' type="submit">Valider</button>
                    </div>
                </form>
            </div>
            <h1>Affichage des states</h1>
            <div className="card formulaire">
                <div className="form-control">
                    <div className="mb-3">
                        <label htmlFor="nomState">Nom : </label>
                        <input type="text" name="nomState" id="nomState" placeholder={nom} className='form-control' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="prenomState">Prénom : </label>
                        <input type="text" name="prenomState" id="prenomState" placeholder={prenom} className='form-control' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailState">Email : </label>
                        <input type="email" name="emailState" id="emailState" placeholder={email} className='form-control' />
                    </div>
                    <select name="demandeState" id="demandeState" className='form-select' value={type} >
                        <option value="default" disabled>Choissez le type de demande</option>
                        <option value="1">Renseignement à propos d'une formation</option>
                        <option value="2">Demande de rendez-vous</option>
                        <option value="3">Autres demandes...</option>
                    </select>
                    <div className="mb-3">
                        <label htmlFor="formtextareaState">TextArea : </label>
                        <textarea rows="10" name="formtextareaState" id="formtextareaState" placeholder={text} className='form-control' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Formulaire;