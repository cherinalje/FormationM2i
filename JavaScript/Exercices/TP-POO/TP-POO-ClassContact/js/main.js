/**
 * Import
 */
import Contact from './modules/Contact.js';

/**
 * Constantes & Variables
 */
const tableau = document.querySelector('#tableau');
const validerBtn = document.querySelector('#validerBtn');
let contacts = [];







function updateTab(){
    // On vide le contenu du table
    tableau.innerHTML = '';
    // On Insert les Contacts
    let counter = 1;
    for(let contact of contacts){
        tableau.innerHTML += `<tr>
            <td scope="col">${counter}</td>
            <td scope="col">${contact.titre}</td>
            <td scope="col">${contact.nom}</td>
            <td scope="col">${contact.prenom}</td>
            <td scope="col">${contact.dateNaissance.toLocaleDateString()}</td>
            <td scope="col">${contact.telephone}</td>
            <td scope="col">${contact.email}</td>
            <td scope="col"><a>Delete</a></td>
        </tr>`;
        counter++;
    }
}



function createFake() {
    contacts.push(new Contact("Mr", "Di Persio", "Anthony", new Date("1979,06,20"), "+33 6 14 25 36 98", "anthony@utopios.net"));
    contacts.push(new Contact("Mr", "Abadi", "Ihab", new Date("1931,03,24"), "+33 6 74 41 85", "anthony@utopios.net"));
    contacts.push(new Contact("Mme", "Abadi", "Marine", new Date("1990,10,12"), "+33 6 14 25 36 98", "anthony@utopios.net"));
}

function init() {
    createFake();
    console.table(contacts);
    updateTab();
}


validerBtn.onclick = () => {
    alert("ok")
}


window.onload = init()