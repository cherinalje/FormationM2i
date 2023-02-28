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







function updateTab() {
    // On vide le contenu du table
    tableau.innerHTML = '';
    // On Insert les Contacts
    let counter = 1;
    for (let contact of contacts) {
        tableau.innerHTML += `<tr>
            <td scope="col">${counter}</td>
            <td scope="col">${contact.titre}</td>
            <td scope="col">${contact.nom}</td>
            <td scope="col">${contact.prenom}</td>
            <td scope="col">${contact.dateNaissance.toLocaleDateString()}</td>
            <td scope="col">${contact.telephone}</td>
            <td scope="col">${contact.email}</td>
            <td scope="col" class="myicon"><a><i class="fa-solid fa-trash onclick="Delete(${counter-1})"></i>
            </a></td>
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

function Delete(index) {
    // alert(`ok : ${index}`);
    if (confirm("voulez-vous supprimer le contact n°" + index + 1))
        contacts.splice(index, 1);
    updateTab();
}

function resetForm() {
    document.querySelector('#nom').value = "";
    document.querySelector('#prenom').value = "";
    document.querySelector('#dateNaissance').value = new Date();
    document.querySelector('#telephone').value = "";
    document.querySelector('#email').value = "";
    document.getElementById('Mme').checked = true
}
validerBtn.onclick = () => {
    //alert("ok")

    /**
     * récupération saisie utilisateur
     * création de l'objet contact
     * ajout dans la liste de contact
     * rafraichir le tableau html
     * vider les champs de saisie
     */

    //récupération saisie utilisateur
    const nom = document.querySelector('#nom').value;
    const prenom = document.querySelector('#prenom').value;
    const dateNaissance = document.querySelector('#dateNaissance').value;
    const telephone = document.querySelector('#telephone').value;
    const email = document.querySelector('#email').value;
    const titre = document.getElementById('Mme').checked ? 'Mme' : 'Mr';

    //création de l'objet contact
    let tmp;
    if (nom != "" && prenom != "" && dateNaissance != "" && telephone != "" && email != "") {
        tmp = new Contact(titre, nom, prenom, new Date(dateNaissance), telephone, email);
        console.log(tmp);
        //Ajout dans la liste de contact
        contacts.push(tmp);
        //rafraichir le tableau
        updateTab();
        //vider les champs de saisie utilisateur
        resetForm();

    } else
        alert("veuillez remplir tous les champs!!!");


}


window.onload = init()
window.Delete = Delete()