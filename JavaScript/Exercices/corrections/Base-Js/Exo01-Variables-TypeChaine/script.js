/**
 * EXERCICE 01 - Les Variables & Opérateurs Arithmétiques - Les variables type chaine de caractères
 */

// Création de la constante result pemettant de récupérer un element du DOM Id="result"
const result = document.querySelector('#result')

var prenom = "", nom="", affichage="", nomComplet="";

// Affichage du titre de l'exercice
affichage ="<h3>Addition de deux variables de type chaîne (Concaténation)</h3>"

// Récupération des saisie utilisateur
prenom = prompt("Veuillez saisir votre prénom : ");
affichage += `Vous avez saisi : <b>${prenom}</b> <br>`;
nom = prompt("Veuillez saisir votre nom : ");
affichage += `Vous avez saisi : <b>${nom}</b> <br>`;

// Addition des deux variables de type chaîne (Concaténation)
nomComplet = prenom + " " + nom;

// Affichage du nom complet + bonjour
affichage += `Bonjour <b>${nomComplet}</b> <br> <hr>`;

result.innerHTML += affichage