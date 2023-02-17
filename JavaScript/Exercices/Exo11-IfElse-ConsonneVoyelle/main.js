/**
 * Exercice11 - IfElse - Consonne...? Voyelle...?
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('#result');

// Récupération et stockage des saisie utilisateur
var userLetter = prompt("Veuillez saisir une lettre").toUpperCase();

// Etablissement Structure If() pour vérifier la saisie utilisateur
// if (userLetter == "A" ||
//     userLetter == "E" ||
//     userLetter == "I" ||
//     userLetter == "O" ||
//     userLetter == "U" ||
//     userLetter == "Y") {
//     resultat = `La lettre ${userLetter} est une voyelle`;
//     alert(resultat);
// } else {
//     resultat = `La lettre ${userLetter} est une consonne`;
//     alert(resultat);
// }

// Etablissement Structure If() pour vérifier la saisie utilisateur (Avec Liste Voyelle)
//const voyelle = ["A","E","I","O","U","Y"];
const voyelle = "AEIOUY";
//if (voyelle.includes(userLetter)) {
if (voyelle.includes(userLetter)) {
    resultat = `La lettre ${userLetter} est une voyelle`;
    alert(resultat);
} else {
    resultat = `La lettre ${userLetter} est une consonne`;
    alert(resultat);
}

// Injection du résultat dans l'element HTML .result
result.innerHTML = `${resultat}`;