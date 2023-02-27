/*
 * Les Inputs en Javascript
 */

const result = document.querySelector('#result');
const Nom = document.querySelector('#nom');
const Prenom = document.querySelector('#prenom');

let Affichage = "";

Valider = () => {
  let UserLastName = Nom.value;
  let UserFirstName = Prenom.value;
  //if (Nom.value !== "" && Prenom.value !== "") {
  if (UserLastName !== "" && UserFirstName !== "") {
    Afficher(UserLastName, UserFirstName);
    reset();
  }
  else
    alert("Veuillez saisir tous les champs avant de valider");
}

function Afficher(lastname, firstname) {
  Affichage = `<h3>Vous avez saisi ${lastname} ${firstname}</h3>`;
  result.innerHTML = Affichage;
}

reset = () => {
 Nom.value = "";
  Prenom.value = "";
}