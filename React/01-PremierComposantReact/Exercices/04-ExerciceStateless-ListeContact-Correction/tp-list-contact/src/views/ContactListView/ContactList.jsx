import React from 'react';
import './ContactList.css';

const ContactList = ({ contacts, setContacts }) => {
    return contacts ? (
        <div className='container'>
            <h1 className='title'>Liste de Contact</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Téléphone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contact,index) =>
                            <React.Fragment key={index}>
                                <tr>
                                    <th scope='col'>{contact.id}</th>
                                    <td>{contact.nom}</td>
                                    <td>{contact.prenom}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.telephone}</td>
                                </tr>
                            </React.Fragment>
                        )

                    }
                </tbody>
            </table>
        </div>
    )
        :
        (<div>
            <h3>Aucun contacts dans la liste</h3>
        </div>);
};

export default ContactList;